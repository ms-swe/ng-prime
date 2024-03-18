import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySearchComponent } from './my-search.component';

describe('MySearchComponent', () => {
  let component: MySearchComponent;
  let fixture: ComponentFixture<MySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
