import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/core/services/bio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bio$ = this.bioService.getBio();

  respOptions = [
    { viewClasses: "is-hidden-touch is-flex-tablet", headingClass: "is-size-1", useSmallerHeadings: false },
    { viewClasses: "is-flex is-hidden-tablet", headingClass: "is-size-4", useSmallerHeadings: true }
  ];

  constructor(private bioService: BioService) { }

  ngOnInit(): void {
  }

}
