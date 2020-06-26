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
import { findNodes } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { getWorkspace } from '@schematics/angular/utility/config';
import { join } from 'path';
import * as ts from 'typescript';

function addComponentToRegistry(source: ts.SourceFile, schema: SchematicOptions): Rule {
    const keywords = findNodes(source, ts.SyntaxKind.VariableStatement);
    const changes: Change[] = [];
    for (const keyword of keywords) {
        if (ts.isVariableStatement(keyword)) {
            const [ declaration ] = keyword.declarationList.declarations;
            if (ts.isVariableDeclaration(declaration) && declaration.initializer && declaration.name.getText() === 'WEB_COMPONENTS_REGISTRY') {
                const node = declaration.initializer.getChildAt(1);
                const lastRouteNode = node.getLastToken();

                if (!lastRouteNode) {
                    break;
                }

                let trailingCommaFound = false;
                if (lastRouteNode.kind === ts.SyntaxKind.CommaToken) {
                    trailingCommaFound = true;
                } else {
                    changes.push(new InsertChange(schema.registryFilePath, lastRouteNode.getEnd(), ','));
                }

                changes.push(
                    new InsertChange(
                        schema.registryFilePath,
                        lastRouteNode.getEnd() + 1,
                        `    { selector: 'wc-${schema.name}', loadChildren: () => import('./${schema.name}/${schema.name}.module').then( m => m.${strings.classify(schema.name)}Module) }${trailingCommaFound ? ',' : ''}\n`
                    )
                );
                break;
            }
        }
    }

    return tree => {
        const recorder = tree.beginUpdate(schema.registryFilePath);
        for (const change of changes) {
            if (change instanceof InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }
        tree.commitUpdate(recorder);
        return tree;
    };
}

export default function (schema: SchematicOptions): Rule {
    if (!schema.name) {
        throw new SchematicsException('name option is required.');
    }

    return (tree: Tree) => {
        const workspace = getWorkspace(tree);
        const components = workspace.projects['webcomponents'];
        const sourceRoot = components.sourceRoot as string;

        schema.name = strings.dasherize(schema.name);
        if (schema.name.startsWith('wc-')) {
            schema.name = schema.name.substring(3, schema.name.length)
        }
        schema.registryFilePath = 'libs/webcomponents/src/lib/web-components-registry.ts';
        schema.registryFileName = 'web-components-registry.ts';

        const moduleSource = apply(url('./files'), [
            template({
                ...strings,
                ...schema,
            }),
            move(join(sourceRoot, 'lib', schema.name)),
        ]);

        const registryFileContent = tree.read(schema.registryFilePath)?.toString('utf8') as string;
        const source  = ts.createSourceFile(schema.registryFileName, registryFileContent, ts.ScriptTarget.Latest, true);

        return chain([
            branchAndMerge(chain([
                addComponentToRegistry(source, schema),
                mergeWith(moduleSource)
            ]))
        ]);
    };
}

export interface SchematicOptions {
    name: string;
    registryFilePath: string;
    registryFileName: string;
}
