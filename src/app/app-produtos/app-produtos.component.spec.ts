import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProdutosComponent } from './app-produtos.component';

describe('AppProdutosComponent', () => {
  let component: AppProdutosComponent;
  let fixture: ComponentFixture<AppProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
