import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriSelectButtonComponent } from './tri-select-button.component';

describe('TriSelectButtonComponent', () => {
  let component: TriSelectButtonComponent;
  let fixture: ComponentFixture<TriSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriSelectButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
