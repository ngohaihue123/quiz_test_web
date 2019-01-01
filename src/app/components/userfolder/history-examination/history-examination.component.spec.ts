import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryExaminationComponent } from './history-examination.component';

describe('HistoryExaminationComponent', () => {
  let component: HistoryExaminationComponent;
  let fixture: ComponentFixture<HistoryExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
