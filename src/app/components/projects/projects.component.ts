import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FEATURED_PROJECT, PROJECTS } from '../../portfolio-data';
import { Project } from '../../models';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly featured = FEATURED_PROJECT;
  protected readonly others: Project[] = PROJECTS.filter((p) => p.kind !== 'featured');
}
