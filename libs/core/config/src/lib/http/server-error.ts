export class ServerError {

    constructor(
        public readonly title: string,
        public readonly message: string,
        public readonly trace?: string
    ) {}


    public static fromError(error: any) {
        const title = error.status ? `Error ${error.status}` : 'Unexpected error';
        let trace: string | undefined;
        let message = '';
        try {
            let serverError = error.error;
            if (typeof(error.error) === 'string') {
                serverError = JSON.parse(error.error);
            }
            message = serverError.message;
            trace = serverError.trace;
        } catch (e) {
            message = error.message;
        }
        return new ServerError(title, message, trace);
    }

    public toString(): string {
        return `${this.title}: ${this.truncate(this.message, 300)}`;
    }

    private truncate(str: string, length: number, ending?: string) {
        if (length == null) {
            length = 100;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    }
}
