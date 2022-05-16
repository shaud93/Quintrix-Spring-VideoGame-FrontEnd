import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVideogameComponent } from './create-videogame.component';

describe('CreateVideogameComponent', () => {
  let component: CreateVideogameComponent;
  let fixture: ComponentFixture<CreateVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVideogameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
