export interface CardItem {
    title?: string;
    description?: string;
    tags?: CardItemTags[];
}

export interface CardItemTags {
    type?: string;
    icon?: string;
    text?: string;
}

export declare type CardDisplay =
    | 'row'
    | 'list';
