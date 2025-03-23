import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../core/services/resume.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resumeData$!: Observable<any>;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeData$ = this.resumeService.getResumeData();
  }
}