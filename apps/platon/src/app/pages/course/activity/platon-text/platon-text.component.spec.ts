import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatonTextComponent } from './platon-text.component';

describe('PlatonTextComponent', () => {
  let component: PlatonTextComponent;
  let fixture: ComponentFixture<PlatonTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatonTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

