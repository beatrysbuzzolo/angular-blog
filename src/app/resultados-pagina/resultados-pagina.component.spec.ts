import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPaginaComponent } from './resultados-pagina.component';

describe('ResultadosPaginaComponent', () => {
  let component: ResultadosPaginaComponent;
  let fixture: ComponentFixture<ResultadosPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
