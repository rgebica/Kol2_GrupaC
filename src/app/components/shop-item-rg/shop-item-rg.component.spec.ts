import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemRGComponent } from './shop-item-rg.component';

describe('ShopItemRGComponent', () => {
  let component: ShopItemRGComponent;
  let fixture: ComponentFixture<ShopItemRGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemRGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemRGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
