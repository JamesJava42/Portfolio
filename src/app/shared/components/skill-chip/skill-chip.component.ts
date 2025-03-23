import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-chip',
  standalone: true,
  templateUrl: './skill-chip.component.html',
  styleUrls: ['./skill-chip.component.scss']
})
export class SkillChipComponent {
  @Input() skill = '';
  
  get skillClass(): string {
    const skillMap: { [key: string]: string } = {
      'AWS': 'aws',
      'GCP': 'gcp',
      'Kubernetes': 'kubernetes',
      'Docker': 'docker',
      'Spring Boot': 'spring',
      'Angular': 'angular'
    };
    return skillMap[this.skill] || 'default';
  }
}