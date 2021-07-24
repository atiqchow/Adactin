import ***REMOVED*** AppPage ***REMOVED*** from './app.po';

describe('App', () => ***REMOVED***
  let page: AppPage;

  beforeEach(() => ***REMOVED***
    page = new AppPage();
***REMOVED***);

  it('should display welcome message', () => ***REMOVED***
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('Hello, world!');
***REMOVED***);
***REMOVED***);
