import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  isHome$ = this.headerService.isHome();
  projects$ = this.isHome$.pipe(
    mergeMap(atHome => this.projectsService.getProjects(atHome))
  );

  respOptions = [
    { viewClasses: "is-hidden is-flex-tablet", titleClasses: "is-size-5", useSmallerHeadings: false, displayInColumn: false},
    { viewClasses: "is-flex is-hidden-tablet", titleClasses: "", useSmallerHeadings: true, displayInColumn: true }
  ];

  constructor(private projectsService: ProjectsService, private headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
