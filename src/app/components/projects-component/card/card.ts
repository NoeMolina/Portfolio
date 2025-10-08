import { Component, Input } from '@angular/core';
import {Project} from '../projects.service'

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() project!: Project;
}
