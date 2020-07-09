export interface CodeEditorAction {
    id: string;
    label: string;
    alias: string;
    run(e: monaco.editor.IStandaloneCodeEditor): Promise<void>;
}

export class CodeEditorActions {
    static readonly moveCarretLeftAction = {
        id: 'editor.action.moveCarretLeftAction',
        label: 'Move Caret Left',
        alias: 'Move Caret Left',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly moveCarretRightAction = {
        id: 'editor.action.moveCarretRightAction',
        label: 'Move Caret Right',
        alias: 'Move Caret Right',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly transposeLetters = {
        id: 'editor.action.transposeLetters',
        label: 'Transpose Letters',
        alias: 'Transpose Letters',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly clipboardCutAction = {
        id: 'editor.action.clipboardCutAction',
        label: 'Cut',
        alias: 'Cut',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly clipboardCopyAction = {
        id: 'editor.action.clipboardCopyAction',
        label: 'Copy',
        alias: 'Copy',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly clipboardCopyWithSyntaxHighlightingAction = {
        id: 'editor.action.clipboardCopyWithSyntaxHighlightingAction',
        label: 'Copy With Syntax Highlighting',
        alias: 'Copy With Syntax Highlighting',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly commentLine = {
        id: 'editor.action.commentLine',
        label: 'Toggle Line Comment',
        alias: 'Toggle Line Comment',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly addCommentLine = {
        id: 'editor.action.addCommentLine',
        label: 'Add Line Comment',
        alias: 'Add Line Comment',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly removeCommentLine = {
        id: 'editor.action.removeCommentLine',
        label: 'Remove Line Comment',
        alias: 'Remove Line Comment',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly blockComment = {
        id: 'editor.action.blockComment',
        label: 'Toggle Block Comment',
        alias: 'Toggle Block Comment',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly showContextMenu = {
        id: 'editor.action.showContextMenu',
        label: 'Show Editor Context Menu',
        alias: 'Show Editor Context Menu',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly cursorUndo = {
        id: 'cursorUndo',
        label: 'Undo',
        alias: 'Undo',
        async run(e: monaco.editor.IStandaloneCodeEditor) { e.trigger('', 'undo', ''); }
    };
    static readonly cursorRedo = {
        id: 'cursorRedo',
        label: 'Redo',
        alias: 'Redo',
        async run(e: monaco.editor.IStandaloneCodeEditor) { e.trigger('', 'redo', ''); }
    };
    static readonly fontZoomIn = {
        id: 'editor.action.fontZoomIn',
        label: 'Editor Font Zoom In',
        alias: 'Editor Font Zoom In',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly fontZoomOut = {
        id: 'editor.action.fontZoomOut',
        label: 'Editor Font Zoom Out',
        alias: 'Editor Font Zoom Out',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly fontZoomReset = {
        id: 'editor.action.fontZoomReset',
        label: 'Editor Font Zoom Reset',
        alias: 'Editor Font Zoom Reset',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly copyLinesUpAction = {
        id: 'editor.action.copyLinesUpAction',
        label: 'Copy Line Up',
        alias: 'Copy Line Up',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly copyLinesDownAction = {
        id: 'editor.action.copyLinesDownAction',
        label: 'Copy Line Down',
        alias: 'Copy Line Down',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly duplicateSelection = {
        id: 'editor.action.duplicateSelection',
        label: 'Duplicate Selection',
        alias: 'Duplicate Selection',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly moveLinesUpAction = {
        id: 'editor.action.moveLinesUpAction',
        label: 'Move Line Up',
        alias: 'Move Line Up',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly moveLinesDownAction = {
        id: 'editor.action.moveLinesDownAction',
        label: 'Move Line Down',
        alias: 'Move Line Down',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly sortLinesAscending = {
        id: 'editor.action.sortLinesAscending',
        label: 'Sort Lines Ascending',
        alias: 'Sort Lines Ascending',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly sortLinesDescending = {
        id: 'editor.action.sortLinesDescending',
        label: 'Sort Lines Descending',
        alias: 'Sort Lines Descending',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly trimTrailingWhitespace = {
        id: 'editor.action.trimTrailingWhitespace',
        label: 'Trim Trailing Whitespace',
        alias: 'Trim Trailing Whitespace',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly deleteLines = {
        id: 'editor.action.deleteLines',
        label: 'Delete Line',
        alias: 'Delete Line',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly indentLines = {
        id: 'editor.action.indentLines',
        label: 'Indent Line',
        alias: 'Indent Line',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly outdentLines = {
        id: 'editor.action.outdentLines',
        label: 'Outdent Line',
        alias: 'Outdent Line',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly insertLineBefore = {
        id: 'editor.action.insertLineBefore',
        label: 'Insert Line Above',
        alias: 'Insert Line Above',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly insertLineAfter = {
        id: 'editor.action.insertLineAfter',
        label: 'Insert Line Below',
        alias: 'Insert Line Below',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly deleteAllLeft = {
        id: 'deleteAllLeft',
        label: 'Delete All Left',
        alias: 'Delete All Left',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly deleteAllRight = {
        id: 'deleteAllRight',
        label: 'Delete All Right',
        alias: 'Delete All Right',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly joinLines = {
        id: 'editor.action.joinLines',
        label: 'Join Lines',
        alias: 'Join Lines',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly transpose = {
        id: 'editor.action.transpose',
        label: 'Transpose characters around the cursor',
        alias: 'Transpose characters around the cursor',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly transformToUppercase = {
        id: 'editor.action.transformToUppercase',
        label: 'Transform to Uppercase',
        alias: 'Transform to Uppercase',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly transformToLowercase = {
        id: 'editor.action.transformToLowercase',
        label: 'Transform to Lowercase',
        alias: 'Transform to Lowercase',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly transformToTitlecase = {
        id: 'editor.action.transformToTitlecase',
        label: 'Transform to Title Case',
        alias: 'Transform to Title Case',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly smartSelectExpand = {
        id: 'editor.action.smartSelect.expand',
        label: 'Expand Selection',
        alias: 'Expand Selection',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly smartSelectShrink = {
        id: 'editor.action.smartSelect.shrink',
        label: 'Shrink Selection',
        alias: 'Shrink Selection',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly toggleTabFocusMode = {
        id: 'editor.action.toggleTabFocusMode',
        label: 'Toggle Tab Key Moves Focus',
        alias: 'Toggle Tab Key Moves Focus',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly forceRetokenize = {
        id: 'editor.action.forceRetokenize',
        label: 'Developer: Force Retokenize',
        alias: 'Developer: Force Retokenize',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly toggleHighContrast = {
        id: 'editor.action.toggleHighContrast',
        label: 'Toggle High Contrast Theme',
        alias: 'Toggle High Contrast Theme',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly selectToBracket = {
        id: 'editor.action.selectToBracket',
        label: 'Select to Bracket',
        alias: 'Select to Bracket',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly jumpToBracket = {
        id: 'editor.action.jumpToBracket',
        label: 'Go to Bracket',
        alias: 'Go to Bracket',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly find = {
        id: 'actions.find',
        label: 'Find',
        alias: 'Find',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly findWithSelection = {
        id: 'actions.findWithSelection',
        label: 'Find With Selection',
        alias: 'Find With Selection',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly nextMatchFindAction = {
        id: 'editor.action.nextMatchFindAction',
        label: 'Find Next',
        alias: 'Find Next',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly previousMatchFindAction = {
        id: 'editor.action.previousMatchFindAction',
        label: 'Find Previous',
        alias: 'Find Previous',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly nextSelectionMatchFindAction = {
        id: 'editor.action.nextSelectionMatchFindAction',
        label: 'Find Next Selection',
        alias: 'Find Next Selection',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly previousSelectionMatchFindAction = {
        id: 'editor.action.previousSelectionMatchFindAction',
        label: 'Find Previous Selection',
        alias: 'Find Previous Selection',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly startFindReplaceAction = {
        id: 'editor.action.startFindReplaceAction',
        label: 'Replace',
        alias: 'Replace',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly unfold = {
        id: 'editor.unfold',
        label: 'Unfold',
        alias: 'Unfold',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly unfoldRecursively = {
        id: 'editor.unfoldRecursively',
        label: 'Unfold Recursively',
        alias: 'Unfold Recursively',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly fold = {
        id: 'editor.fold',
        label: 'Fold',
        alias: 'Fold',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldRecursively = {
        id: 'editor.foldRecursively',
        label: 'Fold Recursively',
        alias: 'Fold Recursively',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldAll = {
        id: 'editor.foldAll',
        label: 'Fold All',
        alias: 'Fold All',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly unfoldAll = {
        id: 'editor.unfoldAll',
        label: 'Unfold All',
        alias: 'Unfold All',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldAllBlockComments = {
        id: 'editor.foldAllBlockComments',
        label: 'Fold All Block Comments',
        alias: 'Fold All Block Comments',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldAllMarkerRegions = {
        id: 'editor.foldAllMarkerRegions',
        label: 'Fold All Regions',
        alias: 'Fold All Regions',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly unfoldAllMarkerRegions = {
        id: 'editor.unfoldAllMarkerRegions',
        label: 'Unfold All Regions',
        alias: 'Unfold All Regions',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly toggleFold = {
        id: 'editor.toggleFold',
        label: 'Toggle Fold',
        alias: 'Toggle Fold',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldLevel1 = {
        id: 'editor.foldLevel1',
        label: 'Fold Level 1',
        alias: 'Fold Level 1',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldLevel2 = {
        id: 'editor.foldLevel2',
        label: 'Fold Level 2',
        alias: 'Fold Level 2',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldLevel3 = {
        id: 'editor.foldLevel3',
        label: 'Fold Level 3',
        alias: 'Fold Level 3',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldLevel4 = {
        id: 'editor.foldLevel4',
        label: 'Fold Level 4',
        alias: 'Fold Level 4',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldLevel5 = {
        id: 'editor.foldLevel5',
        label: 'Fold Level 5',
        alias: 'Fold Level 5',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldLevel6 = {
        id: 'editor.foldLevel6',
        label: 'Fold Level 6',
        alias: 'Fold Level 6',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly foldLevel7 = {
        id: 'editor.foldLevel7',
        label: 'Fold Level 7',
        alias: 'Fold Level 7',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly inPlaceReplaceUp = {
        id: 'editor.action.inPlaceReplace.up',
        label: 'Replace with Previous Value',
        alias: 'Replace with Previous Value',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly inPlaceReplacDown = {
        id: 'editor.action.inPlaceReplace.down',
        label: 'Replace with Next Value',
        alias: 'Replace with Next Value',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly openLink = {
        id: 'editor.action.openLink',
        label: 'Open Link',
        alias: 'Open Link',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly insertCursorAbove = {
        id: 'editor.action.insertCursorAbove',
        label: 'Add Cursor Above',
        alias: 'Add Cursor Above',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly insertCursorBelow = {
        id: 'editor.action.insertCursorBelow',
        label: 'Add Cursor Below',
        alias: 'Add Cursor Below',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly insertCursorAtEndOfEachLineSelected = {
        id: 'editor.action.insertCursorAtEndOfEachLineSelected',
        label: 'Add Cursors to Line Ends',
        alias: 'Add Cursors to Line Ends',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly addSelectionToNextFindMatch = {
        id: 'editor.action.addSelectionToNextFindMatch',
        label: 'Add Selection To Next Find Match',
        alias: 'Add Selection To Next Find Match',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly addSelectionToPreviousFindMatch = {
        id: 'editor.action.addSelectionToPreviousFindMatch',
        label: 'Add Selection To Previous Find Match',
        alias: 'Add Selection To Previous Find Match',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly moveSelectionToNextFindMatch = {
        id: 'editor.action.moveSelectionToNextFindMatch',
        label: 'Move Last Selection To Next Find Match',
        alias: 'Move Last Selection To Next Find Match',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly moveSelectionToPreviousFindMatch = {
        id: 'editor.action.moveSelectionToPreviousFindMatch',
        label: 'Move Last Selection To Previous Find Match',
        alias: 'Move Last Selection To Previous Find Match',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly selectHighlights = {
        id: 'editor.action.selectHighlights',
        label: 'Select All Occurrences of Find Match',
        alias: 'Select All Occurrences of Find Match',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly addCursorsToBottom = {
        id: 'editor.action.addCursorsToBottom',
        label: 'Add Cursors To Bottom',
        alias: 'Add Cursors To Bottom',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly addCursorsToTop = {
        id: 'editor.action.addCursorsToTop',
        label: 'Add Cursors To Top',
        alias: 'Add Cursors To Top',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly wordHighlightTrigger = {
        id: 'editor.action.wordHighlight.trigger',
        label: 'Trigger Symbol Highlight',
        alias: 'Trigger Symbol Highlight',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly showAccessibilityHelp = {
        id: 'editor.action.showAccessibilityHelp',
        label: 'Show Accessibility Help',
        alias: 'Show Accessibility Help',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly inspectTokens = {
        id: 'editor.action.inspectTokens',
        label: 'Developer: Inspect Tokens',
        alias: 'Developer: Inspect Tokens',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly gotoLine = {
        id: 'editor.action.gotoLine',
        label: 'Go to Line...',
        alias: 'Go to Line...',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly quickCommand = {
        id: 'editor.action.quickCommand',
        label: 'Command Palette',
        alias: 'Command Palette',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly markerNext = {
        id: 'editor.action.marker.next',
        label: 'Go to Next Problem (Error, Warning, Info)',
        alias: 'Go to Next Problem (Error, Warning, Info)',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly markerPrev = {
        id: 'editor.action.marker.prev',
        label: 'Go to Previous Problem (Error, Warning, Info)',
        alias: 'Go to Previous Problem (Error, Warning, Info)',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly markerNextInFiles = {
        id: 'editor.action.marker.nextInFiles',
        label: 'Go to Next Problem in Files (Error, Warning, Info)',
        alias: 'Go to Next Problem in Files (Error, Warning, Info)',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly markerPrevInFiles = {
        id: 'editor.action.marker.prevInFiles',
        label: 'Go to Previous Problem in Files (Error, Warning, Info)',
        alias: 'Go to Previous Problem in Files (Error, Warning, Info)',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly showHover = {
        id: 'editor.action.showHover',
        label: 'Show Hover',
        alias: 'Show Hover',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly showDefinitionPreviewHover = {
        id: 'editor.action.showDefinitionPreviewHover',
        label: 'Show Definition Preview Hover',
        alias: 'Show Definition Preview Hover',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
    static readonly triggerSuggest = {
        id: 'editor.action.triggerSuggest',
        label: 'Trigger Suggest',
        alias: 'Trigger Suggest',
        async run(e: monaco.editor.IStandaloneCodeEditor) {await e.getAction(this.id).run(); }
    };
}
