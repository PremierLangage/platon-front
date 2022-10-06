export interface LiveAction {
    id: number;
    env: string;
}

export interface Live {
    id: number;
    env: string;
    name: string;
    type: string;
    content: Record<string, any>;
}
