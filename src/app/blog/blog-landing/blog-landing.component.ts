import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.css']
})
export class BlogLandingComponent implements OnInit {

  links$ = this.scully.available$.pipe(
    map(routes => routes.filter((route: ScullyRoute) => route.route.startsWith('/blog/')))
  );

  respOptions = [
    { viewClasses: 'is-hidden is-flex-tablet', displayInColumn: false, titleClasses: 'is-size-3' },
    { viewClasses: 'is-flex-tablet is-hidden', displayInColumn: true, titleClasses: '' }
  ];

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
  }

}
