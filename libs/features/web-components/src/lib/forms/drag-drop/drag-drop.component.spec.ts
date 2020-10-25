/*
 * Testing an Angular 2 component with Input, Output and HostBinding
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-inputs-outputs
 */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DragDropComponent } from './drag-drop.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('DragDropComponent', () => {
    let fixture: ComponentFixture<DragDropComponent>;
    let component: DragDropComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DragDropComponent],
            imports: [CommonModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DragDropComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
