import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SiteNavComponent } from './components/site-nav/site-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SiteNavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly year = new Date().getFullYear();

  public constructor(router: Router) {
    router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects.split('?')[0].split('#')[0];
      const isHome = url === '/' || url === '';
      document.documentElement.classList.toggle('snap-home', isHome);
      document.body.classList.toggle('snap-home', isHome);
    });
  }
}
