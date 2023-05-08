import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhycsComponent } from './whycs.component';

describe('WhycsComponent', () => {
  let component: WhycsComponent;
  let fixture: ComponentFixture<WhycsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhycsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhycsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
