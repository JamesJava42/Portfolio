import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../core/services/resume.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [AsyncPipe, TimelineComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience$!: Observable<any>;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.experience$ = this.resumeService.getResumeData().pipe(
      map(data => data.experience)
    );
  }
}