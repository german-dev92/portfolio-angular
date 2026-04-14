import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FEATURED_PROJECT } from '../../../portfolio-data';
import { LightboxComponent, LightboxVariant } from '../../../components/lightbox/lightbox.component';

@Component({
  selector: 'app-project-tfm-page',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, RouterLink, LightboxComponent],
  templateUrl: './project-tfm-page.component.html',
  styleUrl: './project-tfm-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTfmPageComponent {
  protected readonly featured = FEATURED_PROJECT;
  protected readonly thesisAssetPath = 'assets/docs/TFM-GERMAN_VELASQUEZ.pdf';
  protected thesisSafeUrl?: SafeResourceUrl;

  protected lightboxOpen = false;
  protected lightboxTitle = '';
  protected lightboxTemplate?: TemplateRef<{ size: 'thumb' | 'modal' }>;
  protected lightboxVariant: LightboxVariant = 'default';
  protected lightboxDisableContextMenu = false;
  protected lightboxNoSelect = false;

  protected thesisLoading = false;
  protected thesisError = '';

  public constructor(private readonly sanitizer: DomSanitizer) {}

  protected openLightbox(
    title: string,
    template: TemplateRef<{ size: 'thumb' | 'modal' }>,
    options?: { variant?: LightboxVariant; disableContextMenu?: boolean; noSelect?: boolean },
  ): void {
    this.lightboxTitle = title;
    this.lightboxTemplate = template;
    this.lightboxVariant = options?.variant ?? 'default';
    this.lightboxDisableContextMenu = options?.disableContextMenu ?? false;
    this.lightboxNoSelect = options?.noSelect ?? false;
    this.lightboxOpen = true;
  }

  protected closeLightbox(): void {
    this.lightboxOpen = false;
    this.lightboxTitle = '';
    this.lightboxTemplate = undefined;
    this.lightboxVariant = 'default';
    this.lightboxDisableContextMenu = false;
    this.lightboxNoSelect = false;
    this.thesisLoading = false;
    this.thesisError = '';
    this.thesisSafeUrl = undefined;
  }

  protected openThesis(template: TemplateRef<{ size: 'thumb' | 'modal' }>): void {
    this.thesisLoading = true;
    this.thesisError = '';
    this.thesisSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${this.thesisAssetPath}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0`,
    );
    this.openLightbox('Full thesis (PDF)', template, { variant: 'wide', disableContextMenu: true, noSelect: true });

    window.setTimeout(() => {
      if (this.lightboxOpen && this.thesisLoading && !this.thesisError) {
        this.thesisError = `PDF not found at ${this.thesisAssetPath}`;
        this.thesisLoading = false;
      }
    }, 8000);
  }

  protected onThesisLoad(): void {
    this.thesisLoading = false;
    this.thesisError = '';
  }

  protected preventContextMenu(event: MouseEvent): void {
    event.preventDefault();
  }
}
