import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-nav',
  standalone: true,
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteNavComponent {}
