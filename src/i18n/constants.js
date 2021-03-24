/**
 * Constants for parts of translation.
 */

export const CONTEXT_MENU_ITEMS_NAMESPACE = 'ContextMenu:items';
export const CONTEXTMENU_ITEMS_NO_ITEMS = `${CONTEXT_MENU_ITEMS_NAMESPACE}.noItems`;
export const CONTEXTMENU_ITEMS_ROW_ABOVE = `${CONTEXT_MENU_ITEMS_NAMESPACE}.insertRowAbove`;
export const CONTEXTMENU_ITEMS_ROW_BELOW = `${CONTEXT_MENU_ITEMS_NAMESPACE}.insertRowBelow`;
export const CONTEXTMENU_ITEMS_INSERT_LEFT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.insertColumnOnTheLeft`;
export const CONTEXTMENU_ITEMS_INSERT_RIGHT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.insertColumnOnTheRight`;
export const CONTEXTMENU_ITEMS_REMOVE_ROW = `${CONTEXT_MENU_ITEMS_NAMESPACE}.removeRow`;
export const CONTEXTMENU_ITEMS_REMOVE_COLUMN = `${CONTEXT_MENU_ITEMS_NAMESPACE}.removeColumn`;
export const CONTEXTMENU_ITEMS_UNDO = `${CONTEXT_MENU_ITEMS_NAMESPACE}.undo`;
export const CONTEXTMENU_ITEMS_REDO = `${CONTEXT_MENU_ITEMS_NAMESPACE}.redo`;
export const CONTEXTMENU_ITEMS_READ_ONLY = `${CONTEXT_MENU_ITEMS_NAMESPACE}.readOnly`;
export const CONTEXTMENU_ITEMS_CLEAR_COLUMN = `${CONTEXT_MENU_ITEMS_NAMESPACE}.clearColumn`;

export const CONTEXTMENU_ITEMS_COPY = `${CONTEXT_MENU_ITEMS_NAMESPACE}.copy`;
export const CONTEXTMENU_ITEMS_CUT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.cut`;

export const CONTEXTMENU_ITEMS_FREEZE_COLUMN = `${CONTEXT_MENU_ITEMS_NAMESPACE}.freezeColumn`;
export const CONTEXTMENU_ITEMS_UNFREEZE_COLUMN = `${CONTEXT_MENU_ITEMS_NAMESPACE}.unfreezeColumn`;

export const CONTEXTMENU_ITEMS_MERGE_CELLS = `${CONTEXT_MENU_ITEMS_NAMESPACE}.mergeCells`;
export const CONTEXTMENU_ITEMS_UNMERGE_CELLS = `${CONTEXT_MENU_ITEMS_NAMESPACE}.unmergeCells`;

export const CONTEXTMENU_ITEMS_ADD_COMMENT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.addComment`;
export const CONTEXTMENU_ITEMS_EDIT_COMMENT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.editComment`;
export const CONTEXTMENU_ITEMS_REMOVE_COMMENT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.removeComment`;
export const CONTEXTMENU_ITEMS_READ_ONLY_COMMENT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.readOnlyComment`;

export const CONTEXTMENU_ITEMS_ALIGNMENT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.align`;
export const CONTEXTMENU_ITEMS_ALIGNMENT_LEFT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.align.left`;
export const CONTEXTMENU_ITEMS_ALIGNMENT_CENTER = `${CONTEXT_MENU_ITEMS_NAMESPACE}.align.center`;
export const CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.align.right`;
export const CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY = `${CONTEXT_MENU_ITEMS_NAMESPACE}.align.justify`;
export const CONTEXTMENU_ITEMS_ALIGNMENT_TOP = `${CONTEXT_MENU_ITEMS_NAMESPACE}.align.top`;
export const CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE = `${CONTEXT_MENU_ITEMS_NAMESPACE}.align.middle`;
export const CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM = `${CONTEXT_MENU_ITEMS_NAMESPACE}.align.bottom`;

export const CONTEXTMENU_ITEMS_BORDERS = `${CONTEXT_MENU_ITEMS_NAMESPACE}.borders`;
export const CONTEXTMENU_ITEMS_BORDERS_TOP = `${CONTEXT_MENU_ITEMS_NAMESPACE}.borders.top`;
export const CONTEXTMENU_ITEMS_BORDERS_RIGHT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.borders.right`;
export const CONTEXTMENU_ITEMS_BORDERS_BOTTOM = `${CONTEXT_MENU_ITEMS_NAMESPACE}.borders.bottom`;
export const CONTEXTMENU_ITEMS_BORDERS_LEFT = `${CONTEXT_MENU_ITEMS_NAMESPACE}.borders.left`;
export const CONTEXTMENU_ITEMS_REMOVE_BORDERS = `${CONTEXT_MENU_ITEMS_NAMESPACE}.borders.remove`;

export const CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD = `${CONTEXT_MENU_ITEMS_NAMESPACE}.nestedHeaders.insertChildRow`; // eslint-disable-line max-len
export const CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD = `${CONTEXT_MENU_ITEMS_NAMESPACE}.nestedHeaders.detachFromParent`; // eslint-disable-line max-len

export const CONTEXTMENU_ITEMS_HIDE_COLUMN = `${CONTEXT_MENU_ITEMS_NAMESPACE}.hideColumn`;
export const CONTEXTMENU_ITEMS_SHOW_COLUMN = `${CONTEXT_MENU_ITEMS_NAMESPACE}.showColumn`;

export const CONTEXTMENU_ITEMS_HIDE_ROW = `${CONTEXT_MENU_ITEMS_NAMESPACE}.hideRow`;
export const CONTEXTMENU_ITEMS_SHOW_ROW = `${CONTEXT_MENU_ITEMS_NAMESPACE}.showRow`;

export const FILTERS_NAMESPACE = 'Filters:';
export const FILTERS_CONDITIONS_NAMESPACE = `${FILTERS_NAMESPACE}conditions`;
export const FILTERS_CONDITIONS_NONE = `${FILTERS_CONDITIONS_NAMESPACE}.none`;
export const FILTERS_CONDITIONS_EMPTY = `${FILTERS_CONDITIONS_NAMESPACE}.isEmpty`;
export const FILTERS_CONDITIONS_NOT_EMPTY = `${FILTERS_CONDITIONS_NAMESPACE}.isNotEmpty`;
export const FILTERS_CONDITIONS_EQUAL = `${FILTERS_CONDITIONS_NAMESPACE}.isEqualTo`;
export const FILTERS_CONDITIONS_NOT_EQUAL = `${FILTERS_CONDITIONS_NAMESPACE}.isNotEqualTo`;
export const FILTERS_CONDITIONS_BEGINS_WITH = `${FILTERS_CONDITIONS_NAMESPACE}.beginsWith`;
export const FILTERS_CONDITIONS_ENDS_WITH = `${FILTERS_CONDITIONS_NAMESPACE}.endsWith`;
export const FILTERS_CONDITIONS_CONTAINS = `${FILTERS_CONDITIONS_NAMESPACE}.contains`;
export const FILTERS_CONDITIONS_NOT_CONTAIN = `${FILTERS_CONDITIONS_NAMESPACE}.doesNotContain`;
export const FILTERS_CONDITIONS_BY_VALUE = `${FILTERS_CONDITIONS_NAMESPACE}.byValue`;
export const FILTERS_CONDITIONS_GREATER_THAN = `${FILTERS_CONDITIONS_NAMESPACE}.greaterThan`;
export const FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL = `${FILTERS_CONDITIONS_NAMESPACE}.greaterThanOrEqualTo`;
export const FILTERS_CONDITIONS_LESS_THAN = `${FILTERS_CONDITIONS_NAMESPACE}.lessThan`;
export const FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL = `${FILTERS_CONDITIONS_NAMESPACE}.lessThanOrEqualTo`;
export const FILTERS_CONDITIONS_BETWEEN = `${FILTERS_CONDITIONS_NAMESPACE}.isBetween`;
export const FILTERS_CONDITIONS_NOT_BETWEEN = `${FILTERS_CONDITIONS_NAMESPACE}.isNotBetween`;
export const FILTERS_CONDITIONS_AFTER = `${FILTERS_CONDITIONS_NAMESPACE}.after`;
export const FILTERS_CONDITIONS_BEFORE = `${FILTERS_CONDITIONS_NAMESPACE}.before`;
export const FILTERS_CONDITIONS_TODAY = `${FILTERS_CONDITIONS_NAMESPACE}.today`;
export const FILTERS_CONDITIONS_TOMORROW = `${FILTERS_CONDITIONS_NAMESPACE}.tomorrow`;
export const FILTERS_CONDITIONS_YESTERDAY = `${FILTERS_CONDITIONS_NAMESPACE}.yesterday`;

export const FILTERS_DIVS_FILTER_BY_CONDITION = `${FILTERS_NAMESPACE}labels.filterByCondition`;
export const FILTERS_DIVS_FILTER_BY_VALUE = `${FILTERS_NAMESPACE}labels.filterByValue`;

export const FILTERS_LABELS_CONJUNCTION = `${FILTERS_NAMESPACE}labels.conjunction`;
export const FILTERS_LABELS_DISJUNCTION = `${FILTERS_NAMESPACE}labels.disjunction`;

export const FILTERS_VALUES_BLANK_CELLS = `${FILTERS_NAMESPACE}values.blankCells`;

export const FILTERS_BUTTONS_SELECT_ALL = `${FILTERS_NAMESPACE}buttons.selectAll`;
export const FILTERS_BUTTONS_CLEAR = `${FILTERS_NAMESPACE}buttons.clear`;
export const FILTERS_BUTTONS_OK = `${FILTERS_NAMESPACE}buttons.ok`;
export const FILTERS_BUTTONS_CANCEL = `${FILTERS_NAMESPACE}buttons.cancel`;

export const FILTERS_BUTTONS_PLACEHOLDER_SEARCH = `${FILTERS_NAMESPACE}buttons.placeholder.search`;
export const FILTERS_BUTTONS_PLACEHOLDER_VALUE = `${FILTERS_NAMESPACE}buttons.placeholder.value`;
export const FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE = `${FILTERS_NAMESPACE}buttons.placeholder.secondValue`;
