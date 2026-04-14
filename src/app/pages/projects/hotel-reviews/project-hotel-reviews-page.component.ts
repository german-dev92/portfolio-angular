import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-hotel-reviews-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-hotel-reviews-page.component.html',
  styleUrl: './project-hotel-reviews-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHotelReviewsPageComponent {}
