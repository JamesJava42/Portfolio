import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { ResumeService, Project } from '../../core/services/resume.service'; // Adjust the path

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> | undefined;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.resumeService.getResumeData().subscribe(resume => {
      this.projects$ = of(resume.projects);
    });
  }
}