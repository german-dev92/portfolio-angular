import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly profile = PROFILE;
}
