/*
 * Testing an Angular 2 component with Input, Output and HostBinding
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-inputs-outputs
 */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CriteriaGridComponent } from './criteria-grid.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('CriteriaGridComponent', () => {
    let fixture: ComponentFixture<CriteriaGridComponent>;
    let component: CriteriaGridComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CriteriaGridComponent],
            imports: [CommonModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CriteriaGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
