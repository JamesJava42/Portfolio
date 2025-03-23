import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../core/services/resume.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [AsyncPipe, TimelineComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education$!: Observable<any>;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.education$ = this.resumeService.getResumeData().pipe(
      map(data => [data.education])
    );
  }
}