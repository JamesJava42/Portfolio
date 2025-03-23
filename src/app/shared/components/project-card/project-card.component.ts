import { Component, Input } from '@angular/core';
import { Project } from '../../../core/services/resume.service';
import { MatCardModule } from '@angular/material/card';
import { SkillChipComponent } from '../skill-chip/skill-chip.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    SkillChipComponent
  ],  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  
  get techTags(): string[] {
    const techKeywords = ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Spring Boot', 'Angular'];
    return this.project.description
      .join(' ')
      .match(new RegExp(techKeywords.join('|'), 'gi')) || [];
  }
}