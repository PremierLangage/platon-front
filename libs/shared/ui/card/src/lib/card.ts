export interface CardItem {
    title?: string;
    description?: string;
    path?: string | any[];
    tags?: CardItemTags[];
}

export interface CardItemTags {
    color?: CardItemTagColor;
    icon?: string;
    text?: string;
}

export declare type CardDisplay =
    | 'row'
    | 'list';

export declare type CardItemTagColor =
    | 'success'
    | 'processing'
    | 'error'
    | 'warning'
    | 'default';