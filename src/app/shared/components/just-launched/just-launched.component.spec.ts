import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustLaunchedComponent } from './just-launched.component';

describe('JustLaunchedComponent', () => {
  let component: JustLaunchedComponent;
  let fixture: ComponentFixture<JustLaunchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustLaunchedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JustLaunchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
