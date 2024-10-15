import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RandomUserComponent } from './random-user.component';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { of } from 'rxjs';

describe('RandomUserComponent', () => {
  let component: RandomUserComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<RandomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomUserComponent],
      // imports: [HttpClientModule],
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get(url: string) {
              return of({ name: 'Toto' });
            }
          }
        }
      ]
    })
      .compileComponents();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Version 1 : on attend grace à Zone.js et la zone waitForAsync (qui va appeler le done de Jasmine
  // quand tous les callbacks ont été exécutés)
  // beforeEach(waitForAsync(() => {
  //   fixture = TestBed.createComponent(RandomUserComponent);
  //   component = fixture.componentInstance;
  //   nativeElement = fixture.nativeElement;
  //   fixture.autoDetectChanges();
  // }));

  // it('should display Leanne Graham with real request', () => {
  //   expect(nativeElement.textContent).toContain('Leanne Graham');
  // });

  // Version 2 : idem avec await fixture.whenStable();
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RandomUserComponent);
  //   component = fixture.componentInstance;
  //   nativeElement = fixture.nativeElement;
  //   fixture.detectChanges();
  // });

  // it('should display Leanne Graham with real request', async () => {
  //   await fixture.whenStable();
  //   fixture.detectChanges();

  //   expect(nativeElement.textContent).toContain('Leanne Graham');
  // });


  // Version 3: avec spyOn
  beforeEach(() => {
    // const httpClient = TestBed.inject(HttpClient);
    // spyOn(httpClient, 'get').and.returnValue(of({ name: 'Toto' }))

    fixture = TestBed.createComponent(RandomUserComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should display Leanne Graham with real request', async () => {
    expect(nativeElement.textContent).toContain('Toto');
  });
});
