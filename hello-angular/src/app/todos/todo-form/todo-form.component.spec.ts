import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<TodoFormComponent>;
  let originalConsoleError!: any;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = function (message?: any, ...optionalParams: any[]): void {
      const params = optionalParams ? `\nParams: ${optionalParams}` : '';
      fail(`Test contained console error:\n${message}${params}`);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo and emit on submit', async () => {
    component.todo = 'My Todo';
    fixture.detectChanges();

    await fixture.whenStable();

    expect(nativeElement.querySelector('input')?.value).toBe('My Todo');

    const spy = jasmine.createSpy();
    component.onAddTodo.subscribe(spy);

    const formEl = nativeElement.querySelector('form');
    formEl?.dispatchEvent(new SubmitEvent('submit', { bubbles: true }));

    expect(spy).toHaveBeenCalledOnceWith('My Todo');
  })
});
