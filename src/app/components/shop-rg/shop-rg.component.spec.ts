import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRGComponent } from './shop-rg.component';

describe('ShopRGComponent', () => {
  let component: ShopRGComponent;
  let fixture: ComponentFixture<ShopRGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopRGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopRGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
