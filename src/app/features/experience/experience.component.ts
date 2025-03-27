import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../core/services/resume.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    AsyncPipe,
    
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    CommonModule
  ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience$!: Observable<any>;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.experience$ = this.resumeService.getResumeData().pipe(
      map(data => data.experience.map((exp: any) => ({
        ...exp,
        icon: 'work_outline',
        skills: exp.skills || [],
        description: exp.description || []
      })))
    );
  }
}