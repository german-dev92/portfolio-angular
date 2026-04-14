import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FEATURED_PROJECT, PROJECTS } from '../../portfolio-data';
import { Project } from '../../models';

@Component({
  selector: 'app-projects-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsCardsComponent {
  protected readonly featured = FEATURED_PROJECT;
  protected readonly others: Project[] = PROJECTS.filter((p) => p.kind !== 'featured');

  protected getProjectRoute(project: Project): string {
    if (project.route) return project.route;
    if (project.comingSoon) return '/';

    switch (project.id) {
      case 'energy-consumption':
        return '/projects/tfm';
      case 'real-estate-analysis':
        return '/projects/real-estate';
      case 'hotel-reviews-app':
        return '/projects/hotel-reviews';
      default:
        return '/';
    }
  }

  protected getProjectAccent(project: Project): 'turquoise' | 'cyan' | 'primary' {
    if (project.accent) return project.accent;

    switch (project.id) {
      case 'energy-consumption':
        return 'turquoise';
      case 'real-estate-analysis':
        return 'primary';
      case 'hotel-reviews-app':
        return 'cyan';
      default:
        return 'primary';
    }
  }
}
