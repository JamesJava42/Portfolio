import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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

  constructor(private http: HttpClient) { }

  getResumeData(): Observable<Resume> {
    return this.http.get<Resume>(this.DATA_URL).pipe(
      map(data => this.validateResume(data)),
      catchError(error => {
        console.error('Error loading resume data:', error);
        // Return empty fallback data
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
  private validateResume(data: unknown): Resume {
    const requiredKeys = [
      'personalInformation',
      'aboutMe',
      'projects',
      'experience',
      'skills',
      'education',
      'certifications'
    ];

    if (!data || typeof data !== 'object' || !requiredKeys.every(key => key in data)) {
      throw new Error('Invalid resume data structure');
    }

    return data as Resume;
  }
}