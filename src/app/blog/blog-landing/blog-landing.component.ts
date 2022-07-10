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
    { viewClasses: 'is-hidden-touch is-flex-tablet', displayInColumn: false, titleClasses: 'is-size-2' },
    { viewClasses: 'is-flex is-hidden-tablet', displayInColumn: true, titleClasses: 'is-size-4' }
  ];

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
  }

}
