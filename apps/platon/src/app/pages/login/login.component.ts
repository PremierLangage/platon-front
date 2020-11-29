import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthUser, InMemoryUserDb } from '@platon/core/auth';
import { DialogService } from '@platon/shared/ui';
import { ConfigService, IntroService } from '@platon/shared/utils';
import { map } from 'rxjs/operators';
import { FormDemo, FormDemoComponent } from './form-demo/form-demo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
    email = '';
    password = '';
    user?: AuthUser;
    connecting = false;

    get isServerRunning() {
        return this.configService.isServerRunning;
    }

    constructor(
        private readonly router: Router,
        private readonly dialog: DialogService,
        private readonly authService: AuthService,
        private readonly introService: IntroService,
        private readonly configService: ConfigService,
        private readonly inMemoryUserDb: InMemoryUserDb,
    ) {}

    ngOnInit() {
        this.authService.ready().then(user => {
            this.setUser(user);
        });
    }

    async ngAfterViewInit() {
        if (!this.configService.isServerRunning) {
            const intro = await this.introService.create();
            intro.setOptions({
                scrollToElement: true,
                disableInteraction: true,
                showButtons: true,
                showBullets: false,
                showStepNumbers: false,
                doneLabel: 'Compris !',
                steps: [
                    {
                        intro: `Cliquez pour lancer une version de démonstration de PLaTon`,
                        element: '#intro-demo'
                    }
                ],
            })
            intro.addHints()
            intro.start();
        }
    }

    signIn() {
        if (this.user && this.user.email === this.email) {
            this.router.navigateByUrl('/dashboard', { replaceUrl: true });
            return;
        }
        this.signInWithEmailAndPassword();
    }

    showDemoForm() {
        this.dialog.open({
            component: FormDemoComponent,
            config: {
                width: '420px',
            }
        }).afterClosed().subscribe(async data => {
            if (data) {
                const form = data as FormDemo;
                const user = await this.inMemoryUserDb.read().pipe(
                    // maybe we should shuffle the arr
                    map(arr => arr.find(e => {
                        return e.role === form.role &&
                        // test isAdmin only if form.role is Teacher
                        (form.role === 'Teacher' ? e.isAdmin === form.admin : !e.isAdmin)
                    }))
                ).toPromise();
                this.setUser(user);
                this.signInWithEmailAndPassword();
            }
        });
    }

    private setUser(user: AuthUser | undefined) {
        this.user = user;
        if (user) {
            this.email = user.email;
            this.password = '******';
        }
    }

    private signInWithEmailAndPassword() {
        this.connecting = true;
        this.authService.signInWithEmailAndPassword(this.email, this.password).then(() => {
            this.connecting = false;
            this.router.navigateByUrl('/dashboard', { replaceUrl: true });
        }).catch(() => {
            this.dialog.snack('Une erreur est survenue lors de la connexion !');
            this.connecting = false;
        });
    }
}
