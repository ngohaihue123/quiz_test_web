import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryexamComponent } from './historyexam.component';

describe('HistoryexamComponent', () => {
  let component: HistoryexamComponent;
  let fixture: ComponentFixture<HistoryexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
