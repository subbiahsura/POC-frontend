import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletingProfileDailogComponent } from './completing-profile-dailog.component';

describe('CompletingProfileDailogComponent', () => {
  let component: CompletingProfileDailogComponent;
  let fixture: ComponentFixture<CompletingProfileDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletingProfileDailogComponent]
    });
    fixture = TestBed.createComponent(CompletingProfileDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
