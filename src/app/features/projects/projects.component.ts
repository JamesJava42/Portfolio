import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../core/services/resume.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    ProjectCardComponent
  ],  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$!: Observable<any>;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.projects$ = this.resumeService.getResumeData().pipe(
      map(data => data.projects)
    );
  }
}