import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, PartialObserver, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Diagnostic, DiagnosticSeverity, DiagnosticGroup } from './diagnostic';

@Injectable()
export class DiagnosticService {

    private _count = 0;
    private _infos = 0;
    private _hints = 0;
    private _errors = 0;
    private _warnings = 0;

    private readonly diagnostics: {
        [k: string]: Diagnostic[]
    } = {};

    private readonly subject = new BehaviorSubject<{
        [k: string]: Diagnostic[]
    }>({});


    get count(): number {
        return this._count;
    }

    get infos(): number {
        return this._infos;
    }

    get hints(): number {
        return this._hints;
    }

    get errors(): number {
        return this._errors;
    }

    get warnings(): number {
        return this._warnings;
    }

    setDiagnostics(uri: string, items: Diagnostic[]) {
        this.diagnostics[uri] = items;
        this._count = this._errors = this._hints = this._warnings = 0;
        Object.keys(this.diagnostics).forEach(k => {
            this.diagnostics[k].forEach(v => {
                this._count++;
                switch (v.severity) {
                    case DiagnosticSeverity.Info:
                        this._infos++;
                        break;
                    case DiagnosticSeverity.Hint:
                        this._hints++;
                        break;
                    case DiagnosticSeverity.Error:
                        this._errors++;
                        break;
                    case DiagnosticSeverity.Warning:
                        this._warnings++;
                        break;
                }
            });
        });
        this.subject.next(this.diagnostics);
    }

    asObservable(uri: string): Observable<Diagnostic[]> {
        return this.subject.asObservable().pipe(
            filter(diagnostics => uri in diagnostics && diagnostics[uri] != null),
            map(diagnostics => diagnostics[uri] || [])
        );
    }

    asObservableAll(): Observable<DiagnosticGroup[]>  {
        return this.subject.asObservable().pipe(
            map(diagnostics => {
                return Object.keys(diagnostics).map(k => {
                    return {
                        uri: k,
                        diagnostics: diagnostics[k]
                    };
                }).filter(group => group.diagnostics.length > 0);
            }),
        );
    }

    subscribe(uri: string, observer: PartialObserver<Diagnostic[]>): Subscription {
        return this.asObservable(uri).subscribe(observer);
    }

    subscribeAll(observer: PartialObserver<DiagnosticGroup[]>): Subscription {
        return this.asObservableAll().subscribe(observer);
    }

}
