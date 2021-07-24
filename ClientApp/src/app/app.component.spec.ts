import ***REMOVED*** TestBed ***REMOVED*** from '@angular/core/testing';
import ***REMOVED*** RouterTestingModule ***REMOVED*** from '@angular/router/testing';
import ***REMOVED*** AppComponent ***REMOVED*** from './app.component';

describe('AppComponent', () => ***REMOVED***
  beforeEach(async () => ***REMOVED***
    await TestBed.configureTestingModule(***REMOVED***
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
***REMOVED***).compileComponents();
***REMOVED***);

  it('should create the app', () => ***REMOVED***
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
***REMOVED***);

  it(`should have as title 'ClientApp'`, () => ***REMOVED***
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ClientApp');
***REMOVED***);

  it('should render title', () => ***REMOVED***
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ClientApp app is running!');
***REMOVED***);
***REMOVED***);
