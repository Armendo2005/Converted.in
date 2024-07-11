import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSideDetailsComponent } from './internal-side-details.component';

describe('InternalSideDetailsComponent', () => {
  let component: InternalSideDetailsComponent;
  let fixture: ComponentFixture<InternalSideDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalSideDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalSideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
