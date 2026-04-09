import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../portfolio-data';
import { SkillGroup } from '../../models';

type SkillAccent = 'indigo' | 'orange' | 'blue' | 'yellow' | 'aqua';
type StyledSkillGroup = SkillGroup & { accent: SkillAccent };

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly groups: StyledSkillGroup[] = SKILL_GROUPS.map((g) => ({
    ...g,
    accent: this.pickAccent(g.title),
  }));

  private pickAccent(title: string): SkillAccent {
    switch (title) {
      case 'Frontend':
        return 'indigo';
      case 'Backend':
        return 'orange';
      case 'Data':
        return 'blue';
      case 'Cloud & Tools':
        return 'yellow';
      case 'AI Skills':
        return 'aqua';
      default:
        return 'indigo';
    }
  }
}
