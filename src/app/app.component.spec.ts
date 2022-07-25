import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const dispatchFakeEvent = (
  element: EventTarget,
  type: string,
  bubbles: boolean = false
): void => {
  const event = document.createEvent('event');
  event.initEvent(type, bubbles, false);
  element.dispatchEvent(event);
};

const markFieldAsTouched = (element: DebugElement) => {
  dispatchFakeEvent(element.nativeElement, 'blur');
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  const setup = async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should render a component with testing angular', async () => {
    await setup();

    expect(component).toBeTruthy();
  });

  it('should show erro message required with testing angular', async () => {
    await setup();

    const appComponent: DebugElement = fixture.debugElement;

    const input = appComponent.query(By.css('input'));
    markFieldAsTouched(input);

    fixture.detectChanges();

    const error = appComponent.query(By.css('p')).nativeElement;

    expect(error).toBeTruthy();
    expect(error).toHaveTextContent('Campo obrigatorio');
  });
});
