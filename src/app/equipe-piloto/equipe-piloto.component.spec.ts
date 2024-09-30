import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipePilotoComponent } from './equipe-piloto.component';

describe('EquipePilotoComponent', () => {
  let component: EquipePilotoComponent;
  let fixture: ComponentFixture<EquipePilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipePilotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipePilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
