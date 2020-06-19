import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsRGComponent } from './shop-details-rg.component';

describe('ShopDetailsRGComponent', () => {
  let component: ShopDetailsRGComponent;
  let fixture: ComponentFixture<ShopDetailsRGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsRGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsRGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
