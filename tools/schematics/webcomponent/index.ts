import { strings } from '@angular-devkit/core';
import {
    apply,
    branchAndMerge,
    mergeWith,
    move,
    Rule,
    SchematicContext,
    template,
    Tree,
    url,
} from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { join } from 'path';

export default function (schema: SchematicOptions): Rule {
    return (host: Tree, context: SchematicContext) => {
        const workspace = getWorkspace(host);

        schema.name = strings.dasherize(schema.name);

        const components = workspace.projects['webcomponents'];
        const sourceRoot = components.sourceRoot as string;
        const moduleSource = apply(url('./files'), [
            template({
                ...strings,
                ...schema,
            }),
            move(join(sourceRoot, 'lib', schema.name)),
        ]);
        return branchAndMerge(mergeWith(moduleSource));
    };
}

export interface SchematicOptions {
    name: string;
}
