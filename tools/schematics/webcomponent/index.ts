import {
    apply,
    branchAndMerge,
    chain,
    mergeWith,
    move,
    Rule,
    template,
    Tree,
    url,
    SchematicsException
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { findNodes, insertImport } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { getWorkspace } from '@schematics/angular/utility/config';
import { join } from 'path';
import * as ts from 'typescript';


function readSourceFile(tree: Tree, filePath: string) {
    const registryFileContent = tree.read(filePath)?.toString('utf8') as string;
    return ts.createSourceFile(
        filePath.split('/').pop() as string,
        registryFileContent,
        ts.ScriptTarget.Latest,
        true
    );
}


function addImport(args: {
    tree: Tree,
    filePath: string;
    symbolName: string,
    importPath: string,
}): Rule {
    const source = readSourceFile(
        args.tree,
        args.filePath,
    );

    const change = insertImport(
        source,
        args.filePath,
        args.symbolName,
        args.importPath
    ) as InsertChange;

    return tree => {
        const recorder = tree.beginUpdate(args.filePath);
        recorder.insertLeft(change.pos, change.toAdd);
        tree.commitUpdate(recorder);
        return tree;
    };
}

function addElementInArray(args: {
    tree: Tree,
    arrayName: string;
    filePath: string;
    toAdd: string
}): Rule {
    return tree => {
        const source = readSourceFile(
            args.tree,
            args.filePath,
        );
        const keywords = findNodes(source, ts.SyntaxKind.VariableStatement);
        const changes: Change[] = [];
        for (const keyword of keywords) {
            if (ts.isVariableStatement(keyword)) {
                const [ declaration ] = keyword.declarationList.declarations;
                if (
                    ts.isVariableDeclaration(declaration) &&
                    declaration.initializer &&
                    declaration.name.getText() === args.arrayName
                ) {
                    const node = declaration.initializer.getChildAt(1);
                    const lastToken = node.getLastToken();
                    let commas = ',';
                    let pos = node.getEnd() + 1;
                    if (lastToken) {
                        let trailingCommaFound = false;
                        if (lastToken.kind === ts.SyntaxKind.CommaToken) {
                            trailingCommaFound = true;
                        } else {
                            changes.push(new InsertChange(args.filePath, lastToken.getEnd(), ','));
                        }
                        commas = trailingCommaFound ? ',' : '';
                        pos = lastToken.getEnd() + 1;
                    }
                    changes.push(new InsertChange(
                        args.filePath,
                        pos,
                        args.toAdd + commas + '\n'
                    ));
                    break;
                }
            }
        };
        const recorder = tree.beginUpdate(args.filePath);
        for (const change of changes) {
            if (change instanceof InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }
        tree.commitUpdate(recorder);
        return tree;
    };
}

function addComponentToRegistry(tree: Tree, schema: SchematicOptions): Rule {
    const fileName = schema.name;
    const className = strings.classify(schema.name);
    const toAdd = `    { selector: 'wc-${fileName}', loadChildren: () => import('./${fileName}/${fileName}.module').then(m => m.${className}Module) }`;
    return addElementInArray({
        tree,
        toAdd,
        filePath: schema.registryFilePath,
        arrayName: 'WEB_COMPONENTS_BUNDLES',
    });
}

function addComponentToProviders(tree: Tree, schema: SchematicOptions): Rule {
    const className = strings.classify(schema.name);
    const toAdd = `    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: ${className}ComponentDefinition }`;
    return addElementInArray({
        tree,
        toAdd,
        filePath: schema.registryFilePath,
        arrayName: 'WEB_COMPONENTS_PROVIDERS',
    });
}

export default function (schema: SchematicOptions): Rule {
    if (!schema.name) {
        throw new SchematicsException('name option is required.');
    }

    return (tree: Tree) => {
        const workspace = getWorkspace(tree);
        const components = workspace.projects['features-web-components'];
        const sourceRoot = components.sourceRoot as string;

        schema.name = strings.dasherize(schema.name);
        if (schema.name.startsWith('wc-')) {
            schema.name = schema.name.substring(3, schema.name.length)
        }
        schema.registryFilePath = 'libs/features/web-components/src/lib/web-components-registry.ts';
        const sources = apply(url('./files'), [
            template({
                ...strings,
                ...schema,
            }),
            move(join(sourceRoot, 'lib', schema.name)),
        ]);
        return chain([
            addImport({
                tree,
                filePath: schema.registryFilePath,
                symbolName: `${strings.classify(schema.name)}ComponentDefinition`,
                importPath: `./${schema.name}/${schema.name}`,
            }),
            addComponentToRegistry(tree, schema),
            addComponentToProviders(tree, schema),
            mergeWith(sources)
        ]);
    };
}

export interface SchematicOptions {
    name: string;
    registryFilePath: string;
    registryFileName: string;
}
