import ***REMOVED*** browser, by, element ***REMOVED*** from 'protractor';

export class AppPage ***REMOVED***
  navigateTo() ***REMOVED***
    return browser.get('/');
***REMOVED***

  getMainHeading() ***REMOVED***
    return element(by.css('app-root h1')).getText();
***REMOVED***
***REMOVED***
