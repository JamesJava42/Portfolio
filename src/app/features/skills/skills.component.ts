// src/app/features/skills/skills.component.ts
import { Component, OnInit } from '@angular/core';
import { ResumeService, Resume } from '../../core/services/resume.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SkillChipComponent } from '../../shared/components/skill-chip/skill-chip.component';
import { of } from 'rxjs'; // Import of

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AsyncPipe, SkillChipComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills$!: Observable<Record<string, string[]>>;
  skillCategories$!: Observable<string[]>;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.skills$ = this.resumeService.getResumeData().pipe(
      map((resume: Resume) => {
        if (!resume.skills) {
          throw new Error('Skills data not found in resume');
        }
        return resume.skills;
      }),
      catchError((error) => {
        console.error('Error loading skills:', error);
        return of({}); // Return an empty object in case of error
      })
    );

    this.skillCategories$ = this.skills$.pipe(
      map((skills) => {
        try {
          return Object.keys(skills);
        } catch (error) {
          console.error('Error parsing skills:', error);
          return [];
        }
      }),
      catchError(() => of([])) // Return an empty array in case of error
    );
  }
}