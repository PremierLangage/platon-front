import { requireNonNull, requireNonNullArray } from "@platon/shared/utils";

export class Paths {

    /**
     * Returns the extension of the path (in lowercase), from the last '.' to end of string in the last portion of the path.
     * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
     * @param path the path to evaluate
     * @returns the extension in lowercase (without a dot) or an empty string.
     */
    static extname(path: string) {
        requireNonNull(path, '"path" is required');

        const base = Paths.basename(path);
        if (!base) {
            return base;
        }
        if (base.startsWith('.')) {
            return '';
        }
        const dotIndex = base.lastIndexOf('.');
        if (dotIndex === -1) {
            return '';
        }
        return base.substring(dotIndex + 1).toLowerCase();
    }

    /**
     * Returns the directory name of a path. Similar to the Unix dirname command.
     * @param path the path to evaluate
     */
    static dirname(path: string) {
        requireNonNull(path, '"path" is required');

        path = path.replace(/\\/g, '/');
        let head = path.slice(0, path.lastIndexOf('/') + 1);
        if (head && !head.match(/^\/*$/g)) {
            head = head.replace(/\/*$/g, '');
        }
        return head;
    }

    /**
     * Returns the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     * @param the path to evaluate.
     */
    static basename(path: string) {
        requireNonNull(path, '"path" is required');

        path = path.replace(/\\/g, '/');
        return path.slice(path.lastIndexOf('/') + 1, path.length);
    }

    /**
     * Join several segments into one path
     * @param parts: the segments
     * @param sep: path separator
     */
    static join(parts: string[], sep: string = '') {
        requireNonNullArray(parts, '"parts" is required');

        sep = sep || '/';
        const separator = sep || '/';
        const replace   = new RegExp(separator + '{1,}', 'g');
        return parts.join(separator).replace(replace, separator);
    }

    // https://github.com/jonschlinkert/normalize-path/blob/master/index.js
    /**
     * Normalize slashes in a file path to be posix/unix-like forward slashes.
     * Also condenses repeat slashes to a single slash and removes and trailing slashes, unless disabled.
     * @param path path to normalize
     * @param stripTrailing remove trailing slashes
     */
    static normalize(path: string, stripTrailing: boolean = true) {
        if (typeof path !== 'string') {
            throw new TypeError('expected path to be a string');
        }

        if (path === '\\' || path === '/') {
            return '/';
        }

        const len = path.length;
        if (len <= 1) {
            return path;
        }

        // ensure that win32 namespaces has two leading slashes, so that the path is
        // handled properly by the win32 version of path.parse() after being normalized
        // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
        let prefix = '';
        if (len > 4 && path[3] === '\\') {
            const ch = path[2];
            if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
                path = path.slice(2);
                prefix = '//';
            }
        }
        const segs = path.split(/[/\\]+/);
        if (stripTrailing !== false && segs[segs.length - 1] === '') {
            segs.pop();
        }
        return prefix + segs.join('/');
    }

    static isAbsolutePath(path: string): boolean {
        return !!path && path[0] === '/';
    }
}
