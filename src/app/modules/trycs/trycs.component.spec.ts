import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrycsComponent } from './trycs.component';

describe('TrycsComponent', () => {
  let component: TrycsComponent;
  let fixture: ComponentFixture<TrycsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrycsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrycsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
