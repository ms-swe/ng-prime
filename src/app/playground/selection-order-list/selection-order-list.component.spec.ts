import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionOrderListComponent } from './selection-order-list.component';

describe('SelectionOrderListComponent', () => {
  let component: SelectionOrderListComponent;
  let fixture: ComponentFixture<SelectionOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionOrderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
