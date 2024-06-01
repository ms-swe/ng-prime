import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGraphComponent } from './my-graph.component';

describe('MyGraphComponent', () => {
  let component: MyGraphComponent;
  let fixture: ComponentFixture<MyGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
