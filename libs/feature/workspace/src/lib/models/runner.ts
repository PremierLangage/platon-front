export interface Platon {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    title: string;
    text: string;
    form: string;
    general_feedback: string;
}

export interface Runner {}
