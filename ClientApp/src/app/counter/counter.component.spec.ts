import ***REMOVED*** async, ComponentFixture, TestBed ***REMOVED*** from '@angular/core/testing';

import ***REMOVED*** CounterComponent ***REMOVED*** from './counter.component';

describe('CounterComponent', () => ***REMOVED***
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => ***REMOVED***
    TestBed.configureTestingModule(***REMOVED***
      declarations: [ CounterComponent ]
***REMOVED***)
    .compileComponents();
***REMOVED***));

  beforeEach(() => ***REMOVED***
    fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
***REMOVED***);

  it('should display a title', async(() => ***REMOVED***
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Counter');
***REMOVED***));

  it('should start with count 0, then increments by 1 when clicked', async(() => ***REMOVED***
    const countElement = fixture.nativeElement.querySelector('strong');
    expect(countElement.textContent).toEqual('0');

    const incrementButton = fixture.nativeElement.querySelector('button');
    incrementButton.click();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('1');
***REMOVED***));
***REMOVED***);
