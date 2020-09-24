/*
 * Testing an Angular 2 component with Input, Output and HostBinding
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-inputs-outputs
 */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { InputBoxComponent } from './input-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('InputBoxComponent', () => {
    let fixture: ComponentFixture<InputBoxComponent>;
    let component: InputBoxComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputBoxComponent],
            imports: [CommonModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
