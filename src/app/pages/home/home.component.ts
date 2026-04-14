import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, afterNextRender } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectsCardsComponent } from '../../components/projects-cards/projects-cards.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectsCardsComponent, SkillsComponent, AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy {
  protected activeSection: 'hero' | 'projects' | 'skills' | 'about' | 'contact' = 'hero';
  private wheelHandler?: (event: WheelEvent) => void;
  private keyHandler?: (event: KeyboardEvent) => void;
  private hashHandler?: () => void;
  private stepLocked = false;

  public constructor(private readonly cdr: ChangeDetectorRef) {
    afterNextRender(() => {
      this.syncFromHash();
      this.setupHashListener();
      this.setupStepNavigation();
    });
  }

  public ngOnDestroy(): void {
    if (this.wheelHandler) window.removeEventListener('wheel', this.wheelHandler);
    if (this.keyHandler) window.removeEventListener('keydown', this.keyHandler);
    if (this.hashHandler) window.removeEventListener('hashchange', this.hashHandler);
  }

  protected goTo(section: 'hero' | 'projects' | 'skills' | 'about' | 'contact'): void {
    this.activeSection = section;
    this.cdr.markForCheck();
    this.emitSection(section);

    const hash = section === 'hero' ? 'top' : section;
    history.replaceState(null, '', `#${hash}`);
    window.dispatchEvent(new Event('hashchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.setTimeout(() => {
      const view = document.querySelector<HTMLElement>('app-home .view');
      view?.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  }

  private setupStepNavigation(): void {
    if (window.matchMedia('(max-width: 900px)').matches) return;

    const ids: Array<'hero' | 'projects' | 'skills' | 'about' | 'contact'> = ['hero', 'projects', 'skills', 'about', 'contact'];

    this.wheelHandler = (event: WheelEvent) => {
      if (!document.documentElement.classList.contains('snap-home')) return;
      if (Math.abs(event.deltaY) < 8) return;

      if (this.stepLocked) return;

      const view = document.querySelector<HTMLElement>('app-home .view');
      if (view) {
        const maxScrollTop = view.scrollHeight - view.clientHeight;
        const canScroll = maxScrollTop > 2;
        if (canScroll) {
          const atTop = view.scrollTop <= 0;
          const atBottom = view.scrollTop >= maxScrollTop - 1;
          if (event.deltaY > 0 && !atBottom) return;
          if (event.deltaY < 0 && !atTop) return;
        }
      }

      event.preventDefault();

      const currentIndex = ids.indexOf(this.activeSection);
      const nextIndex = event.deltaY > 0 ? Math.min(currentIndex + 1, ids.length - 1) : Math.max(currentIndex - 1, 0);
      if (nextIndex === currentIndex) return;

      this.stepLocked = true;
      this.goTo(ids[nextIndex]);
      window.setTimeout(() => {
        this.stepLocked = false;
      }, 520);
    };

    this.keyHandler = (event: KeyboardEvent) => {
      if (!document.documentElement.classList.contains('snap-home')) return;

      const nextKeys = new Set(['ArrowDown', 'PageDown', ' ']);
      const prevKeys = new Set(['ArrowUp', 'PageUp']);
      if (!nextKeys.has(event.key) && !prevKeys.has(event.key)) return;

      event.preventDefault();
      if (this.stepLocked) return;

      const currentIndex = ids.indexOf(this.activeSection);
      const nextIndex = nextKeys.has(event.key) ? Math.min(currentIndex + 1, ids.length - 1) : Math.max(currentIndex - 1, 0);
      if (nextIndex === currentIndex) return;

      this.stepLocked = true;
      this.goTo(ids[nextIndex]);
      window.setTimeout(() => {
        this.stepLocked = false;
      }, 520);
    };

    window.addEventListener('wheel', this.wheelHandler, { passive: false });
    window.addEventListener('keydown', this.keyHandler, { passive: false });
  }

  private setupHashListener(): void {
    this.hashHandler = () => this.syncFromHash();
    window.addEventListener('hashchange', this.hashHandler);
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
      this.emitSection(section);
    }
  }

  private emitSection(section: 'hero' | 'projects' | 'skills' | 'about' | 'contact'): void {
    window.dispatchEvent(new CustomEvent('home:section', { detail: section }));
  }
}
