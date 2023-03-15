import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService, IdeService } from '@cisstech/nge-ide/core';
import { RemoteFileSystem } from './editor';
import { FileTree } from '@platon/feature/workspace';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

    private repository!: FileTree;

    constructor(
        private readonly ide: IdeService,
        private readonly route: ActivatedRoute,
        private readonly http: HttpClient,
        private readonly fileService: FileService
    ) { }

    ngOnInit(): void {
        this.ide.onAfterStart(() => {
            this.route.data.subscribe(data => {
                this.repository = data['tree']
                this.fileService.registerProvider(new RemoteFileSystem(this.http, this.repository));
                this.fileService.registerFolders({ name: this.repository.directory, uri: monaco.Uri.parse('file:///')})
            })
        })
    }

}
