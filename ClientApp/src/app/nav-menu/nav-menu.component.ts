import ***REMOVED*** Component ***REMOVED*** from '@angular/core';

@Component(***REMOVED***
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
***REMOVED***)
export class NavMenuComponent ***REMOVED***
  isExpanded = false;

  collapse() ***REMOVED***
    this.isExpanded = false;
***REMOVED***

  toggle() ***REMOVED***
    this.isExpanded = !this.isExpanded;
***REMOVED***
***REMOVED***
