import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { Observable, of } from 'rxjs';

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

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
export class ProjectsComponent {
  projects$: Observable<Project[]> = of([
    {
      title: 'Angular Portfolio',
      description: 'A modern and responsive personal portfolio built with Angular and Tailwind CSS.',
      link: 'https://your-portfolio-link.com',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'Firebase']
    },
    {
      title: 'E-commerce App',
      description: 'A high-performance e-commerce web app with real-time features.',
      link: 'https://your-ecommerce-app.com',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB']
    },
    {
      title: 'ML Dashboard',
      description: 'A dashboard visualizing ML models and performance metrics.',
      link: 'https://your-ml-dashboard.com',
      technologies: ['Python', 'TensorFlow', 'Flask', 'D3.js']
    }
  ]);
}
