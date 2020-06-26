/*
 * Testing an Angular 2 component with Input, Output and HostBinding
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-inputs-outputs
 */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { <%= classify(name)Component %> } from './<%= name %>.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('<%= classify(name)Component %>', () => {
    let fixture: ComponentFixture<<%= classify(name)Component %>>;
    let component: <%= classify(name)Component %>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [<%= classify(name)Component %>],
            imports: [CommonModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(<%= classify(name)Component %>);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
