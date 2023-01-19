import { TestBed } from '@angular/core/testing';
import { JarvisControlModule } from '@trungk18/jira-control/jarvis-control.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('JiraControlModule', () => {
  let module: JarvisControlModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        JarvisControlModule,
        ReactiveFormsModule
      ]
    });
    module = TestBed.inject(JarvisControlModule);
  });

  it('should have Jira Control Module', () => {
    expect(module).toBeTruthy();
  });
});
