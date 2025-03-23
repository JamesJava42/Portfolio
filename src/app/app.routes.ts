// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { SkillsComponent } from './features/skills/skills.component';
import { EducationComponent } from './features/education/education.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Rakesh Reddy | Full Stack Developer'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects | Rakesh Reddy'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience | Rakesh Reddy'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Technical Skills | Rakesh Reddy'
  },
  {
    path: 'education',
    component: EducationComponent,
    title: 'Education | Rakesh Reddy'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Rakesh Reddy'
  },
  {
    path: '**',
    redirectTo: ''
  }
];