import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserexamComponent } from './userexam.component';

describe('UserexamComponent', () => {
  let component: UserexamComponent;
  let fixture: ComponentFixture<UserexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
