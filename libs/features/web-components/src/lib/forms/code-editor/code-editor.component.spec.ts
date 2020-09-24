/*
 * Testing an Angular 2 component with Input, Output and HostBinding
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-inputs-outputs
 */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CodeEditorComponent } from './code-editor.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('CodeEditorComponent', () => {
    let fixture: ComponentFixture<CodeEditorComponent>;
    let component: CodeEditorComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CodeEditorComponent],
            imports: [CommonModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CodeEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
