// tslint:disable: max-line-length
// tslint:disable: object-literal-key-quotes

import { MonacoThemeDefinition } from './theme';
import { Injectable } from '@angular/core';

@Injectable()
export class DarkTheme implements MonacoThemeDefinition {
    id = 'dark-theme';
    base: monaco.editor.BuiltinTheme = 'vs-dark';
    inherit = true;
    rules = [

        // NORD
        { token: 'emphasis', fontStyle: 'italic'},
        { token: 'strong', fontStyle: 'bold'},
        { token: 'comment', foreground: '616E88'},
        { token: 'constant.character', foreground: 'EBCB8B'},
        { token: 'constant.character.escape', foreground: 'EBCB8B'},
        { token: 'constant.language', foreground: '81A1C1'},
        { token: 'constant.numeric', foreground: 'B48EAD'},
        { token: 'constant.regexp', foreground: 'EBCB8B'},
        { token: 'entity.name.class,entity.name.type.class', foreground: '8FBCBB'},
        { token: 'entity.name.function', foreground: '88C0D0'},
        { token: 'entity.name.tag', foreground: '81A1C1'},
        { token: 'entity.other.attribute-name', foreground: '8FBCBB'},
        { token: 'entity.other.inherited-class', fontStyle: 'bold', foreground: '8FBCBB'},
        { token: 'invalid.deprecated', foreground: 'D8DEE9', 'background': 'EBCB8B'},
        { token: 'invalid.illegal', foreground: 'D8DEE9', 'background': 'BF616A'},
        { token: 'keyword', foreground: '81A1C1'},
        { token: 'keyword.operator', foreground: '81A1C1'},
        { token: 'keyword.other.new', foreground: '81A1C1'},
        { token: 'markup.bold', fontStyle: 'bold'},
        { token: 'markup.changed', foreground: 'EBCB8B'},
        { token: 'markup.deleted', foreground: 'BF616A'},
        { token: 'markup.inserted', foreground: 'A3BE8C'},
        { token: 'meta.preprocessor', foreground: '5E81AC'},
        { token: 'punctuation', foreground: 'ECEFF4'},
        { token: 'punctuation.definition.method-parameters,punctuation.definition.function-parameters,punctuation.definition.parameters', foreground: 'ECEFF4'},
        { token: 'punctuation.definition.tag', foreground: '81A1C1'},
        { token: 'punctuation.definition.comment,punctuation.end.definition.comment,punctuation.start.definition.comment', foreground: '616E88'},
        { token: 'punctuation.section', foreground: 'ECEFF4'},
        { token: 'punctuation.section.embedded.begin,punctuation.section.embedded.end', foreground: '81A1C1'},
        { token: 'punctuation.terminator', foreground: '81A1C1'},
        { token: 'punctuation.definition.variable', foreground: '81A1C1'},
        { token: 'storage', foreground: '81A1C1'},
        { token: 'string', foreground: 'A3BE8C'},
        { token: 'string.regexp', foreground: 'EBCB8B'},
        { token: 'support.class', foreground: '8FBCBB'},
        { token: 'support.constant', foreground: '81A1C1'},
        { token: 'support.function', foreground: '88C0D0'},
        { token: 'support.function.construct', foreground: '81A1C1'},
        { token: 'support.type', foreground: '8FBCBB'},
        { token: 'support.type.exception', foreground: '8FBCBB'},
        { token: 'token.debug-token', foreground: 'b48ead'},
        { token: 'token.error-token', foreground: 'bf616a'},
        { token: 'token.info-token', foreground: '88c0d0'},
        { token: 'token.warn-token', foreground: 'ebcb8b'},
        { token: 'variable.other', foreground: 'D8DEE9'},
        { token: 'variable.language', foreground: '81A1C1'},
        { token: 'variable.parameter', foreground: 'D8DEE9'},
        { token: 'punctuation.separator.pointer-access.c', foreground: '81A1C1'},
        { token: 'source.c meta.preprocessor.include,source.c string.quoted.other.lt-gt.include', foreground: '8FBCBB'},
        { token: 'source.cpp keyword.control.directive.conditional,source.cpp punctuation.definition.directive,source.c keyword.control.directive.conditional,source.c punctuation.definition.directive', foreground: '5E81AC', fontStyle: 'bold'},
        { token: 'source.css constant.other.color.rgb-value', foreground: 'B48EAD'},
        { token: 'source.css meta.property-value', foreground: '88C0D0'},
        { token: 'source.css keyword.control.at-rule.media,source.css keyword.control.at-rule.media punctuation.definition.keyword', foreground: 'D08770'},
        { token: 'source.css punctuation.definition.keyword', foreground: '81A1C1'},
        { token: 'source.css support.type.property-name', foreground: 'D8DEE9'},
        { token: 'source.diff meta.diff.range.context', foreground: '8FBCBB'},
        { token: 'source.diff meta.diff.header.from-file', foreground: '8FBCBB'},
        { token: 'source.diff punctuation.definition.from-file', foreground: '8FBCBB'},
        { token: 'source.diff punctuation.definition.range', foreground: '8FBCBB'},
        { token: 'source.diff punctuation.definition.separator', foreground: '81A1C1'},
        { token: 'entity.name.type.module.elixir', foreground: '8FBCBB'},
        { token: 'variable.other.readwrite.module.elixir', foreground: 'D8DEE9', fontStyle: 'bold'},
        { token: 'constant.other.symbol.elixir', foreground: 'D8DEE9', fontStyle: 'bold'},
        { token: 'variable.other.constant.elixir', foreground: '8FBCBB'},
        { token: 'source.go constant.other.placeholder.go', foreground: 'EBCB8B'},
        { token: 'source.java comment.block.documentation.javadoc punctuation.definition.entity.html', foreground: '81A1C1'},
        { token: 'source.java constant.other', foreground: 'D8DEE9'},
        { token: 'source.java keyword.other.documentation', foreground: '8FBCBB'},
        { token: 'source.java keyword.other.documentation.author.javadoc', foreground: '8FBCBB'},
        { token: 'source.java keyword.other.documentation.directive,source.java keyword.other.documentation.custom', foreground: '8FBCBB'},
        { token: 'source.java keyword.other.documentation.see.javadoc', foreground: '8FBCBB'},
        { token: 'source.java meta.method-call meta.method', foreground: '88C0D0'},
        { token: 'source.java meta.tag.template.link.javadoc,source.java string.other.link.title.javadoc', foreground: '8FBCBB'},
        { token: 'source.java meta.tag.template.value.javadoc', foreground: '88C0D0'},
        { token: 'source.java punctuation.definition.keyword.javadoc', foreground: '8FBCBB'},
        { token: 'source.java punctuation.definition.tag.begin.javadoc,source.java punctuation.definition.tag.end.javadoc', foreground: '616E88'},
        { token: 'source.java storage.modifier.import', foreground: '8FBCBB'},
        { token: 'source.java storage.modifier.package', foreground: '8FBCBB'},
        { token: 'source.java storage.type', foreground: '8FBCBB'},
        { token: 'source.java storage.type.annotation', foreground: 'D08770'},
        { token: 'source.java storage.type.generic', foreground: '8FBCBB'},
        { token: 'source.java storage.type.primitive', foreground: '81A1C1'},
        { token: 'source.js punctuation.decorator,source.js meta.decorator variable.other.readwrite,source.js meta.decorator entity.name.function', foreground: 'D08770'},
        { token: 'source.js meta.object-literal.key', foreground: '88C0D0'},
        { token: 'source.js storage.type.class.jsdoc', foreground: '8FBCBB'},
        { token: 'source.js string.quoted.template punctuation.quasi.element.begin,source.js string.quoted.template punctuation.quasi.element.end,source.js string.template punctuation.definition.template-expression', foreground: '81A1C1'},
        { token: 'source.js string.quoted.template meta.method-call.with-arguments', foreground: 'ECEFF4'},
        { token: 'source.js string.template meta.template.expression support.variable.property,source.js string.template meta.template.expression variable.other.object', foreground: 'D8DEE9'},
        { token: 'source.js support.type.primitive', foreground: '81A1C1'},
        { token: 'source.js variable.other.object', foreground: 'D8DEE9'},
        { token: 'source.js variable.other.readwrite.alias', foreground: '8FBCBB'},
        { token: 'text.html.basic constant.character.entity.html', foreground: 'EBCB8B'},
        { token: 'text.html.basic constant.other.inline-data', foreground: 'D08770', fontStyle: 'italic'},
        { token: 'text.html.basic meta.tag.sgml.doctype', foreground: '5E81AC'},
        { token: 'text.html.basic punctuation.definition.entity', foreground: '81A1C1'},
        { token: 'source.properties entity.name.section.group-title.ini', foreground: '88C0D0'},
        { token: 'source.properties punctuation.separator.key-value.ini', foreground: '81A1C1'},
        { token: 'text.html.markdown markup.fenced_code.block,text.html.markdown markup.fenced_code.block punctuation.definition', foreground: '8FBCBB'},
        { token: 'markup.heading', foreground: '88C0D0'},
        { token: 'text.html.markdown markup.inline.raw,text.html.markdown markup.inline.raw punctuation.definition.raw', foreground: '8FBCBB'},
        { token: 'text.html.markdown markup.italic', fontStyle: 'italic'},
        { token: 'text.html.markdown markup.underline.link', fontStyle: 'underline'},
        { token: 'text.html.markdown beginning.punctuation.definition.list', foreground: '81A1C1'},
        { token: 'text.html.markdown beginning.punctuation.definition.quote', foreground: '8FBCBB'},
        { token: 'text.html.markdown markup.quote', foreground: '616E88'},
        { token: 'text.html.markdown punctuation.definition.heading', foreground: '81A1C1'},
        { token: 'text.html.markdown punctuation.definition.constant,text.html.markdown punctuation.definition.string', foreground: '81A1C1'},
        { token: 'text.html.markdown constant.other.reference.link,text.html.markdown string.other.link.description,text.html.markdown string.other.link.title', foreground: '88C0D0'},
        { token: 'source.perl punctuation.definition.variable', foreground: 'D8DEE9'},
        { token: 'source.php meta.function-call,source.php meta.function-call.object', foreground: '88C0D0'},
        { token: 'source.python entity.name.function.decorator,source.python meta.function.decorator support.type', foreground: 'D08770'},
        { token: 'source.python meta.function-call.generic', foreground: '88C0D0'},
        { token: 'source.python support.type', foreground: '88C0D0'},
        { token: 'source.python variable.parameter.function.language', foreground: 'D8DEE9'},
        { token: 'source.python meta.function.parameters variable.parameter.function.language.special.self', foreground: '81A1C1'},
        { token: 'source.css.scss punctuation.definition.interpolation.begin.bracket.curly,source.css.scss punctuation.definition.interpolation.end.bracket.curly', foreground: '81A1C1'},
        { token: 'source.css.scss variable.interpolation', foreground: 'D8DEE9', fontStyle: 'italic'},
        { token: 'source.ts punctuation.decorator,source.ts meta.decorator variable.other.readwrite,source.ts meta.decorator entity.name.function,source.tsx punctuation.decorator,source.tsx meta.decorator variable.other.readwrite,source.tsx meta.decorator entity.name.function', foreground: 'D08770'},
        { token: 'source.ts meta.object-literal.key,source.tsx meta.object-literal.key', foreground: 'D8DEE9'},
        { token: 'source.ts meta.object-literal.key entity.name.function,source.tsx meta.object-literal.key entity.name.function', foreground: '88C0D0'},
        { token: 'source.ts support.class,source.ts support.type,source.ts entity.name.type,source.ts entity.name.class,source.tsx support.class,source.tsx support.type,source.tsx entity.name.type,source.tsx entity.name.class', foreground: '8FBCBB'},
        { token: 'source.ts support.constant.math,source.ts support.constant.dom,source.ts support.constant.json,source.tsx support.constant.math,source.tsx support.constant.dom,source.tsx support.constant.json', foreground: '8FBCBB'},
        { token: 'source.ts support.variable,source.tsx support.variable', foreground: 'D8DEE9'},
        { token: 'text.xml entity.name.tag.namespace', foreground: '8FBCBB'},
        { token: 'text.xml keyword.other.doctype', foreground: '5E81AC'},
        { token: 'text.xml meta.tag.preprocessor entity.name.tag', foreground: '5E81AC'},
        { token: 'text.xml string.unquoted.cdata,text.xml string.unquoted.cdata punctuation.definition.string', foreground: 'D08770', fontStyle: 'italic'},
        { token: 'source.yaml entity.name.tag', foreground: '8FBCBB'},

        // ONE DARK PRO
                /** haskell variable generic-type */
        { token: 'variable.other.generic-type.haskell', foreground: 'c678dd' },
        /** haskell storage type */
        { token: 'storage.type.haskell', foreground: 'd19a66' },
        /** support.variable.magic.python */
        { token: 'support.variable.magic.python', foreground: 'e06c75' },
        /** punctuation.separator.parameters.python */
        { token: 'punctuation.separator.period.python', foreground: 'abb2bf' },
        /** punctuation.separator.parameters.python */
        { token: 'punctuation.separator.element.python', foreground: 'abb2bf' },
        /** punctuation.separator.parameters.python */
        { token: 'punctuation.parenthesis.begin.python', foreground: 'abb2bf' },
        /** punctuation.separator.parameters.python */
        { token: 'punctuation.parenthesis.end.python', foreground: 'abb2bf' },
        /** variable.parameter.function.language.special.self.python */
        { token: 'variable.parameter.function.language.special.self.python', foreground: 'e5c07b' },
        /** storage.modifier.lifetime.rust */
        { token: 'storage.modifier.lifetime.rust', foreground: 'abb2bf' },
        /** support.function.std.rust */
        { token: 'support.function.std.rust', foreground: '61afef' },
        /** entity.name.lifetime.rust */
        { token: 'entity.name.lifetime.rust', foreground: 'e5c07b' },
        /** variable.language.rust */
        { token: 'variable.language.rust', foreground: 'e06c75' },
        /** support.constant.edge */
        { token: 'support.constant.edge', foreground: 'c678dd' },
        /** regexp constant character-class */
        { token: 'constant.other.character-class.regexp', foreground: 'e06c75' },
        /** regexp operator.quantifier */
        { token: 'keyword.operator.quantifier.regexp', foreground: 'd19a66' },
        /** punctuation.definition */
        { token: 'punctuation.definition.string.begin', foreground: '98c379' },
        /** punctuation.definition */
        { token: 'punctuation.definition.string.end', foreground: '98c379' },
        /** Text */
        { token: 'variable.parameter.function', foreground: 'abb2bf' },
        /** Comments */
        { token: 'comment', foreground: '7f848e' },
        /** Comments */
        { token: ' punctuation.definition.comment', foreground: '7f848e' },
        /** Comment Markup Link */
        { token: 'comment markup.link', foreground: '5c6370' },
        /** markup diff */
        { token: 'markup.changed.diff', foreground: 'e5c07b' },
        /** diff */
        { token: 'meta.diff.header.from-file', foreground: '61afef' },
        /** diff */
        { token: 'punctuation.definition.from-file.diff', foreground: '61afef' },
        /** inserted.diff */
        { token: 'markup.inserted.diff', foreground: '98c379' },
        /** deleted.diff */
        { token: 'markup.deleted.diff', foreground: 'e06c75' },
        /** c++ function */
        { token: 'meta.function.c', foreground: 'e06c75' },
        /** c++ function */
        { token: 'meta.function.cpp', foreground: 'e06c75' },
        /** c++ block */
        { token: 'punctuation.section.block.begin.bracket.curly.cpp', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.block.end.bracket.curly.cpp', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.terminator.statement.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.block.begin.bracket.curly.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.block.end.bracket.curly.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.parens.begin.bracket.round.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.parens.end.bracket.round.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.parameters.begin.bracket.round.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.parameters.end.bracket.round.c', foreground: 'abb2bf' },
        /** js/ts punctuation separator key-value */
        { token: 'punctuation.separator.key-value', foreground: 'abb2bf' },
        /** js/ts italic */
        { token: 'entity.other.attribute-name.js', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'entity.other.attribute-name.ts', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'entity.other.attribute-name.jsx', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'entity.other.attribute-name.tsx', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'variable.parameter', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'variable.language.super', fontStyle: 'italic' },
        /** js/ts import keyword */
        { token: 'keyword.operator.expression.import', foreground: '61afef' },
        /** math js/ts */
        { token: 'support.constant.math', foreground: 'e5c07b' },
        /** math property js/ts */
        { token: 'support.constant.property.math', foreground: 'd19a66' },
        /** js/ts variable.other.constant */
        { token: 'variable.other.constant', foreground: 'e5c07b' },
        /** java type */
        { token: 'storage.type.annotation.java', foreground: 'e5c07b' },
        /** java source */
        { token: 'source.java', foreground: 'e06c75' },
        /** java modifier.import */
        { token: 'punctuation.section.block.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.block.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.definition.method-parameters.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.definition.method-parameters.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'meta.method.identifier.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.method.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.method.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.terminator.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.class.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.class.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.inner-class.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.inner-class.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'meta.method-call.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'storage.type.generic.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.class.begin.bracket.curly.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.class.end.bracket.curly.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.method.begin.bracket.curly.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.method.end.bracket.curly.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.separator.period.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'meta.method.body.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'meta.method.java', foreground: '61afef' },
        /** java modifier.import */
        { token: 'storage.modifier.import.java', foreground: 'e5c07b' },
        /** java modifier.import */
        { token: 'storage.type.java', foreground: 'e5c07b' },
        /** java variable.name */
        { token: 'meta.definition.variable.name.java', foreground: 'e06c75' },
        /** operator logical */
        { token: 'keyword.operator.logical.js', foreground: '56b6c2' },
        /** operator bitwise */
        { token: 'keyword.operator.bitwise', foreground: '56b6c2' },
        /** operator channel */
        { token: 'keyword.operator.channel', foreground: '56b6c2' },
        /** support.constant.property-value.scss */
        { token: 'support.constant.property-value.scss', foreground: 'd19a66' },
        /** support.constant.property-value.scss */
        { token: 'support.constant.property-value.css', foreground: 'd19a66' },
        /** CSS/SCSS/LESS Operators */
        { token: 'keyword.operator.css', foreground: '56b6c2' },
        /** CSS/SCSS/LESS Operators */
        { token: 'keyword.operator.scss', foreground: '56b6c2' },
        /** CSS/SCSS/LESS Operators */
        { token: 'keyword.operator.less', foreground: '56b6c2' },
        /** css color standard name */
        { token: 'support.constant.color.w3c-standard-color-name.css', foreground: 'd19a66' },
        /** css color standard name */
        { token: 'support.constant.color.w3c-standard-color-name.scss', foreground: 'd19a66' },
        /** css comma */
        { token: 'punctuation.separator.list.comma.css', foreground: 'abb2bf' },
        /** css attribute-name.id */
        { token: 'support.constant.color.w3c-standard-color-name.css', foreground: 'd19a66' },
        /** css property-name */
        { token: 'support.type.vendored.property-name.css', foreground: '56b6c2' },
        /** js/ts template-expression */
        { token: 'punctuation.definition.template-expression.begin', foreground: 'e06c75' },
        /** js/ts template-expression */
        { token: 'punctuation.definition.template-expression.end', foreground: 'e06c75' },
        /** js/ts module */
        { token: 'support.module.node', foreground: 'e5c07b' },
        /** js/ts module */
        { token: 'support.type.object.module', foreground: 'e5c07b' },
        /** js/ts module */
        { token: 'support.module.node', foreground: 'e5c07b' },
        /** entity.name.type.module */
        { token: 'entity.name.type.module', foreground: 'e5c07b' },
        /** js variable readwrite */
        { token: 'variable.other.readwrite', foreground: 'e06c75' },
        /** js variable readwrite */
        { token: 'meta.object-literal.key', foreground: 'e06c75' },
        /** js variable readwrite */
        { token: 'support.variable.property', foreground: 'e06c75' },
        /** js variable readwrite */
        { token: 'support.variable.object.process', foreground: 'e06c75' },
        /** js variable readwrite */
        { token: 'support.variable.object.node', foreground: 'e06c75' },
        /** comment */
        { token: 'comment.line.double-slash', fontStyle: 'italic' },
        /** comment */
        { token: 'comment.block.documentation', fontStyle: 'italic' },
        /** js/ts json */
        { token: 'support.constant.json', foreground: 'd19a66' },
        /** js/ts Keyword */
        { token: 'keyword.operator.expression.instanceof', foreground: 'c678dd' },
        /** js/ts Keyword */
        { token: 'keyword.operator.new', foreground: 'c678dd' },
        /** js/ts Keyword */
        { token: 'keyword.operator.ternary', foreground: 'c678dd' },
        /** js/ts Keyword */
        { token: 'keyword.operator.optional', foreground: 'c678dd' },
        /** js/ts console */
        { token: 'support.type.object.console', foreground: 'e06c75' },
        /** js/ts support.variable.property.process */
        { token: 'support.variable.property.process', foreground: 'd19a66' },
        /** js console function */
        { token: 'entity.name.function', foreground: '61afef' },
        /** js console function */
        { token: 'support.function.console', foreground: '61afef' },
        /** operator */
        { token: 'keyword.operator', foreground: '56b6c2' },
        /** operator */
        { token: 'keyword.operator.delete', foreground: 'c678dd' },
        /** js dom */
        { token: 'support.type.object.dom', foreground: '56b6c2' },
        /** js dom variable */
        { token: 'support.variable.dom', foreground: 'e06c75' },
        /** js dom variable */
        { token: 'support.variable.property.dom', foreground: 'e06c75' },
        /** keyword.operator */
        { token: 'keyword.operator.arithmetic', foreground: '56b6c2' },
        /** keyword.operator */
        { token: 'keyword.operator.comparison', foreground: '56b6c2' },
        /** keyword.operator */
        { token: 'keyword.operator.decrement', foreground: '56b6c2' },
        /** keyword.operator */
        { token: 'keyword.operator.increment', foreground: '56b6c2' },
        /** C operator assignment */
        { token: 'keyword.operator.assignment.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.comparison.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.increment.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.decrement.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.bitwise.shift.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.assignment.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.comparison.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.increment.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.decrement.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.bitwise.shift.cpp', foreground: 'c678dd' },
        /** Punctuation */
        { token: 'punctuation.separator.delimiter', foreground: 'abb2bf' },
        /** Other punctuation .c */
        { token: 'punctuation.separator.c', foreground: 'c678dd' },
        /** Other punctuation .c */
        { token: 'punctuation.separator.cpp', foreground: 'c678dd' },
        /** C type posix-reserved */
        { token: 'support.type.posix-reserved.c', foreground: '56b6c2' },
        /** C type posix-reserved */
        { token: 'support.type.posix-reserved.cpp', foreground: '56b6c2' },
        /** keyword.operator.sizeof.c */
        { token: 'keyword.operator.sizeof.c', foreground: 'c678dd' },
        /** keyword.operator.sizeof.c */
        { token: 'keyword.operator.sizeof.cpp', foreground: 'c678dd' },
        /** python parameter */
        { token: 'variable.parameter.function.language.python', foreground: 'd19a66' },
        /** python type */
        { token: 'support.type.python', foreground: '56b6c2' },
        /** python logical */
        { token: 'keyword.operator.logical.python', foreground: 'c678dd' },
        /** pyCs */
        { token: 'variable.parameter.function.python', foreground: 'd19a66' },
        /** python block */
        { token: 'punctuation.definition.arguments.begin.python', foreground: 'abb2bf' },
        /** python block */
        { token: 'punctuation.definition.arguments.end.python', foreground: 'abb2bf' },
        /** python block */
        { token: 'punctuation.separator.arguments.python', foreground: 'abb2bf' },
        /** python block */
        { token: 'punctuation.definition.list.begin.python', foreground: 'abb2bf' },
        /** python block */
        { token: 'punctuation.definition.list.end.python', foreground: 'abb2bf' },
        /** python function-call.generic */
        { token: 'meta.function-call.generic.python', foreground: '61afef' },
        /** python placeholder reset to normal string */
        { token: 'constant.character.format.placeholder.other.python', foreground: '98c379' },
        /** Delimiters */
        { token: 'none', foreground: 'abb2bf' },
        /** Operators */
        { token: 'keyword.operator', foreground: 'abb2bf' },
        /** Compound Assignment Operators */
        { token: 'keyword.operator.assignment.compound', foreground: 'c678dd' },
        /** Keywords */
        { token: 'keyword', foreground: 'c678dd' },
        /** Variables */
        { token: 'variable', foreground: 'e06c75' },
        /** Language variables */
        { token: 'variable.language', foreground: 'e5c07b' },
        /** Java Variables */
        { token: 'token.variable.parameter.java', foreground: 'abb2bf' },
        /** Java Imports */
        { token: 'import.storage.java', foreground: 'e5c07b' },
        /** Packages */
        { token: 'token.package.keyword', foreground: 'c678dd' },
        /** Packages */
        { token: 'token.package', foreground: 'abb2bf' },
        /** Functions */
        { token: 'entity.name.function', foreground: '61afef' },
        /** Functions */
        { token: 'meta.require', foreground: '61afef' },
        /** Functions */
        { token: 'support.function.any-method', foreground: '61afef' },
        /** Functions */
        { token: 'variable.function', foreground: '61afef' },
        /** Classes */
        { token: 'entity.name.type.namespace', foreground: 'e5c07b' },
        /** Classes */
        { token: 'support.class', foreground: 'e5c07b' },
        /** Classes */
        { token: ' entity.name.type.class', foreground: 'e5c07b' },
        /** Class name */
        { token: 'entity.name.class.identifier.namespace.type', foreground: 'e5c07b' },
        /** Class name */
        { token: 'entity.name.class', foreground: 'e5c07b' },
        /** Class name */
        { token: 'variable.other.class.js', foreground: 'e5c07b' },
        /** Class name */
        { token: 'variable.other.class.ts', foreground: 'e5c07b' },
        /** Class name php */
        { token: 'variable.other.class.php', foreground: 'e06c75' },
        /** Type Name */
        { token: 'entity.name.type', foreground: 'e5c07b' },
        /** Keyword Control */
        { token: 'keyword.control', foreground: 'c678dd' },
        /** Python Keyword Control */
        { token: 'keyword.control.import.python', fontStyle: 'italic' },
        /** Python Keyword Control */
        { token: 'keyword.control.flow.python', fontStyle: 'italic' },
        /** Control Elements */
        { token: 'control.elements', foreground: 'd19a66' },
        /** Control Elements */
        { token: ' keyword.operator.less', foreground: 'd19a66' },
        /** Methods */
        { token: 'keyword.other.special-method', foreground: '61afef' },
        /** Storage */
        { token: 'storage', foreground: 'c678dd' },
        /** Storage JS TS */
        { token: 'token.storage', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.delete', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.in', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.of', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.instanceof', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.new', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.typeof', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.void', foreground: 'c678dd' },
        /** Java Storage */
        { token: 'token.storage.type.java', foreground: 'e5c07b' },
        /** Support */
        { token: 'support.function', foreground: '56b6c2' },
        /** Support type */
        { token: 'support.type.property-name', foreground: 'abb2bf' },
        /** Support type */
        { token: 'support.constant.property-value', foreground: 'abb2bf' },
        /** Support type */
        { token: 'support.constant.font-name', foreground: 'd19a66' },
        /** Meta tag */
        { token: 'meta.tag', foreground: 'abb2bf' },
        /** Strings, Inherited Class */
        { token: 'string', foreground: '98c379' },
        /** Strings, Inherited Class */
        { token: ' entity.other.inherited-class', foreground: '98c379' },
        /** Constant other symbol */
        { token: 'constant.other.symbol', foreground: '56b6c2' },
        /** Integers */
        { token: 'constant.numeric', foreground: 'd19a66' },
        /** Floats */
        { token: 'none', foreground: 'd19a66' },
        /** Boolean */
        { token: 'none', foreground: 'd19a66' },
        /** Constants */
        { token: 'constant', foreground: 'd19a66' },
        /** Constants */
        { token: 'punctuation.definition.constant', foreground: 'd19a66' },
        /** Tags */
        { token: 'entity.name.tag', foreground: 'e06c75' },
        /** Attributes */
        { token: 'entity.other.attribute-name', foreground: 'd19a66' },
        /** Attribute IDs */
        { token: 'entity.other.attribute-name.id', foreground: '61afef' },
        /** Attribute class */
        { token: 'entity.other.attribute-name.class.css', foreground: 'd19a66' },
        /** Selector */
        { token: 'meta.selector', foreground: 'c678dd' },
        /** Values */
        { token: 'none', foreground: 'd19a66' },
        /** Headings */
        { token: 'markup.heading', foreground: 'e06c75' },
        /** Headings */
        { token: 'markup.heading punctuation.definition.heading', foreground: '61afef' },
        /** Headings */
        { token: ' entity.name.section', foreground: '61afef' },
        /** Units */
        { token: 'keyword.other.unit', foreground: 'e06c75' },
        /** Bold */
        { token: 'markup.bold', foreground: 'd19a66' },
        /** Bold */
        { token: 'todo.bold', foreground: 'd19a66' },
        /** Bold */
        { token: 'punctuation.definition.bold', foreground: 'e5c07b' },
        /** Italic */
        { token: 'markup.italic', foreground: 'c678dd' },
        /** Italic */
        { token: ' punctuation.definition.italic', foreground: 'c678dd' },
        /** Italic */
        { token: 'todo.emphasis', foreground: 'c678dd' },
        /** Italic */
        { token: 'emphasis md', foreground: 'c678dd' },
        /** [VSCODE-CUSTOM] Markdown headings */
        { token: 'entity.name.section.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown heading Punctuation Definition */
        { token: 'punctuation.definition.heading.markdown', foreground: 'e06c75' },
        /** punctuation.definition.list.begin.markdown */
        { token: 'punctuation.definition.list.begin.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown heading setext */
        { token: 'markup.heading.setext', foreground: 'abb2bf' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition Bold */
        { token: 'punctuation.definition.bold.markdown', foreground: 'd19a66' },
        /** [VSCODE-CUSTOM] Markdown Inline Raw */
        { token: 'markup.inline.raw.markdown', foreground: '98c379' },
        /** [VSCODE-CUSTOM] Markdown Inline Raw */
        { token: 'markup.inline.raw.string.markdown', foreground: '98c379' },
        /** [VSCODE-CUSTOM] Markdown List Punctuation Definition */
        { token: 'punctuation.definition.list.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Quote */
        { token: 'markup.quote.markdown', foreground: '5c6370' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
        { token: 'punctuation.definition.string.begin.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
        { token: 'punctuation.definition.string.end.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
        { token: 'punctuation.definition.metadata.markdown', foreground: 'e06c75' },
        /** beginning.punctuation.definition.list.markdown */
        { token: 'beginning.punctuation.definition.list.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition Link */
        { token: 'punctuation.definition.metadata.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Underline Link/Image */
        { token: 'markup.underline.link.markdown', foreground: 'c678dd' },
        /** [VSCODE-CUSTOM] Markdown Underline Link/Image */
        { token: 'markup.underline.link.image.markdown', foreground: 'c678dd' },
        /** [VSCODE-CUSTOM] Markdown Link Title/Description */
        { token: 'string.other.link.title.markdown', foreground: '61afef' },
        /** [VSCODE-CUSTOM] Markdown Link Title/Description */
        { token: 'string.other.link.description.markdown', foreground: '61afef' },
        /** markup.italic.markdown */
        { token: 'markup.italic.markdown', fontStyle: 'italic' },
        /** markup.bold.markdown */
        { token: 'markup.bold.markdown', fontStyle: 'bold' },
        /** Regular Expressions */
        { token: 'string.regexp', foreground: '56b6c2' },
        /** Escape Characters */
        { token: 'constant.character.escape', foreground: '56b6c2' },
        /** Embedded */
        { token: 'punctuation.section.embedded', foreground: 'e06c75' },
        /** Embedded */
        { token: ' variable.interpolation', foreground: 'e06c75' },
        /** Illegal */
        { token: 'invalid.illegal', foreground: 'ffffff' },
        /** Broken */
        { token: 'invalid.broken', foreground: 'ffffff' },
        /** Deprecated */
        { token: 'invalid.deprecated', foreground: 'ffffff' },
        /** Unimplemented */
        { token: 'invalid.unimplemented', foreground: 'ffffff' },
        /** Source Json Meta Structure Dictionary Json > String Quoted Json */
        { token: 'source.json meta.structure.dictionary.json > string.quoted.json', foreground: 'e06c75' },
        /** Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String */
        { token: 'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string', foreground: 'e06c75' },
        /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
        { token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json', foreground: '98c379' },
        /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
        { token: 'source.json meta.structure.array.json > value.json > string.quoted.json', foreground: '98c379' },
        /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
        { token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation', foreground: '98c379' },
        /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
        { token: 'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation', foreground: '98c379' },
        /** Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json */
        { token: 'source.json meta.structure.dictionary.json > constant.language.json', foreground: '56b6c2' },
        /** Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json */
        { token: 'source.json meta.structure.array.json > constant.language.json', foreground: '56b6c2' },
        /** [VSCODE-CUSTOM] JSON Property Name */
        { token: 'support.type.property-name.json', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] JSON Punctuation for Property Name */
        { token: 'support.type.property-name.json punctuation', foreground: 'e06c75' },
        /** laravel blade tag */
        { token: 'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade', foreground: 'c678dd' },
        /** laravel blade @ */
        { token: 'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade', foreground: 'c678dd' },
        /** use statement for other classes */
        { token: 'support.other.namespace.use.php', foreground: 'e5c07b' },
        /** use statement for other classes */
        { token: 'support.other.namespace.use-as.php', foreground: 'e5c07b' },
        /** use statement for other classes */
        { token: 'support.other.namespace.php', foreground: 'e5c07b' },
        /** use statement for other classes */
        { token: 'entity.other.alias.php', foreground: 'e5c07b' },
        /** use statement for other classes */
        { token: 'meta.interface.php', foreground: 'e5c07b' },
        /** error suppression */
        { token: 'keyword.operator.error-control.php', foreground: 'c678dd' },
        /** php instanceof */
        { token: 'keyword.operator.type.php', foreground: 'c678dd' },
        /** style double quoted array index normal begin */
        { token: 'punctuation.section.array.begin.php', foreground: 'abb2bf' },
        /** style double quoted array index normal end */
        { token: 'punctuation.section.array.end.php', foreground: 'abb2bf' },
        /** php illegal.non-null-typehinted */
        { token: 'invalid.illegal.non-null-typehinted.php', foreground: 'f44747' },
        /** php types */
        { token: 'storage.type.php', foreground: 'e5c07b' },
        /** php types */
        { token: 'meta.other.type.phpdoc.php', foreground: 'e5c07b' },
        /** php types */
        { token: 'keyword.other.type.php', foreground: 'e5c07b' },
        /** php types */
        { token: 'keyword.other.array.phpdoc.php', foreground: 'e5c07b' },
        /** php call-function */
        { token: 'meta.function-call.php', foreground: '61afef' },
        /** php call-function */
        { token: 'meta.function-call.object.php', foreground: '61afef' },
        /** php call-function */
        { token: 'meta.function-call.static.php', foreground: '61afef' },
        /** php function-resets */
        { token: 'punctuation.definition.parameters.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.parameters.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.separator.delimiter.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.section.scope.begin.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.section.scope.end.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.terminator.expression.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.arguments.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.arguments.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.storage-type.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.storage-type.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.array.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.array.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.begin.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.end.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.section.switch-block.end.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.section.switch-block.start.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.section.switch-block.begin.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.section.switch-block.end.bracket.curly.php', foreground: 'abb2bf' },
        /** support php constants */
        { token: 'support.constant.ext.php', foreground: 'd19a66' },
        /** support php constants */
        { token: 'support.constant.std.php', foreground: 'd19a66' },
        /** support php constants */
        { token: 'support.constant.core.php', foreground: 'd19a66' },
        /** support php constants */
        { token: 'support.constant.parser-token.php', foreground: 'd19a66' },
        /** php goto */
        { token: 'entity.name.goto-label.php', foreground: '61afef' },
        /** php goto */
        { token: 'support.other.php', foreground: '61afef' },
        /** php logical/bitwise operator */
        { token: 'keyword.operator.logical.php', foreground: '56b6c2' },
        /** php logical/bitwise operator */
        { token: 'keyword.operator.bitwise.php', foreground: '56b6c2' },
        /** php logical/bitwise operator */
        { token: 'keyword.operator.arithmetic.php', foreground: '56b6c2' },
        /** php regexp operator */
        { token: 'keyword.operator.regexp.php', foreground: 'c678dd' },
        /** php comparison */
        { token: 'keyword.operator.comparison.php', foreground: '56b6c2' },
        /** php heredoc/nowdoc */
        { token: 'keyword.operator.heredoc.php', foreground: 'c678dd' },
        /** php heredoc/nowdoc */
        { token: 'keyword.operator.nowdoc.php', foreground: 'c678dd' },
        /** python function decorator @ */
        { token: 'meta.function.decorator.python', foreground: '61afef' },
        /** python function support */
        { token: 'support.token.decorator.python', foreground: '56b6c2' },
        /** python function support */
        { token: 'meta.function.decorator.identifier.python', foreground: '56b6c2' },
        /** parameter function */
        { token: 'function.parameter', foreground: 'd19a66' },
        /** parameter function js/ts */
        { token: 'function.parameter', foreground: 'abb2bf' },
        /** brace function */
        { token: 'function.brace', foreground: 'abb2bf' },
        /** parameter function ruby cs */
        { token: 'function.parameter.ruby', foreground: 'abb2bf' },
        /** parameter function ruby cs */
        { token: ' function.parameter.cs', foreground: 'abb2bf' },
        /** constant.language.symbol.ruby */
        { token: 'constant.language.symbol.ruby', foreground: '56b6c2' },
        /** rgb-value */
        { token: 'rgb-value', foreground: '56b6c2' },
        /** rgb value */
        { token: 'inline-color-decoration rgb-value', foreground: 'd19a66' },
        /** rgb value less */
        { token: 'less rgb-value', foreground: 'd19a66' },
        /** sass selector */
        { token: 'selector.sass', foreground: 'e06c75' },
        /** ts primitive/builtin types */
        { token: 'support.type.primitive.ts', foreground: 'e5c07b' },
        /** ts primitive/builtin types */
        { token: 'support.type.builtin.ts', foreground: 'e5c07b' },
        /** ts primitive/builtin types */
        { token: 'support.type.primitive.tsx', foreground: 'e5c07b' },
        /** ts primitive/builtin types */
        { token: 'support.type.builtin.tsx', foreground: 'e5c07b' },
        /** block scope */
        { token: 'block.scope.end', foreground: 'abb2bf' },
        /** block scope */
        { token: 'block.scope.begin', foreground: 'abb2bf' },
        /** cs storage type */
        { token: 'storage.type.cs', foreground: 'e5c07b' },
        /** cs local variable */
        { token: 'entity.name.variable.local.cs', foreground: 'e06c75' },
        { token: 'token.info-token', foreground: '61afef' },
        { token: 'token.warn-token', foreground: 'd19a66' },
        { token: 'token.error-token', foreground: 'f44747' },
        { token: 'token.debug-token', foreground: 'c678dd' },
        /** String interpolation */
        { token: 'punctuation.definition.template-expression.begin', foreground: 'c678dd' },
        /** String interpolation */
        { token: 'punctuation.definition.template-expression.end', foreground: 'c678dd' },
        /** String interpolation */
        { token: 'punctuation.section.embedded', foreground: 'c678dd' },
        /** Reset JavaScript string interpolation expression */
        { token: 'meta.template.expression', foreground: 'abb2bf' },
        /** Import module JS */
        { token: 'keyword.operator.module', foreground: 'c678dd' },
        /** js Flowtype */
        { token: 'support.type.type.flowtype', foreground: '61afef' },
        /** js Flow */
        { token: 'support.type.primitive', foreground: 'e5c07b' },
        /** js class prop */
        { token: 'meta.property.object', foreground: 'e06c75' },
        /** js func parameter */
        { token: 'variable.parameter.function.js', foreground: 'e06c75' },
        /** js template literals begin */
        { token: 'keyword.other.template.begin', foreground: '98c379' },
        /** js template literals end */
        { token: 'keyword.other.template.end', foreground: '98c379' },
        /** js template literals variable braces begin */
        { token: 'keyword.other.substitution.begin', foreground: '98c379' },
        /** js template literals variable braces end */
        { token: 'keyword.other.substitution.end', foreground: '98c379' },
        /** js operator.assignment */
        { token: 'keyword.operator.assignment', foreground: '56b6c2' },
        /** go operator */
        { token: 'keyword.operator.assignment.go', foreground: 'e5c07b' },
        /** go operator */
        { token: 'keyword.operator.address.go', foreground: 'e5c07b' },
        /** Go package name */
        { token: 'entity.name.package.go', foreground: 'e5c07b' },
        /** elm prelude */
        { token: 'support.type.prelude.elm', foreground: '56b6c2' },
        /** elm constant */
        { token: 'support.constant.elm', foreground: 'd19a66' },
        /** template literal */
        { token: 'punctuation.quasi.element', foreground: 'c678dd' },
        /** html/pug (jade) escaped characters and entities */
        { token: 'constant.character.entity', foreground: 'e06c75' },
        /** styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour */
        { token: 'entity.other.attribute-name.pseudo-element', foreground: '56b6c2' },
        /** styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour */
        { token: 'entity.other.attribute-name.pseudo-class', foreground: '56b6c2' },
        /** Clojure globals */
        { token: 'entity.global.clojure', foreground: 'e5c07b' },
        /** Clojure symbols */
        { token: 'meta.symbol.clojure', foreground: 'e06c75' },
        /** Clojure constants */
        { token: 'constant.keyword.clojure', foreground: '56b6c2' },
        /** CoffeeScript Function Argument */
        { token: 'meta.arguments.coffee', foreground: 'e06c75' },
        /** CoffeeScript Function Argument */
        { token: 'variable.parameter.function.coffee', foreground: 'e06c75' },
        /** Ini Default Text */
        { token: 'source.ini', foreground: '98c379' },
        /** Makefile prerequisities */
        { token: 'meta.scope.prerequisites.makefile', foreground: 'e06c75' },
        /** Makefile text colour */
        { token: 'source.makefile', foreground: 'e5c07b' },
        /** Groovy import names */
        { token: 'storage.modifier.import.groovy', foreground: 'e5c07b' },
        /** Groovy Methods */
        { token: 'meta.method.groovy', foreground: '61afef' },
        /** Groovy Variables */
        { token: 'meta.definition.variable.name.groovy', foreground: 'e06c75' },
        /** Groovy Inheritance */
        { token: 'meta.definition.class.inherited.classes.groovy', foreground: '98c379' },
        /** HLSL Semantic */
        { token: 'support.variable.semantic.hlsl', foreground: 'e5c07b' },
        /** HLSL Types */
        { token: 'support.type.texture.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.sampler.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.object.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.object.rw.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.fx.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.object.hlsl', foreground: 'c678dd' },
        /** SQL Variables */
        { token: 'text.variable', foreground: 'e06c75' },
        /** SQL Variables */
        { token: 'text.bracketed', foreground: 'e06c75' },
        /** types */
        { token: 'support.type.swift', foreground: 'e5c07b' },
        /** types */
        { token: 'support.type.vb.asp', foreground: 'e5c07b' },
        /** heading 1, keyword */
        { token: 'entity.name.function.xi', foreground: 'e5c07b' },
        /** heading 2, callable */
        { token: 'entity.name.class.xi', foreground: '56b6c2' },
        /** heading 3, property */
        { token: 'constant.character.character-class.regexp.xi', foreground: 'e06c75' },
        /** heading 4, type, class, interface */
        { token: 'constant.regexp.xi', foreground: 'c678dd' },
        /** heading 5, enums, preprocessor, constant, decorator */
        { token: 'keyword.control.xi', foreground: '56b6c2' },
        /** heading 6, number */
        { token: 'invalid.xi', foreground: 'abb2bf' },
        /** string */
        { token: 'beginning.punctuation.definition.quote.markdown.xi', foreground: '98c379' },
        /** comments */
        { token: 'beginning.punctuation.definition.list.markdown.xi', foreground: '7f848e' },
        /** link */
        { token: 'constant.character.xi', foreground: '61afef' },
        /** accent */
        { token: 'accent.xi', foreground: '61afef' },
        /** wikiword */
        { token: 'wikiword.xi', foreground: 'd19a66' },
        /** language operators like '+', '-' etc */
        { token: 'constant.other.color.rgb-value.xi', foreground: 'ffffff' },
        /** elements to dim */
        { token: 'punctuation.definition.tag.xi', foreground: '5c6370' },
    ];
    colors = {
        'activityBar.background': '#2e3440',
        'activityBar.foreground': '#d8dee9',
        'activityBar.activeBorder': '#d8dee9',
        'activityBar.dropBackground': '#3b4252',
        'activityBar.inactiveForeground': '#d8dee966',
        'activityBarBadge.background': '#88c0d0',
        'activityBarBadge.foreground': '#2e3440',

        'sideBar.dropBackground': '#ffffff1f',
        'sideBar.background': '#2e3440',
        'sideBar.foreground': '#d8dee9',
        'sideBar.border': '#3b4252',
        'sideBarSectionHeader.background': '#3b4252',
        'sideBarSectionHeader.foreground': '#d8dee9',

        'list.focusBackground': '#88c0d099',
        'list.focusForeground': '#d8dee9',
        'list.activeSelectionBackground': '#88c0d0',
        'list.activeSelectionForeground': '#2e3440',
        'list.inactiveSelectionBackground': '#434c5e',
        'list.inactiveSelectionForeground': '#d8dee9',
        'list.hoverBackground': '#3b4252',
        'list.hoverForeground': '#eceff4',
        'list.dropBackground': '#88c0d099',
        'list.errorForeground': '#bf616a',
        'list.warningForeground': '#ebcb8b',
        'list.highlightForeground': '#88c0d0',
        // 'list.filterMatchBackground': '',

        'statusBar.background': '#3b4252',
        'statusBar.border': '#3b425200',
        'statusBar.debuggingBackground': '#5e81ac',
        'statusBar.debuggingForeground': '#d8dee9',
        'statusBar.foreground': '#d8dee9',
        'statusBar.noFolderBackground': '#3b4252',
        'statusBar.noFolderForeground': '#d8dee9',
        'statusBarItem.activeBackground': '#4c566a',
        'statusBarItem.hoverBackground': '#434c5e',
        'statusBarItem.prominentBackground': '#3b4252',
        'statusBarItem.prominentHoverBackground': '#434c5e',


        'tab.activeBackground': '#3b4252',
        'tab.activeBorder': '#88c0d000',
        'tab.activeBorderTop': '#88c0d000',
        'tab.activeForeground': '#d8dee9',
        'tab.border': '#3b425200',
        'tab.hoverBackground': '#3b4252cc',
        'tab.hoverBorder': '#88c0d000',
        'tab.inactiveBackground': '#2e3440',
        'tab.inactiveForeground': '#d8dee966',
        'tab.unfocusedActiveBorder': '#88c0d000',
        'tab.unfocusedActiveBorderTop': '#88c0d000',
        'tab.unfocusedActiveForeground': '#d8dee999',
        'tab.unfocusedHoverBackground': '#3b4252b3',
        'tab.unfocusedHoverBorder': '#88c0d000',
        'tab.unfocusedInactiveForeground': '#d8dee966',



        'editor.background': '#2e3440',
        'editor.foreground': '#d8dee9',


        'badge.background': '#88c0d0',
        'badge.foreground': '#2e3440',

        'button.background': '#434c5e',
        'button.foreground': '#d8dee9',
        'button.hoverBackground': '#4c566a',

        'debugExceptionWidget.background': '#4c566a',
        'debugExceptionWidget.border': '#2e3440',
        'debugToolBar.background': '#3b4252',
        'descriptionForeground': '#d8dee9e6',
        'diffEditor.insertedTextBackground': '#81a1c133',
        'diffEditor.removedTextBackground': '#bf616a4d',

        'dropdown.background': '#3b4252',
        'dropdown.border': '#3b4252',
        'dropdown.foreground': '#d8dee9',

        'editor.findMatchBackground': '#88c0d066',
        'editor.findMatchHighlightBackground': '#88c0d033',
        'editor.findRangeHighlightBackground': '#88c0d033',
        'editor.hoverHighlightBackground': '#3b4252',
        'editor.inactiveSelectionBackground': '#434c5ecc',
        'editor.lineHighlightBackground': '#3b4252',
        'editor.lineHighlightBorder': '#3b4252',
        'editor.rangeHighlightBackground': '#434c5e52',
        'editor.selectionBackground': '#434c5ecc',
        'editor.selectionHighlightBackground': '#434c5ecc',
        'editor.wordHighlightBackground': '#81a1c166',
        'editor.wordHighlightStrongBackground': '#81a1c199',
        'editorActiveLineNumber.foreground': '#d8dee9cc',
        'editorBracketMatch.background': '#2e344000',
        'editorBracketMatch.border': '#88c0d0',
        'editorCodeLens.foreground': '#4c566a',
        'editorCursor.foreground': '#d8dee9',
        'editorError.border': '#bf616a00',
        'editorError.foreground': '#bf616a',
        'editorGroup.background': '#2e3440',
        'editorGroup.border': '#3b425201',
        'editorGroup.dropBackground': '#3b425299',
        'editorGroupHeader.noTabsBackground': '#2e3440',
        'editorGroupHeader.tabsBackground': '#2e3440',
        'editorGroupHeader.tabsBorder': '#3b425200',
        'editorGutter.addedBackground': '#a3be8c',
        'editorGutter.background': '#2e3440',
        'editorGutter.deletedBackground': '#bf616a',
        'editorGutter.modifiedBackground': '#ebcb8b',
        'editorHint.border': '#ebcb8b00',
        'editorHint.foreground': '#ebcb8b',
        'editorHoverWidget.background': '#3b4252',
        'editorHoverWidget.border': '#3b4252',
        'editorIndentGuide.activeBackground': '#4c566a',
        'editorIndentGuide.background': '#434c5eb3',
        'editorLineNumber.activeForeground': '#d8dee9',
        'editorLineNumber.foreground': '#4c566a',
        'editorLink.activeForeground': '#88c0d0',
        'editorMarkerNavigation.background': '#5e81acc0',
        'editorMarkerNavigationError.background': '#bf616ac0',
        'editorMarkerNavigationWarning.background': '#ebcb8bc0',
        'editorOverviewRuler.addedForeground': '#a3be8c',
        'editorOverviewRuler.border': '#3b4252',
        'editorOverviewRuler.currentContentForeground': '#3b4252',
        'editorOverviewRuler.deletedForeground': '#bf616a',
        'editorOverviewRuler.errorForeground': '#bf616a',
        'editorOverviewRuler.findMatchForeground': '#88c0d066',
        'editorOverviewRuler.incomingContentForeground': '#3b4252',
        'editorOverviewRuler.infoForeground': '#81a1c1',
        'editorOverviewRuler.modifiedForeground': '#ebcb8b',
        'editorOverviewRuler.rangeHighlightForeground': '#88c0d066',
        'editorOverviewRuler.selectionHighlightForeground': '#88c0d066',
        'editorOverviewRuler.warningForeground': '#ebcb8b',
        'editorOverviewRuler.wordHighlightForeground': '#88c0d066',
        'editorOverviewRuler.wordHighlightStrongForeground': '#88c0d066',
        'editorRuler.foreground': '#434c5e',
        'editorSuggestWidget.background': '#2e3440',
        'editorSuggestWidget.border': '#3b4252',
        'editorSuggestWidget.foreground': '#d8dee9',
        'editorSuggestWidget.highlightForeground': '#88c0d0',
        'editorSuggestWidget.selectedBackground': '#434c5e',
        'editorWarning.border': '#ebcb8b00',
        'editorWarning.foreground': '#ebcb8b',
        'editorWhitespace.foreground': '#4c566ab3',
        'editorWidget.background': '#2e3440',
        'editorWidget.border': '#3b4252',
        'errorForeground': '#bf616a',
        'extensionButton.prominentBackground': '#434c5e',
        'extensionButton.prominentForeground': '#d8dee9',
        'extensionButton.prominentHoverBackground': '#4c566a',
        'focusBorder': '#3b4252',
        'foreground': '#d8dee9',
        'gitDecoration.conflictingResourceForeground': '#5e81ac',
        'gitDecoration.deletedResourceForeground': '#bf616a',
        'gitDecoration.ignoredResourceForeground': '#d8dee966',
        'gitDecoration.modifiedResourceForeground': '#ebcb8b',
        'gitDecoration.submoduleResourceForeground': '#8fbcbb',
        'gitDecoration.untrackedResourceForeground': '#a3be8c',
        'input.background': '#3b4252',
        'input.border': '#3b4252',
        'input.foreground': '#d8dee9',
        'input.placeholderForeground': '#d8dee999',
        'inputOption.activeBackground': '#5e81ac',
        'inputOption.activeBorder': '#5e81ac',
        'inputValidation.errorBackground': '#bf616a',
        'inputValidation.errorBorder': '#bf616a',
        'inputValidation.infoBackground': '#81a1c1',
        'inputValidation.infoBorder': '#81a1c1',
        'inputValidation.warningBackground': '#d08770',
        'inputValidation.warningBorder': '#d08770',

        'merge.border': '#3b425200',
        'merge.currentContentBackground': '#81a1c14d',
        'merge.currentHeaderBackground': '#81a1c166',
        'merge.incomingContentBackground': '#8fbcbb4d',
        'merge.incomingHeaderBackground': '#8fbcbb66',
        'minimap.findMatchHighlight': '#88c0d0',
        'notificationCenter.border': '#3b425200',
        'notificationCenterHeader.background': '#2e3440',
        'notificationCenterHeader.foreground': '#88c0d0',
        'notificationLink.foreground': '#88c0d0',
        'notificationToast.border': '#3b425200',
        'notifications.background': '#3b4252',
        'notifications.border': '#2e3440',
        'notifications.foreground': '#d8dee9',
        'panel.background': '#2e3440',
        'panel.border': '#3b4252',
        'panelTitle.activeBorder': '#88c0d000',
        'panelTitle.activeForeground': '#88c0d0',
        'panelTitle.inactiveForeground': '#d8dee9',
        'peekView.border': '#4c566a',
        'peekViewEditor.background': '#2e3440',
        'peekViewEditor.matchHighlightBackground': '#88c0d04d',
        'peekViewEditorGutter.background': '#2e3440',
        'peekViewResult.background': '#2e3440',
        'peekViewResult.fileForeground': '#88c0d0',
        'peekViewResult.lineForeground': '#d8dee966',
        'peekViewResult.matchHighlightBackground': '#88c0d0cc',
        'peekViewResult.selectionBackground': '#434c5e',
        'peekViewResult.selectionForeground': '#d8dee9',
        'peekViewTitle.background': '#3b4252',
        'peekViewTitleDescription.foreground': '#d8dee9',
        'peekViewTitleLabel.foreground': '#88c0d0',
        'pickerGroup.border': '#3b4252',
        'pickerGroup.foreground': '#88c0d0',
        'progressBar.background': '#88c0d0',
        'scrollbar.shadow': '#00000066',
        'scrollbarSlider.activeBackground': '#434c5eaa',
        'scrollbarSlider.background': '#434c5e99',
        'scrollbarSlider.hoverBackground': '#434c5eaa',
        'selection.background': '#88c0d099',


        'terminal.ansiBlack': '#3b4252',
        'terminal.ansiBlue': '#81a1c1',
        'terminal.ansiBrightBlack': '#4c566a',
        'terminal.ansiBrightBlue': '#81a1c1',
        'terminal.ansiBrightCyan': '#8fbcbb',
        'terminal.ansiBrightGreen': '#a3be8c',
        'terminal.ansiBrightMagenta': '#b48ead',
        'terminal.ansiBrightRed': '#bf616a',
        'terminal.ansiBrightWhite': '#eceff4',
        'terminal.ansiBrightYellow': '#ebcb8b',
        'terminal.ansiCyan': '#88c0d0',
        'terminal.ansiGreen': '#a3be8c',
        'terminal.ansiMagenta': '#b48ead',
        'terminal.ansiRed': '#bf616a',
        'terminal.ansiWhite': '#e5e9f0',
        'terminal.ansiYellow': '#ebcb8b',
        'terminal.background': '#2e3440',
        'terminal.foreground': '#d8dee9',


        'textBlockQuote.background': '#3b4252',
        'textBlockQuote.border': '#81a1c1',
        'textCodeBlock.background': '#4c566a',
        'textLink.activeForeground': '#88c0d0',
        'textLink.foreground': '#88c0d0',
        'textPreformat.foreground': '#8fbcbb',
        'textSeparator.foreground': '#eceff4',

        'titleBar.activeBackground': '#2e3440',
        'titleBar.activeForeground': '#d8dee9',
        'titleBar.border': '#2e344000',
        'titleBar.inactiveBackground': '#2e3440',
        'titleBar.inactiveForeground': '#d8dee966',

        'widget.shadow': '#00000066',

        'breadcrumb.activeSelectionForeground': '#f5f6f9',
        'breadcrumb.background': '#2e3440',
        'breadcrumb.focusForeground': '#f5f6f9',
        'breadcrumb.foreground': '#d8dee9cc',
        'breadcrumbPicker.background': '#2e3440',
        'checkbox.background': '#3b4252',
        'checkbox.border': '#3b4252',
        'checkbox.foreground': '#d8dee9',
        'debugIcon.breakpointCurrentStackframeForeground': '#ffcc00',
        'debugIcon.breakpointDisabledForeground': '#848484',
        'debugIcon.breakpointForeground': '#e51400',
        'debugIcon.breakpointStackframeForeground': '#89d185',
        'debugIcon.breakpointUnverifiedForeground': '#848484',
        'debugIcon.continueForeground': '#75beff',
        'debugIcon.disconnectForeground': '#f48771',
        'debugIcon.pauseForeground': '#75beff',
        'debugIcon.restartForeground': '#89d185',
        'debugIcon.startForeground': '#89d185',
        'debugIcon.stepBackForeground': '#75beff',
        'debugIcon.stepIntoForeground': '#75beff',
        'debugIcon.stepOutForeground': '#75beff',
        'debugIcon.stepOverForeground': '#75beff',
        'debugIcon.stopForeground': '#f48771',
        'editor.focusedStackFrameHighlightBackground': '#7abd7a4d',
        'editor.foldBackground': '#434c5e3d',
        'editor.snippetFinalTabstopHighlightBorder': '#525252',
        'editor.snippetTabstopHighlightBackground': '#7c7c7c4d',
        'editor.stackFrameHighlightBackground': '#ffff0033',
        'editor.symbolHighlightBackground': '#88c0d033',
        'editorGutter.commentRangeForeground': '#c5c5c5',
        'editorHoverWidget.foreground': '#d8dee9',
        'editorHoverWidget.statusBarBackground': '#474f62',
        'editorInfo.foreground': '#75beff',
        'editorLightBulb.foreground': '#ffcc00',
        'editorLightBulbAutoFix.foreground': '#75beff',
        'editorMarkerNavigationInfo.background': '#75beff',
        'editorOverviewRuler.bracketMatchForeground': '#a0a0a0',
        'editorOverviewRuler.commonContentForeground': '#60606066',
        'editorPane.background': '#2e3440',
        'editorUnnecessaryCode.opacity': '#000000aa',
        'editorWidget.foreground': '#d8dee9',
        'extensionBadge.remoteBackground': '#88c0d0',
        'extensionBadge.remoteForeground': '#2e3440',
        'gitDecoration.addedResourceForeground': '#81b88b',
        'gitlens.gutterBackgroundColor': '#ffffff13',
        'gitlens.gutterForegroundColor': '#bebebe',
        'gitlens.gutterUncommittedForegroundColor': '#00bcf299',
        'gitlens.lineHighlightBackgroundColor': '#00bcf233',
        'gitlens.lineHighlightOverviewRulerColor': '#00bcf299',
        'gitlens.trailingLineBackgroundColor': '#00000000',
        'gitlens.trailingLineForegroundColor': '#99999959',
        'icon.foreground': '#c5c5c5',
        'imagePreview.border': '#80808059',
        'list.filterMatchBackground': '#88c0d033',
        'list.invalidItemForeground': '#b89500',
        'listFilterWidget.background': '#653723',
        'listFilterWidget.noMatchesOutline': '#be1100',
        'listFilterWidget.outline': '#00000000',
        'menu.background': '#3b4252',
        'menu.foreground': '#d8dee9',
        'menu.selectionBackground': '#88c0d0',
        'menu.selectionForeground': '#2e3440',
        'menu.separatorBackground': '#bbbbbb',
        'menubar.selectionBackground': '#ffffff1a',
        'menubar.selectionForeground': '#d8dee9',
        'merge.commonContentBackground': '#60606029',
        'merge.commonHeaderBackground': '#60606066',
        'minimap.errorHighlight': '#ff1212b3',
        'minimap.selectionHighlight': '#264f78',
        'minimap.warningHighlight': '#ebcb8b',
        'minimapGutter.addedBackground': '#587c0c',
        'minimapGutter.deletedBackground': '#94151b',
        'minimapGutter.modifiedBackground': '#0c7d9d',
        'notificationsErrorIcon.foreground': '#bf616a',
        'notificationsInfoIcon.foreground': '#75beff',
        'notificationsWarningIcon.foreground': '#ebcb8b',
        'panel.dropBackground': '#ffffff1f',
        'problemsErrorIcon.foreground': '#bf616a',
        'problemsInfoIcon.foreground': '#75beff',
        'problemsWarningIcon.foreground': '#ebcb8b',
        'quickInput.background': '#2e3440',
        'quickInput.foreground': '#d8dee9',
        'searchEditor.findMatchBackground': '#88c0d022',
        'searchEditor.textInputBorder': '#3b4252',
        'settings.checkboxBackground': '#3b4252',
        'settings.checkboxBorder': '#3b4252',
        'settings.checkboxForeground': '#d8dee9',
        'settings.dropdownBackground': '#3b4252',
        'settings.dropdownBorder': '#3b4252',
        'settings.dropdownForeground': '#d8dee9',
        'settings.dropdownListBorder': '#3b4252',
        'settings.headerForeground': '#e7e7e7',
        'settings.modifiedItemIndicator': '#0c7d9d',
        'settings.numberInputBackground': '#3b4252',
        'settings.numberInputBorder': '#3b4252',
        'settings.numberInputForeground': '#d8dee9',
        'settings.textInputBackground': '#3b4252',
        'settings.textInputBorder': '#3b4252',
        'settings.textInputForeground': '#d8dee9',
        'statusBar.debuggingBorder': '#3b425200',
        'statusBar.noFolderBorder': '#3b425200',
        'statusBarItem.prominentForeground': '#d8dee9',
        'statusBarItem.remoteBackground': '#88c0d0',
        'statusBarItem.remoteForeground': '#2e3440',
        'symbolIcon.arrayForeground': '#d8dee9',
        'symbolIcon.booleanForeground': '#d8dee9',
        'symbolIcon.classForeground': '#ee9d28',
        'symbolIcon.colorForeground': '#d8dee9',
        'symbolIcon.constantForeground': '#d8dee9',
        'symbolIcon.constructorForeground': '#b180d7',
        'symbolIcon.enumeratorForeground': '#ee9d28',
        'symbolIcon.enumeratorMemberForeground': '#75beff',
        'symbolIcon.eventForeground': '#ee9d28',
        'symbolIcon.fieldForeground': '#75beff',
        'symbolIcon.fileForeground': '#d8dee9',
        'symbolIcon.folderForeground': '#d8dee9',
        'symbolIcon.functionForeground': '#b180d7',
        'symbolIcon.interfaceForeground': '#75beff',
        'symbolIcon.keyForeground': '#d8dee9',
        'symbolIcon.keywordForeground': '#d8dee9',
        'symbolIcon.methodForeground': '#b180d7',
        'symbolIcon.moduleForeground': '#d8dee9',
        'symbolIcon.namespaceForeground': '#d8dee9',
        'symbolIcon.nullForeground': '#d8dee9',
        'symbolIcon.numberForeground': '#d8dee9',
        'symbolIcon.objectForeground': '#d8dee9',
        'symbolIcon.operatorForeground': '#d8dee9',
        'symbolIcon.packageForeground': '#d8dee9',
        'symbolIcon.propertyForeground': '#d8dee9',
        'symbolIcon.referenceForeground': '#d8dee9',
        'symbolIcon.snippetForeground': '#d8dee9',
        'symbolIcon.stringForeground': '#d8dee9',
        'symbolIcon.structForeground': '#d8dee9',
        'symbolIcon.textForeground': '#d8dee9',
        'symbolIcon.typeParameterForeground': '#d8dee9',
        'symbolIcon.unitForeground': '#d8dee9',
        'symbolIcon.variableForeground': '#75beff',
        'tab.activeModifiedBorder': '#3399cc',
        'tab.inactiveModifiedBorder': '#3399cc80',
        'tab.unfocusedActiveBackground': '#3b4252',
        'tab.unfocusedActiveModifiedBorder': '#3399cc80',
        'tab.unfocusedInactiveModifiedBorder': '#3399cc40',
        'terminal.border': '#3b4252',
        'terminal.selectionBackground': '#ffffff40',


        /*
        // Contrast Colors - The contrast colors are typically only set for high contrast themes. If set, they add an additional border around items across the UI to increase the contrast.
        'contrastActiveBorder': '',
        'contrastBorder': '',
        // Base Colors
        'focusBorder': '',
        'foreground': '',
        'widget.shadow': '',
        'selection.background': '',
        'descriptionForeground': '',
        'errorForeground': '',
        // Text Colors — Colors inside a text document, such as the welcome page.
        'textBlockQuote.background': '',
        'textBlockQuote.border': '',
        'textCodeBlock.background': '',
        'textLink.activeForeground': '',
        'textLink.foreground': '',
        'textPreformat.foreground': '',
        'textSeparator.foreground': '',
        // Button Control — A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
        'button.background': '',
        'button.foreground': '',
        'button.hoverBackground': '',
        // Dropdown Control — A set of colors for all dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the dropdown control is not used on macOS currently.
        'dropdown.background': '',
        'dropdown.listBackground': '',
        'dropdown.border': '',
        'dropdown.foreground': '',
        // Input Control — Colors for input controls such as in the Search view or the Find/Replace dialog.
        'input.background': '',
        'input.border': '',
        'input.foreground': '',
        'input.placeholderForeground': '',
        'inputOption.activeBorder': '',
        'inputValidation.errorBackground': '',
        'inputValidation.errorBorder': '',
        'inputValidation.infoBackground': '',
        'inputValidation.infoBorder': '',
        'inputValidation.warningBackground': '',
        'inputValidation.warningBorder': '',
        // Scroll Bar Control
        'scrollbar.shadow': '',
        'scrollbarSlider.activeBackground': '',
        'scrollbarSlider.background': '',
        'scrollbarSlider.hoverBackground': '',
        // Badge — Badges are small information labels, for example, search results count.
        'badge.foreground': '',
        'badge.background': '',
        // Progress Bar
        'progressBar.background': '',
        // Lists and Trees — Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
        'list.activeSelectionBackground': '',
        'list.activeSelectionForeground': '',
        'list.dropBackground': '',
        'list.focusBackground': '',
        'list.focusForeground': '',
        'list.highlightForeground': '',
        'list.hoverBackground': '',
        'list.hoverForeground': '',
        'list.inactiveSelectionBackground': '',
        'list.inactiveSelectionForeground': '',
        'list.inactiveFocusBackground': '',
        'list.invalidItemForeground': '',
        // Activity Bar — The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
        'activityBar.background': '',
        'activityBar.dropBackground': '',
        'activityBar.foreground': '',
        'activityBar.border': '',
        'activityBarBadge.background': '',
        'activityBarBadge.foreground': '',
        // Side Bar — The Side Bar contains views like the Explorer and Search.
        'sideBar.background': '',
        'sideBar.foreground': '',
        'sideBar.border': '',
        'sideBar.dropBackground': '',
        'sideBarTitle.foreground': '',
        'sideBarSectionHeader.background': '',
        'sideBarSectionHeader.foreground': '',
        // Editor Groups & Tabs — Editor Groups are the containers of editors. There can be up to three editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
        'editorGroup.background': '',
        'editorGroup.border': '',
        'editorGroup.dropBackground': '',
        'editorGroupHeader.noTabsBackground': '',
        'editorGroupHeader.tabsBackground': '',
        'editorGroupHeader.tabsBorder': '',
        'tab.activeBackground': '',
        'tab.activeForeground': '',
        'tab.border': '',
        'tab.activeBorder': '',
        'tab.unfocusedActiveBorder': '',
        'tab.inactiveBackground': '',
        'tab.inactiveForeground': '',
        'tab.unfocusedActiveForeground': '',
        'tab.unfocusedInactiveForeground': '',
        'tab.hoverBackground': '',
        'tab.unfocusedHoverBackground': '',
        'tab.hoverBorder': '',
        'tab.unfocusedHoverBorder': '',
        // Editor Colors — for syntax highlighting, use the editor.tokenColorCustomizations setting. All other editor colors are listed here
        'editor.background': '',
        'editor.foreground': '',
        'editorLineNumber.foreground': '',
        'editorLineNumber.activeForeground': '',
        'editorCursor.background': '',
        'editorCursor.foreground': '',
        'editor.selectionBackground': '',
        'editor.selectionForeground': '',
        'editor.inactiveSelectionBackground': '',
        'editor.selectionHighlightBackground': '',
        'editor.selectionHighlightBorder': '',
        'editor.wordHighlightBackground': '',
        'editor.wordHighlightBorder': '',
        'editor.worldHighlightStrongBackground': '',
        'editor.wordHighlightStrongBorder': '',
        'editor.findMatchBackground': '',
        'editor.findMatchHighlightBackground': '',
        'editor.findRangeHighlightBackground': '',
        'editor.findMatchBorder': '',
        'editor.findMatchHighlightBorder': '',
        'editor.hoverHighlightBackground': '',
        'editor.lineHighlightBackground': '',
        'editor.lineHighlightBorder': '',
        'editorLink.activeForeground': '',
        'editor.rangeHighlightBackground': '',
        'editor.rangeHighlightBorder': '',
        'editorWhitespace.foreground': '',
        'editorIndentGuide.background': '',
        'editorRuler.foreground': '',
        'editorCodeLens.foreground': '',
        'editorBracketMatch.background': '',
        'editorBracketMatch.border': '',
        'editorOverviewRuler.border': '',
        'editorOverviewRuler.findMatchForeground': '',
        'editorOverviewRuler.rangeHighlightForeground': '',
        'editorOverviewRuler.selectionHighlightForeground': '',
        'editorOverviewRuler.wordHighlightForeground': '',
        'editorOverviewRuler.wordHighlightStrongForeground': '',
        'editorOverviewRuler.modifiedForeground': '',
        'editorOverviewRuler.addedForeground': '',
        'editorOverviewRuler.deletedForeground': '',
        'editorOverviewRuler.errorForeground': '',
        'editorOverviewRuler.warningForeground': '',
        'editorOverviewRuler.infoForeground': '',
        'editorError.foreground': '',
        'editorError.border': '',
        'editorWarning.foreground': '',
        'editorWarning.border': '',
        'editorInfo.foreground': '',
        'editorInfo.border': '',
        'editorHint.foreground': '',
        'editorHint.border': '',
        'editorGutter.background': '',
        'editorGutter.modifiedBackground': '',
        'editorGutter.addedBackground': '',
        'editorGutter.deletedBackground': '',
        // Diff Editor Colors — For coloring inserted and removed text, use either a background or a border color but not both.
        'diffEditor.insertedTextBackground': '',
        'diffEditor.insertedTextBorder': '',
        'diffEditor.removedTextBackground': '',
        'diffEditor.removedTextBorder': '',
        // Editor Widget Colors - The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover
        'editorWidget.background': '',
        'editorWidget.border': '',
        'editorSuggestWidget.background': '',
        'editorSuggestWidget.border': '',
        'editorSuggestWidget.foreground': '',
        'editorSuggestWidget.highlightForeground': '',
        'editorSuggestWidget.selectedBackground': '',
        'editorHoverWidget.background': '',
        'editorHoverWidget.border': '',
        'debugExceptionWidget.background': '',
        'debugExceptionWidget.border': '',
        'editorMarkerNavigation.background': '',
        'editorMarkerNavigationError.background': '',
        'editorMarkerNavigationWarning.background': '',
        'editorMarkerNavigationInfo.background': '',
        // Peek View Colors — Peek views are used to show references and declarations as a view inside the editor.
        'peekView.border': '',
        'peekViewEditor.background': '',
        'peekViewEditorGutter.background': '',
        'peekViewEditor.matchHighlightBackground': '',
        'peekViewResult.background': '',
        'peekViewResult.fileForeground': '',
        'peekViewResult.lineForeground': '',
        'peekViewResult.matchHighlightBackground': '',
        'peekViewResult.selectionBackground': '',
        'peekViewResult.selectionForeground': '',
        'peekViewTitle.background': '',
        'peekViewTitleDescription.foreground': '',
        'peekViewTitleLabel.foreground': '',
        // Merge Conflicts — Merge conflict decorations are shown when the editor contains special diff ranges.
        'merge.currentHeaderBackground': '',
        'merge.currentContentBackground': '',
        'merge.incomingHeaderBackground': '',
        'merge.incomingContentBackground': '',
        'merge.border': '',
        'merge.commonContentBackground': '',
        'merge.commonHeaderBackground': '',
        'editorOverviewRuler.currentContentForeground': '',
        'editorOverviewRuler.currentContentForeground': '',
        'editorOverviewRuler.commonContentForeground': '',
        // Panel Colors — Panels are shown below the editor area and contain views like Output and Integrated Terminal.
        'panel.background': '',
        'panel.border': '',
        'panel.dropBackground': '',
        'panelTitle.activeBorder': '',
        'panelTitle.activeForeground': '',
        'panelTitle.inactiveForeground': '',
        // Status Bar Colors — The Status Bar is shown in the bottom of the workbench.
        'statusBar.background': '',
        'statusBar.foreground': '',
        'statusBar.border': '',
        'statusBar.debuggingBackground': '',
        'statusBar.debuggingForeground': '',
        'statusBar.debuggingBorder': '',
        'statusBar.noFolderForeground': '',
        'statusBar.noFolderBackground': '',
        'statusBar.noFolderBorder': '',
        'statusBarItem.activeBackground': '',
        'statusBarItem.hoverBackground': '',
        'statusBarItem.prominentBackground': '',
        'statusBarItem.prominentHoverBackground': '',
        // Title Bar Colors (macOS)
        'titleBar.activeBackground': '',
        'titleBar.activeForeground': '',
        'titleBar.inactiveBackground': '',
        'titleBar.inactiveForeground': '',
        'titleBar.border': '',
        // Notification Colors — Notification toasts slide up from the bottom-right of the workbench.
        'notificationCenter.border': '',
        'notificationCenterHeader.foreground': '',
        'notificationCenterHeader.background': '',
        'notificationToast.border': '',
        'notifications.foreground': '',
        'notifications.background': '',
        'notifications.border': '',
        'notificationLink.foreground': '',
        // Extensions
        'extensionButton.prominentForeground': '',
        'extensionButton.prominentBackground': '',
        'extensionButton.prominentHoverBackground': '',
        'pickerGroup.border': '',
        'pickerGroup.foreground': '',
        // Integrated Terminal Colors
        'terminal.background': '',
        'terminal.foreground': '',
        'terminal.ansiBlack': '',
        'terminal.ansiBlue': '',
        'terminal.ansiBrightBlack': '',
        'terminal.ansiBrightBlue': '',
        'terminal.ansiBrightCyan': '',
        'terminal.ansiBrightGreen': '',
        'terminal.ansiBrightMagenta': '',
        'terminal.ansiBrightRed': '',
        'terminal.ansiBrightWhite': '',
        'terminal.ansiBrightYellow': '',
        'terminal.ansiCyan': '',
        'terminal.ansiGreen': '',
        'terminal.ansiMagenta': '',
        'terminal.ansiRed': '',
        'terminal.ansiWhite': '',
        'terminal.ansiYellow': '',
        'terminal.selectionBackground': '',
        'terminalCursor.background': '',
        'terminalCursor.foreground': '',
        // Debug
        'debugToolBar.background': '',
        // Welcome Page
        'welcomePage.buttonBackground': '',
        'welcomePage.buttonHoverBackground': '',
        'walkThrough.embeddedEditorBackground': '',
        // Git Colors
        'gitDecoration.modifiedResourceForeground': '',
        'gitDecoration.deletedResourceForeground': '',
        'gitDecoration.untrackedResourceForeground': '',
        'gitDecoration.ignoredResourceForeground': '',
        'gitDecoration.conflictingResourceForeground': ''
        */
    };
}

