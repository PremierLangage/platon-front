// tslint:disable: max-line-length
// tslint:disable: object-literal-key-quotes

import { MonacoThemeDefinition } from './theme';
import { Injectable } from '@angular/core';

@Injectable()
export class LightTheme implements MonacoThemeDefinition {
    id = 'light-theme';
    base: monaco.editor.BuiltinTheme = 'vs';
    inherit = true;
    rules: monaco.editor.ITokenThemeRule[] =  [
        {
            token: 'comment',
            foreground: 'A0A1A7',
            fontStyle: 'italic',
        },
        {
            token: 'customrule',
            foreground: '383A42',
        },
        {
            token: 'support.type.property-name',
            foreground: '383A42',
        },
        {
            token: 'string.quoted.double punctuation',
            foreground: '50A14F',
        },
        {
            token: 'support.constant',
            foreground: '986801',
        },
        {
            token: 'support.type.property-name.json',
            foreground: 'E45649',
        },
        {
            token: 'support.type.property-name.json punctuation',
            foreground: 'E45649',
        },
        {
            token: 'meta.template.expression.js string.template punctuation.definition.string.template',
            foreground: '50A14F',
        },
        {
            token: 'meta.template.expression.jsx string.template punctuation.definition.string.template',
            foreground: '50A14F',
        },
        {
            token: 'meta.template.expression.ts string.template punctuation.definition.string.template',
            foreground: '50A14F',
        },
        {
            token: 'meta.template.expression.tsx string.template punctuation.definition.string.template',
            foreground: '50A14F',
        },
        {
            token: 'keyword.operator.expression.in.js',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.expression.in.jsx',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.expression.in.ts',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.expression.in.tsx',
            foreground: 'A626A4',
        },
        {
            token: 'source.python constant.other',
            foreground: '383A42',
        },
        {
            token: 'source.python constant',
            foreground: '986801',
        },
        {
            token: 'constant.character.format.placeholder.other.python storage',
            foreground: '986801',
        },
        {
            token: 'support.variable.magic.python',
            foreground: 'E45649',
        },
        {
            token: 'meta.function.parameters.python',
            foreground: '986801',
        },
        {
            token: 'punctuation.separator.annotation.python',
            foreground: '383A42',
        },
        {
            token: 'punctuation.separator.parameters.python',
            foreground: '383A42',
        },
        {
            token: 'entity.name.variable.field.cs',
            foreground: 'E45649',
        },
        {
            token: 'source.cs keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'variable.other.readwrite.cs',
            foreground: '383A42',
        },
        {
            token: 'variable.other.object.cs',
            foreground: '383A42',
        },
        {
            token: 'variable.other.object.property.cs',
            foreground: '383A42',
        },
        {
            token: 'entity.name.variable.property.cs',
            foreground: '4078F2',
        },
        {
            token: 'storage.type.cs',
            foreground: 'C18401',
        },
        {
            token: 'keyword.other.unsafe.rust',
            foreground: 'E45649',
        },
        {
            token: 'markup.raw.block.markdown',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.variable.shell',
            foreground: 'E45649',
        },
        {
            token: 'support.constant.property-value.css',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.constant.css',
            foreground: '986801',
        },
        {
            token: 'punctuation.separator.key-value.scss',
            foreground: 'E45649',
        },
        {
            token: 'punctuation.definition.constant.scss',
            foreground: '986801',
        },
        {
            token: 'meta.property-list.scss punctuation.separator.key-value.scss',
            foreground: '383A42',
        },
        {
            token: 'storage.type.primitive.array.java',
            foreground: 'C18401',
        },
        {
            token: 'entity.name.section.markdown',
            foreground: 'E45649',
        },
        {
            token: 'punctuation.definition.heading.markdown',
            foreground: 'E45649',
        },
        {
            token: 'markup.heading.setext',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.bold.markdown',
            foreground: '986801',
        },
        {
            token: 'markup.inline.raw.markdown',
            foreground: '50A14F',
        },
        {
            token: 'beginning.punctuation.definition.list.markdown',
            foreground: 'E45649',
        },
        {
            token: 'markup.quote.markdown',
            foreground: 'A0A1A7',
            fontStyle: 'italic',
        },
        {
            token: 'punctuation.definition.string.begin.markdown',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.string.end.markdown',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.string.begin.markdown',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.string.end.markdown',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.metadata.markdown',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.metadata.markdown',
            foreground: 'A626A4',
        },
        {
            token: 'markup.underline.link.markdown',
            foreground: 'A626A4',
        },
        {
            token: 'markup.underline.link.image.markdown',
            foreground: 'A626A4',
        },
        {
            token: 'string.other.link.title.markdown',
            foreground: '4078F2',
        },
        {
            token: 'string.other.link.description.markdown',
            foreground: '4078F2',
        },
        {
            token: 'punctuation.separator.variable.ruby',
            foreground: 'E45649',
        },
        {
            token: 'variable.other.constant.ruby',
            foreground: '986801',
        },
        {
            token: 'keyword.operator.other.ruby',
            foreground: '50A14F',
        },
        {
            token: 'punctuation.definition.variable.php',
            foreground: 'E45649',
        },
        {
            token: 'meta.class.php',
            foreground: '383A42',
        },
        {
            token: 'comment',
            foreground: 'A0A1A7',
            fontStyle: 'italic',
        },
        {
            token: 'comment markup.link',
            foreground: 'A0A1A7',
        },
        {
            token: 'entity.name.type',
            foreground: 'C18401',
        },
        {
            token: 'entity.other.inherited-class',
            foreground: '50A14F',
        },
        {
            token: 'keyword',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.control',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'keyword.other.special-method',
            foreground: '4078F2',
        },
        {
            token: 'keyword.other.unit',
            foreground: '986801',
        },
        {
            token: 'storage',
            foreground: 'A626A4',
        },
        {
            token: 'storage.type.annotation',
            foreground: 'A626A4',
        },
        {
            token: 'storage.type.primitive',
            foreground: 'A626A4',
        },
        {
            token: 'storage.modifier.package',
            foreground: '383A42',
        },
        {
            token: 'storage.modifier.import',
            foreground: '383A42',
        },
        {
            token: 'constant',
            foreground: '986801',
        },
        {
            token: 'constant.variable',
            foreground: '986801',
        },
        {
            token: 'constant.character.escape',
            foreground: '0184BC',
        },
        {
            token: 'constant.numeric',
            foreground: '986801',
        },
        {
            token: 'constant.other.color',
            foreground: '0184BC',
        },
        {
            token: 'constant.other.symbol',
            foreground: '0184BC',
        },
        {
            token: 'variable',
            foreground: 'E45649',
        },
        {
            token: 'variable.interpolation',
            foreground: 'CA1243',
        },
        {
            token: 'variable.parameter',
            foreground: '383A42',
        },
        {
            token: 'string',
            foreground: '50A14F',
        },
        {
            token: 'string.regexp',
            foreground: '0184BC',
        },
        {
            token: 'string.regexp source.ruby.embedded',
            foreground: 'C18401',
        },
        {
            token: 'string.other.link',
            foreground: 'E45649',
        },
        {
            token: 'punctuation.definition.comment',
            foreground: 'A0A1A7',
        },
        {
            token: 'punctuation.definition.method-parameters',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.function-parameters',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.parameters',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.separator',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.seperator',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.array',
            foreground: '383A42',
        },
        {
            token: 'punctuation.definition.heading',
            foreground: '4078F2',
        },
        {
            token: 'punctuation.definition.identity',
            foreground: '4078F2',
        },
        {
            token: 'punctuation.definition.bold',
            foreground: 'C18401',
            fontStyle: 'bold',
        },
        {
            token: 'punctuation.definition.italic',
            foreground: 'A626A4',
            fontStyle: 'italic',
        },
        {
            token: 'punctuation.section.embedded',
            foreground: 'CA1243',
        },
        {
            token: 'punctuation.section.method',
            foreground: '383A42',
        },
        {
            token: 'punctuation.section.class',
            foreground: '383A42',
        },
        {
            token: 'punctuation.section.inner-class',
            foreground: '383A42',
        },
        {
            token: 'support.class',
            foreground: 'C18401',
        },
        {
            token: 'support.type',
            foreground: '0184BC',
        },
        {
            token: 'support.function',
            foreground: '0184BC',
        },
        {
            token: 'support.function.any-method',
            foreground: '4078F2',
        },
        {
            token: 'entity.name.function',
            foreground: '4078F2',
        },
        {
            token: 'entity.name.class',
            foreground: 'C18401',
        },
        {
            token: 'entity.name.type.class',
            foreground: 'C18401',
        },
        {
            token: 'entity.name.section',
            foreground: '4078F2',
        },
        {
            token: 'entity.name.tag',
            foreground: 'E45649',
        },
        {
            token: 'entity.other.attribute-name',
            foreground: '986801',
        },
        {
            token: 'entity.other.attribute-name.id',
            foreground: '4078F2',
        },
        {
            token: 'meta.class',
            foreground: 'C18401',
        },
        {
            token: 'meta.class.body',
            foreground: '383A42',
        },
        {
            token: 'meta.method-call',
            foreground: '383A42',
        },
        {
            token: 'meta.method',
            foreground: '383A42',
        },
        {
            token: 'meta.definition.variable',
            foreground: 'E45649',
        },
        {
            token: 'meta.link',
            foreground: '986801',
        },
        {
            token: 'meta.require',
            foreground: '4078F2',
        },
        {
            token: 'meta.selector',
            foreground: 'A626A4',
        },
        {
            token: 'meta.separator',
            background: '373B41',
            foreground: '383A42',
        },
        {
            token: 'meta.tag',
            foreground: '383A42',
        },
        {
            token: 'underline',
        },
        {
            token: 'none',
            foreground: '383A42',
        },
        {
            token: 'invalid.deprecated',
            foreground: '000000',
            background: 'F2A60D',
        },
        {
            token: 'invalid.illegal',

            foreground: 'ffffff',
            background: 'FF1414',
        },
        {
            token: 'markup.bold',
            foreground: '986801',
            fontStyle: 'bold',
        },
        {
            token: 'markup.changed',
            foreground: 'A626A4',
        },
        {
            token: 'markup.deleted',
            foreground: 'E45649',
        },
        {
            token: 'markup.italic',
            foreground: 'A626A4',
            fontStyle: 'italic',
        },
        {
            token: 'markup.heading',
            foreground: 'E45649',
        },
        {
            token: 'markup.heading punctuation.definition.heading',
            foreground: '4078F2',
        },
        {
            token: 'markup.link',
            foreground: 'A626A4',
        },
        {
            token: 'markup.inserted',
            foreground: '50A14F',
        },
        {
            token: 'markup.quote',
            foreground: '986801',
        },
        {
            token: 'markup.raw',
            foreground: '50A14F',
        },
        {
            token: 'source.c keyword.operator',
            foreground: 'A626A4',
        },
        {
            token: 'source.cpp keyword.operator',
            foreground: 'A626A4',
        },
        {
            token: 'source.cs keyword.operator',
            foreground: 'A626A4',
        },
        {
            token: 'source.css property-name',
            foreground: '696C77',
        },
        {
            token: 'source.css property-value',
            foreground: '696C77',
        },
        {
            token: 'source.css property-name.support',
            foreground: '383A42',
        },
        {
            token: 'source.css property-value.support',
            foreground: '383A42',
        },
        {
            token: 'source.gfm markup',
        },
        {
            token: 'source.gfm link entity',
            foreground: '4078F2',
        },
        {
            token: 'source.go storage.type.string',
            foreground: 'A626A4',
        },
        {
            token: 'source.ini keyword.other.definition.ini',
            foreground: 'E45649',
        },
        {
            token: 'source.java storage.modifier.import',
            foreground: 'C18401',
        },
        {
            token: 'source.java storage.type',
            foreground: 'C18401',
        },
        {
            token: 'source.java keyword.operator.instanceof',
            foreground: 'A626A4',
        },
        {
            token: 'source.java-properties meta.key-pair',
            foreground: 'E45649',
        },
        {
            token: 'source.java-properties meta.key-pair > punctuation',
            foreground: '383A42',
        },
        {
            token: 'source.js keyword.operator',
            foreground: '0184BC',
        },
        {
            token: 'source.js keyword.operator.delete',
            foreground: 'A626A4',
        },
        {
            token: 'source.js keyword.operator.in',
            foreground: 'A626A4',
        },
        {
            token: 'source.js keyword.operator.of',
            foreground: 'A626A4',
        },
        {
            token: 'source.js keyword.operator.instanceof',
            foreground: 'A626A4',
        },
        {
            token: 'source.js keyword.operator.new',
            foreground: 'A626A4',
        },
        {
            token: 'source.js keyword.operator.typeof',
            foreground: 'A626A4',
        },
        {
            token: 'source.js keyword.operator.void',
            foreground: 'A626A4',
        },
        {
            token: 'source.json meta.structure.dictionary.json > string.quoted.json',
            foreground: 'E45649',
        },
        {
            token: 'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
            foreground: 'E45649',
        },
        {
            token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
            foreground: '50A14F',
        },
        {
            token: 'source.json meta.structure.array.json > value.json > string.quoted.json',
            foreground: '50A14F',
        },
        {
            token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation',
            foreground: '50A14F',
        },
        {
            token: 'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
            foreground: '50A14F',
        },
        {
            token: 'source.json meta.structure.dictionary.json > constant.language.json',
            foreground: '0184BC',
        },
        {
            token: 'source.json meta.structure.array.json > constant.language.json',
            foreground: '0184BC',
        },
        {
            token: 'source.ruby constant.other.symbol > punctuation',
            foreground: '0184BC',
        },
        {
            token: 'source.python keyword.operator.logical.python',
            foreground: 'A626A4',
        },
        {
            token: 'source.python variable.parameter',
            foreground: '986801',
        },
        {
            token: 'meta.attribute.rust',
            foreground: '606135',
        },
        {
            token: 'storage.modifier.lifetime.rust',
            foreground: '11C4C6',
        },
        {
            token: 'entity.name.lifetime.rust',
            foreground: '11C4C6',
        },
        {
            token: 'keyword.unsafe.rust',
            foreground: '882328',
        },
        {
            token: 'punctuation.separator.key-value.ts',
            foreground: '0184BC',
        },
        {
            token: 'punctuation.separator.key-value.js',
            foreground: '0184BC',
        },
        {
            token: 'punctuation.separator.key-value.tsx',
            foreground: '0184BC',
        },
        {
            token: 'source.js.embedded.html keyword.operator',
            foreground: '0184BC',
        },
        {
            token: 'source.ts.embedded.html keyword.operator',
            foreground: '0184BC',
        },
        {
            token: 'variable.other.readwrite.js',
            foreground: '383A42',
        },
        {
            token: 'variable.other.readwrite.ts',
            foreground: '383A42',
        },
        {
            token: 'variable.other.readwrite.tsx',
            foreground: '383A42',
        },
        {
            token: 'support.variable.dom.js',
            foreground: 'E45649',
        },
        {
            token: 'support.variable.dom.ts',
            foreground: 'E45649',
        },
        {
            token: 'support.variable.property.dom.js',
            foreground: 'E45649',
        },
        {
            token: 'support.variable.property.dom.ts',
            foreground: 'E45649',
        },
        {
            token: 'meta.template.expression.js punctuation.definition',
            foreground: 'CA1243',
        },
        {
            token: 'meta.template.expression.ts punctuation.definition',
            foreground: 'CA1243',
        },
        {
            token: 'source.ts punctuation.definition.typeparameters',
            foreground: '383A42',
        },
        {
            token: 'source.js punctuation.definition.typeparameters',
            foreground: '383A42',
        },
        {
            token: 'source.tsx punctuation.definition.typeparameters',
            foreground: '383A42',
        },
        {
            token: 'source.ts punctuation.definition.block',
            foreground: '383A42',
        },
        {
            token: 'source.js punctuation.definition.block',
            foreground: '383A42',
        },
        {
            token: 'source.tsx punctuation.definition.block',
            foreground: '383A42',
        },
        {
            token: 'source.ts punctuation.separator.comma',
            foreground: '383A42',
        },
        {
            token: 'source.js punctuation.separator.comma',
            foreground: '383A42',
        },
        {
            token: 'source.tsx punctuation.separator.comma',
            foreground: '383A42',
        },
        {
            token: 'support.variable.property.js',
            foreground: 'E45649',
        },
        {
            token: 'support.variable.property.ts',
            foreground: 'E45649',
        },
        {
            token: 'support.variable.property.tsx',
            foreground: 'E45649',
        },
        {
            token: 'keyword.control.default.js',
            foreground: 'E45649',
        },
        {
            token: 'keyword.control.default.ts',
            foreground: 'E45649',
        },
        {
            token: 'keyword.control.default.tsx',
            foreground: 'E45649',
        },
        {
            token: 'keyword.operator.expression.instanceof.js',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.expression.instanceof.ts',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.expression.instanceof.tsx',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.expression.of.js',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.expression.of.ts',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.expression.of.tsx',
            foreground: 'A626A4',
        },
        {
            token: 'meta.brace.round.js',
            foreground: '383A42',
        },
        {
            token: 'meta.array-binding-pattern-variable.js',
            foreground: '383A42',
        },
        {
            token: 'meta.brace.square.js',
            foreground: '383A42',
        },
        {
            token: 'meta.brace.round.ts',
            foreground: '383A42',
        },
        {
            token: 'meta.array-binding-pattern-variable.ts',
            foreground: '383A42',
        },
        {
            token: 'meta.brace.square.ts',
            foreground: '383A42',
        },
        {
            token: 'meta.brace.round.tsx',
            foreground: '383A42',
        },
        {
            token: 'meta.array-binding-pattern-variable.tsx',
            foreground: '383A42',
        },
        {
            token: 'meta.brace.square.tsx',
            foreground: '383A42',
        },
        {
            token: 'source.js punctuation.accessor',
            foreground: '383A42',
        },
        {
            token: 'source.ts punctuation.accessor',
            foreground: '383A42',
        },
        {
            token: 'source.tsx punctuation.accessor',
            foreground: '383A42',
        },
        {
            token: 'punctuation.terminator.statement.js',
            foreground: '383A42',
        },
        {
            token: 'punctuation.terminator.statement.ts',
            foreground: '383A42',
        },
        {
            token: 'punctuation.terminator.statement.tsx',
            foreground: '383A42',
        },
        {
            token: 'meta.array-binding-pattern-variable.js variable.other.readwrite.js',
            foreground: '986801',
        },
        {
            token: 'meta.array-binding-pattern-variable.ts variable.other.readwrite.ts',
            foreground: '986801',
        },
        {
            token: 'meta.array-binding-pattern-variable.tsx variable.other.readwrite.tsx',
            foreground: '986801',
        },
        {
            token: 'source.js support.variable',
            foreground: 'E45649',
        },
        {
            token: 'source.ts support.variable',
            foreground: 'E45649',
        },
        {
            token: 'source.tsx support.variable',
            foreground: 'E45649',
        },
        {
            token: 'variable.other.constant.property.js',
            foreground: '986801',
        },
        {
            token: 'variable.other.constant.property.ts',
            foreground: '986801',
        },
        {
            token: 'variable.other.constant.property.tsx',
            foreground: '986801',
        },
        {
            token: 'keyword.operator.new.ts',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.new.j',
            foreground: 'A626A4',
        },
        {
            token: 'keyword.operator.new.tsx',
            foreground: 'A626A4',
        },
        {
            token: 'source.ts keyword.operator',
            foreground: '0184BC',
        },
        {
            token: 'source.tsx keyword.operator',
            foreground: '0184BC',
        },
        {
            token: 'punctuation.separator.parameter.js',
            foreground: '383A42',
        },
        {
            token: 'punctuation.separator.parameter.ts',
            foreground: '383A42',
        },
        {
            token: 'punctuation.separator.parameter.tsx ',
            foreground: '383A42',
        },
        {
            token: 'constant.language.import-export-all.js',
            foreground: 'E45649',
        },
        {
            token: 'constant.language.import-export-all.ts',
            foreground: 'E45649',
        },
        {
            token: 'constant.language.import-export-all.jsx',
            foreground: '0184BC',
        },
        {
            token: 'constant.language.import-export-all.tsx',
            foreground: '0184BC',
        },
        {
            token: 'keyword.control.as.js',
            foreground: '383A42',
        },
        {
            token: 'keyword.control.as.ts',
            foreground: '383A42',
        },
        {
            token: 'keyword.control.as.jsx',
            foreground: '383A42',
        },
        {
            token: 'keyword.control.as.tsx',
            foreground: '383A42',
        },
        {
            token: 'variable.other.readwrite.alias.js',
            foreground: 'E45649',
        },
        {
            token: 'variable.other.readwrite.alias.ts',
            foreground: 'E45649',
        },
        {
            token: 'variable.other.readwrite.alias.jsx',
            foreground: 'E45649',
        },
        {
            token: 'variable.other.readwrite.alias.tsx',
            foreground: 'E45649',
        },
        {
            token: 'variable.other.constant.js',
            foreground: '986801',
        },
        {
            token: 'variable.other.constant.ts',
            foreground: '986801',
        },
        {
            token: 'variable.other.constant.jsx',
            foreground: '986801',
        },
        {
            token: 'variable.other.constant.tsx',
            foreground: '986801',
        },
        {
            token: 'meta.export.default.js variable.other.readwrite.js',
            foreground: 'E45649',
        },
        {
            token: 'meta.export.default.ts variable.other.readwrite.ts',
            foreground: 'E45649',
        },
        {
            token: 'source.js meta.template.expression.js punctuation.accessor',
            foreground: '50A14F',
        },
        {
            token: 'source.ts meta.template.expression.ts punctuation.accessor',
            foreground: '50A14F',
        },
        {
            token: 'source.tsx meta.template.expression.tsx punctuation.accessor',
            foreground: '50A14F',
        },
        {
            token: 'source.js meta.import-equals.external.js keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'source.jsx meta.import-equals.external.jsx keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'source.ts meta.import-equals.external.ts keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'source.tsx meta.import-equals.external.tsx keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'meta.definition.property.js variable',
            foreground: '383A42',
        },
        {
            token: 'meta.definition.property.ts variable',
            foreground: '383A42',
        },
        {
            token: 'meta.definition.property.jsx variable',
            foreground: '383A42',
        },
        {
            token: 'meta.definition.property.tsx variable',
            foreground: '383A42',
        },
        {
            token: 'meta.type.parameters.js support.type',
            foreground: '383A42',
        },
        {
            token: 'meta.type.parameters.jsx support.type',
            foreground: '383A42',
        },
        {
            token: 'meta.type.parameters.ts support.type',
            foreground: '383A42',
        },
        {
            token: 'meta.type.parameters.tsx support.type',
            foreground: '383A42',
        },
        {
            token: 'source.js meta.tag.js keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'source.jsx meta.tag.jsx keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'source.ts meta.tag.ts keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'source.tsx meta.tag.tsx keyword.operator',
            foreground: '383A42',
        },
        {
            token: 'meta.tag.js punctuation.section.embedded',
            foreground: '383A42',
        },
        {
            token: 'meta.tag.jsx punctuation.section.embedded',
            foreground: '383A42',
        },
        {
            token: 'meta.tag.ts punctuation.section.embedded',
            foreground: '383A42',
        },
        {
            token: 'meta.tag.tsx punctuation.section.embedded',
            foreground: '383A42',
        },
        {
            token: 'meta.array.literal.js variable',
            foreground: 'C18401',
        },
        {
            token: 'meta.array.literal.jsx variable',
            foreground: 'C18401',
        },
        {
            token: 'meta.array.literal.ts variable',
            foreground: 'C18401',
        },
        {
            token: 'meta.array.literal.tsx variable',
            foreground: 'C18401',
        },
        {
            token: 'support.type.object.module.js',
            foreground: 'E45649',
        },
        {
            token: 'support.type.object.module.jsx',
            foreground: 'E45649',
        },
        {
            token: 'support.type.object.module.ts',
            foreground: 'E45649',
        },
        {
            token: 'support.type.object.module.tsx',
            foreground: 'E45649',
        },
        {
            token: 'constant.language.json',
            foreground: '0184BC',
        },
        {
            token: 'variable.other.constant.object.js',
            foreground: '986801',
        },
        {
            token: 'variable.other.constant.object.jsx',
            foreground: '986801',
        },
        {
            token: 'variable.other.constant.object.ts',
            foreground: '986801',
        },
        {
            token: 'variable.other.constant.object.tsx',
            foreground: '986801',
        },
        {
            token: 'storage.type.property.js',
            foreground: '0184BC',
        },
        {
            token: 'storage.type.property.jsx',
            foreground: '0184BC',
        },
        {
            token: 'storage.type.property.ts',
            foreground: '0184BC',
        },
        {
            token: 'storage.type.property.tsx',
            foreground: '0184BC',
        },
        {
            token: 'meta.template.expression.js string.quoted punctuation.definition',
            foreground: '50A14F',
        },
        {
            token: 'meta.template.expression.jsx string.quoted punctuation.definition',
            foreground: '50A14F',
        },
        {
            token: 'meta.template.expression.ts string.quoted punctuation.definition',
            foreground: '50A14F',
        },
        {
            token: 'meta.template.expression.tsx string.quoted punctuation.definition',
            foreground: '50A14F',
        }
    ];
    colors = {
        'activityBar.background': '#f6f8fa', // Activity Bar background color.
        'activityBar.foreground': '#24292e', //  Activity Bar foreground color (for example used for the icons).
        'activityBar.activeBorder': '#000000', // Activity Bar active indicator border color.
        'activityBar.dropBackground': '#f6f8fa', // Drag and drop feedback color for the Activity Bar items.
        'activityBar.inactiveForeground': '#24292e99', // Activity Bar item foreground color when it is inactive.
        'activityBarBadge.background': '#526FFF', // Activity notification badge background color.
        'activityBarBadge.foreground': '#FFFFFF', // Activity notification badge foreground color.

        'sideBar.dropBackground': '#0000001a', // Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.
        'sideBar.background': '#fafbfc', // Side Bar background color.
        'sideBar.foreground': '#586069', // Side Bar foreground color.
        'sideBar.border': '#dddddd', // Side Bar border color on the side separating the editor.
        'sideBarSectionHeader.background': '#fafbfc', // Side Bar section header background color.
        'sideBarSectionHeader.foreground': '#24292e', // Side Bar section header foreground color.

        'list.focusBackground': '#d6ebff', // List/Tree background color for the focused item when the list/tree is active.
        'list.focusForeground': '#ffffff', // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
        'list.activeSelectionBackground': '#0074e8', // List/Tree background color for the selected item when the list/tree is active.
        'list.activeSelectionForeground': '#ffffff', // List/Tree foreground color for the selected item when the list/tree is active.
        'list.inactiveSelectionBackground': '#e4e6f1', // List/Tree background color for the selected item when the list/tree is inactive.
        'list.inactiveSelectionForeground': '#000000', // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
        'list.hoverBackground': '#e8e8e8', // List/Tree background when hovering over items using the mouse
        'list.hoverForeground': '#000000', // List/Tree foreground when hovering over items using the mouse.
        'list.dropBackground': '#d6ebff', // List/Tree drag and drop background when moving items around using the mouse.
        'list.errorForeground': '#b01011', // Foreground color of list items containing errors.
        'list.warningForeground': '#855f00',
        'list.highlightForeground': '#0066bf', // List/Tree foreground color of the match highlights when searching inside the list/tree.
        'list.filterMatchBackground': '#ea5c0055', // Background color of the filtered matches in lists and trees.
        'listFilterWidget.background': '#efc1ad',
        'listFilterWidget.noMatchesOutline': '#be1100',
        'listFilterWidget.outline': '#00000000',


        'statusBar.background': '#fafbfc',
        'statusBar.border': '#dddddd',
        'statusBar.debuggingBackground': '#fafbfc',
        'statusBar.debuggingForeground': '#24292e',
        'statusBar.foreground': '#24292e',
        'statusBar.noFolderBackground': '#fafbfc',
        'statusBar.noFolderForeground': '#24292e',

        'tab.activeBackground': '#ffffff',
        'tab.activeForeground': '#333333',
        'tab.activeModifiedBorder': '#33aaee',
        'tab.border': '#f3f3f3',
        'tab.inactiveBackground': '#ececec',
        'tab.inactiveForeground': '#333333b3',
        'tab.inactiveModifiedBorder': '#33aaee80',
        'tab.unfocusedActiveBackground': '#ffffff',
        'tab.unfocusedActiveForeground': '#333333b3',
        'tab.unfocusedActiveModifiedBorder': '#33aaeeb3',
        'tab.unfocusedInactiveForeground': '#33333359',
        'tab.unfocusedInactiveModifiedBorder': '#33aaee40',


        'editor.background': '#ffffff',
        'editor.foreground': '#24292e',

        'badge.background': '#526FFF',
        'badge.foreground': '#FFFFFF',


        'editor.lineHighlightBackground': '#fffbdd',
        'editorBracketMatch.background': '#f1f8ff',
        'editorBracketMatch.border': '#c8e1ff',
        'editorIndentGuide.background': '#eeeeee',
        'editorLineNumber.foreground': '#cccccc',

        'focusBorder': '#fafbfc',



        'breadcrumb.activeSelectionForeground': '#4e4e4e',
        'breadcrumb.background': '#ffffff',
        'breadcrumb.focusForeground': '#4e4e4e',
        'breadcrumb.foreground': '#616161cc',
        'breadcrumbPicker.background': '#f3f3f3',
        'button.background': '#007acc',
        'button.foreground': '#ffffff',
        'button.hoverBackground': '#0062a3',
        'checkbox.background': '#ffffff',
        'checkbox.border': '#cecece',
        'debugExceptionWidget.background': '#f1dfde',
        'debugExceptionWidget.border': '#a31515',
        'debugIcon.breakpointCurrentStackframeForeground': '#ffcc00',
        'debugIcon.breakpointDisabledForeground': '#848484',
        'debugIcon.breakpointForeground': '#e51400',
        'debugIcon.breakpointStackframeForeground': '#89d185',
        'debugIcon.breakpointUnverifiedForeground': '#848484',
        'debugIcon.continueForeground': '#007acc',
        'debugIcon.disconnectForeground': '#a1260d',
        'debugIcon.pauseForeground': '#007acc',
        'debugIcon.restartForeground': '#388a34',
        'debugIcon.startForeground': '#388a34',
        'debugIcon.stepBackForeground': '#007acc',
        'debugIcon.stepIntoForeground': '#007acc',
        'debugIcon.stepOutForeground': '#007acc',
        'debugIcon.stepOverForeground': '#007acc',
        'debugIcon.stopForeground': '#a1260d',
        'debugToolBar.background': '#f3f3f3',
        'descriptionForeground': '#717171',
        'diffEditor.insertedTextBackground': '#9bb95533',
        'diffEditor.removedTextBackground': '#ff000033',
        'dropdown.background': '#ffffff',
        'dropdown.border': '#cecece',
        'editor.findMatchBackground': '#a8ac94',
        'editor.findMatchHighlightBackground': '#ea5c0055',
        'editor.findRangeHighlightBackground': '#b4b4b44d',
        'editor.focusedStackFrameHighlightBackground': '#cee7ce73',
        'editor.foldBackground': '#add6ff4d',
        'editor.hoverHighlightBackground': '#add6ff26',
        'editor.inactiveSelectionBackground': '#add6ff80',
        'editor.lineHighlightBorder': '#eeeeee',
        'editor.rangeHighlightBackground': '#fdff0033',
        'editor.selectionBackground': '#add6ff',
        'editor.selectionHighlightBackground': '#dbedff99',
        'editor.snippetFinalTabstopHighlightBorder': '#0a326480',
        'editor.snippetTabstopHighlightBackground': '#0a326433',
        'editor.stackFrameHighlightBackground': '#ffff6673',
        'editor.symbolHighlightBackground': '#ea5c0055',
        'editor.wordHighlightBackground': '#57575740',
        'editor.wordHighlightStrongBackground': '#0e639c40',
        'editorActiveLineNumber.foreground': '#0b216f',
        'editorCodeLens.foreground': '#999999',
        'editorCursor.foreground': '#000000',
        'editorError.foreground': '#e51400',
        'editorGroup.border': '#e7e7e7',
        'editorGroup.dropBackground': '#2677cb2e',
        'editorGroupHeader.noTabsBackground': '#ffffff',
        'editorGroupHeader.tabsBackground': '#f3f3f3',
        'editorGutter.addedBackground': '#81b88b',
        'editorGutter.background': '#ffffff',
        'editorGutter.commentRangeForeground': '#c5c5c5',
        'editorGutter.deletedBackground': '#ca4b51',
        'editorGutter.modifiedBackground': '#66afe0',
        'editorHint.foreground': '#6c6c6c',
        'editorHoverWidget.background': '#f3f3f3',
        'editorHoverWidget.border': '#c8c8c8',
        'editorHoverWidget.foreground': '#616161',
        'editorHoverWidget.statusBarBackground': '#e7e7e7',
        'editorIndentGuide.activeBackground': '#33333333',
        'editorInfo.foreground': '#75beff',
        'editorLightBulb.foreground': '#ddb100',
        'editorLightBulbAutoFix.foreground': '#007acc',
        'editorLineNumber.activeForeground': '#0b216f',
        'editorLink.activeForeground': '#0000ff',
        'editorMarkerNavigation.background': '#ffffff',
        'editorMarkerNavigationError.background': '#e51400',
        'editorMarkerNavigationInfo.background': '#75beff',
        'editorMarkerNavigationWarning.background': '#e9a700',
        'editorOverviewRuler.addedForeground': '#81b88b99',
        'editorOverviewRuler.border': '#7f7f7f4d',
        'editorOverviewRuler.bracketMatchForeground': '#a0a0a0',
        'editorOverviewRuler.commonContentForeground': '#60606066',
        'editorOverviewRuler.currentContentForeground': '#40c8ae80',
        'editorOverviewRuler.deletedForeground': '#ca4b5199',
        'editorOverviewRuler.errorForeground': '#ff1212b3',
        'editorOverviewRuler.findMatchForeground': '#d186167e',
        'editorOverviewRuler.incomingContentForeground': '#40a6ff80',
        'editorOverviewRuler.infoForeground': '#75beff',
        'editorOverviewRuler.modifiedForeground': '#66afe099',
        'editorOverviewRuler.rangeHighlightForeground': '#007acc99',
        'editorOverviewRuler.selectionHighlightForeground': '#a0a0a0cc',
        'editorOverviewRuler.warningForeground': '#e9a700',
        'editorOverviewRuler.wordHighlightForeground': '#a0a0a0cc',
        'editorOverviewRuler.wordHighlightStrongForeground': '#c0a0c0cc',
        'editorPane.background': '#ffffff',
        'editorRuler.foreground': '#d3d3d3',
        'editorSuggestWidget.background': '#f3f3f3',
        'editorSuggestWidget.border': '#c8c8c8',
        'editorSuggestWidget.foreground': '#24292e',
        'editorSuggestWidget.highlightForeground': '#0066bf',
        'editorSuggestWidget.selectedBackground': '#d6ebff',
        'editorUnnecessaryCode.opacity': '#00000077',
        'editorWarning.foreground': '#e9a700',
        'editorWhitespace.foreground': '#33333333',
        'editorWidget.background': '#f3f3f3',
        'editorWidget.border': '#c8c8c8',
        'editorWidget.foreground': '#616161',
        'errorForeground': '#a1260d',
        'extensionBadge.remoteBackground': '#007acc',
        'extensionBadge.remoteForeground': '#ffffff',
        'extensionButton.prominentBackground': '#327e36',
        'extensionButton.prominentForeground': '#ffffff',
        'extensionButton.prominentHoverBackground': '#28632b',
        'foreground': '#616161',
        'gitDecoration.addedResourceForeground': '#587c0c',
        'gitDecoration.conflictingResourceForeground': '#6c6cc4',
        'gitDecoration.deletedResourceForeground': '#ad0707',
        'gitDecoration.ignoredResourceForeground': '#8e8e90',
        'gitDecoration.modifiedResourceForeground': '#895503',
        'gitDecoration.submoduleResourceForeground': '#1258a7',
        'gitDecoration.untrackedResourceForeground': '#007100',
        'gitlens.gutterBackgroundColor': '#0000000c',
        'gitlens.gutterForegroundColor': '#747474',
        'gitlens.gutterUncommittedForegroundColor': '#00bcf299',
        'gitlens.lineHighlightBackgroundColor': '#00bcf233',
        'gitlens.lineHighlightOverviewRulerColor': '#00bcf299',
        'gitlens.trailingLineBackgroundColor': '#00000000',
        'gitlens.trailingLineForegroundColor': '#99999959',
        'icon.foreground': '#424242',
        'imagePreview.border': '#80808059',
        'input.background': '#ffffff',
        'input.foreground': '#616161',
        'input.placeholderForeground': '#61616180',
        'inputOption.activeBackground': '#fafbfc4d',
        'inputOption.activeBorder': '#007acc00',
        'inputValidation.errorBackground': '#f2dede',
        'inputValidation.errorBorder': '#be1100',
        'inputValidation.infoBackground': '#d6ecf2',
        'inputValidation.infoBorder': '#007acc',
        'inputValidation.warningBackground': '#f6f5d2',
        'inputValidation.warningBorder': '#b89500',


        'menu.background': '#ffffff',
        'menu.foreground': '#616161',
        'menu.selectionBackground': '#0074e8',
        'menu.selectionForeground': '#ffffff',
        'menu.separatorBackground': '#888888',
        'menubar.selectionBackground': '#0000001a',
        'menubar.selectionForeground': '#333333',
        'merge.commonContentBackground': '#60606029',
        'merge.commonHeaderBackground': '#60606066',
        'merge.currentContentBackground': '#40c8ae33',
        'merge.currentHeaderBackground': '#40c8ae80',
        'merge.incomingContentBackground': '#40a6ff33',
        'merge.incomingHeaderBackground': '#40a6ff80',
        'minimap.errorHighlight': '#ff1212b3',
        'minimap.findMatchHighlight': '#d18616',
        'minimap.selectionHighlight': '#add6ff',
        'minimap.warningHighlight': '#e9a700',
        'minimapGutter.addedBackground': '#81b88b',
        'minimapGutter.deletedBackground': '#ca4b51',
        'minimapGutter.modifiedBackground': '#66afe0',
        'notificationCenterHeader.background': '#e7e7e7',
        'notificationLink.foreground': '#006ab1',
        'notifications.background': '#f3f3f3',
        'notifications.border': '#e7e7e7',
        'notifications.foreground': '#616161',
        'notificationsErrorIcon.foreground': '#e51400',
        'notificationsInfoIcon.foreground': '#75beff',
        'notificationsWarningIcon.foreground': '#e9a700',
        'panel.background': '#ffffff',
        'panel.border': '#80808059',
        'panel.dropBackground': '#2677cb2e',
        'panelInput.border': '#dddddd',
        'panelTitle.activeBorder': '#424242',
        'panelTitle.activeForeground': '#424242',
        'panelTitle.inactiveForeground': '#424242bf',
        'peekView.border': '#007acc',
        'peekViewEditor.background': '#f2f8fc',
        'peekViewEditor.matchHighlightBackground': '#f5d802de',
        'peekViewEditorGutter.background': '#f2f8fc',
        'peekViewResult.background': '#f3f3f3',
        'peekViewResult.fileForeground': '#1e1e1e',
        'peekViewResult.lineForeground': '#646465',
        'peekViewResult.matchHighlightBackground': '#ea5c004d',
        'peekViewResult.selectionBackground': '#3399ff33',
        'peekViewResult.selectionForeground': '#6c6c6c',
        'peekViewTitle.background': '#ffffff',
        'peekViewTitleDescription.foreground': '#616161e6',
        'peekViewTitleLabel.foreground': '#333333',
        'pickerGroup.border': '#cccedb',
        'pickerGroup.foreground': '#0066bf',
        'problemsErrorIcon.foreground': '#e51400',
        'problemsInfoIcon.foreground': '#75beff',
        'problemsWarningIcon.foreground': '#e9a700',
        'progressBar.background': '#0e70c0',
        'quickInput.background': '#fafbfc',
        'quickInput.foreground': '#586069',
        'scrollbar.shadow': '#dddddd',
        'scrollbarSlider.activeBackground': '#00000099',
        'scrollbarSlider.background': '#64646466',
        'scrollbarSlider.hoverBackground': '#646464b3',
        'searchEditor.findMatchBackground': '#ea5c0038',
        'settings.checkboxBackground': '#ffffff',
        'settings.checkboxBorder': '#cecece',
        'settings.dropdownBackground': '#ffffff',
        'settings.dropdownBorder': '#cecece',
        'settings.dropdownListBorder': '#c8c8c8',
        'settings.headerForeground': '#444444',
        'settings.modifiedItemIndicator': '#66afe0',
        'settings.numberInputBackground': '#ffffff',
        'settings.numberInputForeground': '#616161',
        'settings.textInputBackground': '#ffffff',
        'settings.textInputForeground': '#616161',
        'statusBar.debuggingBorder': '#dddddd',
        'statusBar.noFolderBorder': '#dddddd',
        'statusBarItem.activeBackground': '#ffffff2e',
        'statusBarItem.hoverBackground': '#ffffff1f',
        'statusBarItem.prominentBackground': '#00000080',
        'statusBarItem.prominentForeground': '#24292e',
        'statusBarItem.prominentHoverBackground': '#0000004d',
        'statusBarItem.remoteBackground': '#007acc',
        'statusBarItem.remoteForeground': '#ffffff',
        'symbolIcon.arrayForeground': '#616161',
        'symbolIcon.booleanForeground': '#616161',
        'symbolIcon.classForeground': '#d67e00',
        'symbolIcon.colorForeground': '#616161',
        'symbolIcon.constantForeground': '#616161',
        'symbolIcon.constructorForeground': '#652d90',
        'symbolIcon.enumeratorForeground': '#d67e00',
        'symbolIcon.enumeratorMemberForeground': '#007acc',
        'symbolIcon.eventForeground': '#d67e00',
        'symbolIcon.fieldForeground': '#007acc',
        'symbolIcon.fileForeground': '#616161',
        'symbolIcon.folderForeground': '#616161',
        'symbolIcon.functionForeground': '#652d90',
        'symbolIcon.interfaceForeground': '#007acc',
        'symbolIcon.keyForeground': '#616161',
        'symbolIcon.keywordForeground': '#616161',
        'symbolIcon.methodForeground': '#652d90',
        'symbolIcon.moduleForeground': '#616161',
        'symbolIcon.namespaceForeground': '#616161',
        'symbolIcon.nullForeground': '#616161',
        'symbolIcon.numberForeground': '#616161',
        'symbolIcon.objectForeground': '#616161',
        'symbolIcon.operatorForeground': '#616161',
        'symbolIcon.packageForeground': '#616161',
        'symbolIcon.propertyForeground': '#616161',
        'symbolIcon.referenceForeground': '#616161',
        'symbolIcon.snippetForeground': '#616161',
        'symbolIcon.stringForeground': '#616161',
        'symbolIcon.structForeground': '#616161',
        'symbolIcon.textForeground': '#616161',
        'symbolIcon.typeParameterForeground': '#616161',
        'symbolIcon.unitForeground': '#616161',
        'symbolIcon.variableForeground': '#007acc',

        'terminal.ansiBlack': '#000000',
        'terminal.ansiBlue': '#0451a5',
        'terminal.ansiBrightBlack': '#666666',
        'terminal.ansiBrightBlue': '#0451a5',
        'terminal.ansiBrightCyan': '#0598bc',
        'terminal.ansiBrightGreen': '#14ce14',
        'terminal.ansiBrightMagenta': '#bc05bc',
        'terminal.ansiBrightRed': '#cd3131',
        'terminal.ansiBrightWhite': '#a5a5a5',
        'terminal.ansiBrightYellow': '#b5ba00',
        'terminal.ansiCyan': '#0598bc',
        'terminal.ansiGreen': '#00bc00',
        'terminal.ansiMagenta': '#bc05bc',
        'terminal.ansiRed': '#cd3131',
        'terminal.ansiWhite': '#555555',
        'terminal.ansiYellow': '#949800',
        'terminal.background': '#ffffff',
        'terminal.border': '#80808059',
        'terminal.foreground': '#333333',
        'terminal.selectionBackground': '#00000040',


        'textBlockQuote.background': '#7f7f7f1a',
        'textBlockQuote.border': '#007acc80',
        'textCodeBlock.background': '#dcdcdc66',
        'textLink.activeForeground': '#006ab1',
        'textLink.foreground': '#006ab1',
        'textPreformat.foreground': '#a31515',
        'textSeparator.foreground': '#0000002e',

        'titleBar.activeBackground': '#dddddd',
        'titleBar.activeForeground': '#333333',
        'titleBar.inactiveBackground': '#dddddd99',
        'titleBar.inactiveForeground': '#33333399',

        'widget.shadow': '#a8a8a8'
    };
}
