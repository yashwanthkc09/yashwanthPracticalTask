import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodetaskComponent } from './nodetask.component';

describe('NodetaskComponent', () => {
  let component: NodetaskComponent;
  let fixture: ComponentFixture<NodetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
