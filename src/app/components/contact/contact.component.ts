import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  protected readonly email = 'germanv.dev@gmail.com';
  protected readonly githubUrl = 'https://github.com/german-dev92';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/german-velasquez-073795385/';
}
