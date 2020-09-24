/*
 * Testing an Angular 2 component with Input, Output and HostBinding
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-inputs-outputs
 */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PanelComponent } from './panel.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('PanelComponent', () => {
    let fixture: ComponentFixture<PanelComponent>;
    let component: PanelComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PanelComponent],
            imports: [CommonModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});