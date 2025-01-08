import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jugnu';
  backgroundImage: string | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.setBackgroundImage(window.innerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      const target = event.target as Window;
      this.setBackgroundImage(target.innerWidth);
    }
  }

  setBackgroundImage(width: number) {
    if (width <= 768) {
      this.backgroundImage = 'url(/assets/Mobile_Background.jpg)';
    } else {
      this.backgroundImage = 'url(/assets/Background.jpg)';
    }
  }
}