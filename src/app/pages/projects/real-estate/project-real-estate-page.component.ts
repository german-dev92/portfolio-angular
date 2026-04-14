import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-real-estate-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-real-estate-page.component.html',
  styleUrl: './project-real-estate-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectRealEstatePageComponent {}
