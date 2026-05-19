import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { projects } from './projects.service';
import { Card } from './card/card';

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [Card],
  templateUrl: './projects-component.html',
  styleUrls: ['./projects-component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);

  projects = projects;
  currentIndex = 0;
  translateX = 0;
  slideWidth = 380;
  slidesToShow = 1;

  private autoSlideInterval?: any;

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {

      this.updateSlidesToShow();

      this.startAutoSlide();

      window.addEventListener('resize', this.updateSlidesToShow.bind(this));
    }
  }

  ngOnDestroy() {

    this.stopAutoSlide();

    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.updateSlidesToShow.bind(this));
    }
  }

  updateSlidesToShow() {

    if (!isPlatformBrowser(this.platformId)) return;

    const width = window.innerWidth;

    if (width >= 1200) {
      this.slidesToShow = 3;
      this.slideWidth = 380;

    } else if (width >= 768) {
      this.slidesToShow = 2;
      this.slideWidth = 380;

    } else {
      this.slidesToShow = 1;
      this.slideWidth = 350;
    }

    this.updateTransform();
  }

  get maxIndex(): number {
    return Math.max(0, this.projects.length - this.slidesToShow);
  }

  get indicators(): number[] {
    return Array(this.maxIndex + 1).fill(0).map((_, i) => i);
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.updateTransform();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTransform();
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateTransform();
  }

  private updateTransform() {
    this.translateX = -this.currentIndex * this.slideWidth;
  }

  private startAutoSlide() {

    this.autoSlideInterval = setInterval(() => {

      if (this.currentIndex >= this.maxIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }

      this.updateTransform();

    }, 4000);
  }

  private stopAutoSlide() {

    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  onMouseEnter() {
    this.stopAutoSlide();
  }

  onMouseLeave() {
    this.startAutoSlide();
  }
}