import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer-component',
  imports: [MatIconModule, CommonModule],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.scss'
})
export class FooterComponentComponent {

}
