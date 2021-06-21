import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ActivityService {

    constructor(
        private readonly http: HttpClient,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    readonly ROOT_URL = '';
    posts : any;

    loadExercise() {
        this.posts = this.http.get(this.ROOT_URL.)
    }

    //loadActivity() {
    //    const { id } = this.activatedRoute.snapshot.params;
    //    alert(id);
    //}
}

