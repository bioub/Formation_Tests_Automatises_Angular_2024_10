import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value when calling handleClick', () => {
    const spy = jasmine.createSpy();

    component.countChange.subscribe(spy);
    component.count = 10;
    component.handleClick();

    expect(spy).toHaveBeenCalledOnceWith(11);
  })

  it('should emit value when clicked', () => {
    const spy = jasmine.createSpy();
    component.countChange.subscribe(spy);
    component.count = 10;
    fixture.detectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;

    const buttonEl = nativeElement.querySelector('button');

    // Simuler un event
    buttonEl?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(spy).toHaveBeenCalledOnceWith(11);
  })
});
