import { Injectable, Inject,PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

export interface PersonalInformation {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Project {
  name: string;
  description: string[];
  techStack?: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface Experience {
  title: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  university: string;
  gpa: string;
  duration: string;
}

export interface Resume {
  personalInformation: PersonalInformation;
  aboutMe: string;
  projects: Project[];
  experience: Experience[];
  skills: Record<string, string[]>;
  education: Education;
  certifications: string[];
}

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private readonly DATA_URL = 'assets/data/resume-data.json';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getResumeData(): Observable<Resume> {
    // Ensure data fetching only happens in the browser
    if (!isPlatformBrowser(this.platformId)) {
      console.warn('Skipping resume data fetch during SSR');
      return of({
        personalInformation: { name: '', email: '', linkedin: '', github: '', website: '' },
        aboutMe: '',
        projects: [],
        experience: [],
        skills: {},
        education: { degree: '', university: '', gpa: '', duration: '' },
        certifications: []
      });
    }

    return this.http.get<Resume>(this.DATA_URL).pipe(
      retry(3), // Retries the request 3 times in case of a transient error
      catchError(error => {
        console.error('Error loading resume data:', error);
        return of({
          personalInformation: { name: '', email: '', linkedin: '', github: '', website: '' },
          aboutMe: '',
          projects: [],
          experience: [],
          skills: {},
          education: { degree: '', university: '', gpa: '', duration: '' },
          certifications: []
        });
      })
    );
  }
}
