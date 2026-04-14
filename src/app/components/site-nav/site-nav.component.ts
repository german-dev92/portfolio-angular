import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-site-nav',
  standalone: true,
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteNavComponent implements OnDestroy {
  protected activeSection: 'hero' | 'projects' | 'skills' | 'about' | 'contact' = 'hero';
  private hashHandler?: () => void;
  private sectionHandler?: (event: Event) => void;

  public constructor(private readonly cdr: ChangeDetectorRef) {
    afterNextRender(() => {
      this.syncFromHash();
      this.hashHandler = () => this.syncFromHash();
      window.addEventListener('hashchange', this.hashHandler);

      this.sectionHandler = (event: Event) => {
        if (!document.documentElement.classList.contains('snap-home')) return;
        const next = (event as CustomEvent).detail as typeof this.activeSection | undefined;
        if (!next) return;
        if (next !== this.activeSection) {
          this.activeSection = next;
          this.cdr.markForCheck();
        }
      };
      window.addEventListener('home:section', this.sectionHandler);
    });
  }

  public ngOnDestroy(): void {
    if (this.hashHandler) window.removeEventListener('hashchange', this.hashHandler);
    if (this.sectionHandler) window.removeEventListener('home:section', this.sectionHandler);
  }

  private syncFromHash(): void {
    const raw = window.location.hash.replace('#', '').trim();
    const key = raw === '' ? 'top' : raw;

    const section =
      key === 'projects'
        ? 'projects'
        : key === 'skills'
          ? 'skills'
          : key === 'about'
            ? 'about'
            : key === 'contact'
              ? 'contact'
              : 'hero';

    if (section !== this.activeSection) {
      this.activeSection = section;
      this.cdr.markForCheck();
    }
  }
}
