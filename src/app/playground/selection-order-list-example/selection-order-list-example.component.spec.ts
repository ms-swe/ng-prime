import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionOrderListExampleComponent } from './selection-order-list-example.component';

describe('SelectionOrderListExampleComponent', () => {
  let component: SelectionOrderListExampleComponent;
  let fixture: ComponentFixture<SelectionOrderListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionOrderListExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionOrderListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
