import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

export type LightboxVariant = 'default' | 'wide';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent {
  @Input({ required: true }) open = false;
  @Input() title = '';
  @Input() variant: LightboxVariant = 'default';
  @Input() disableContextMenu = false;
  @Input() noSelect = false;
  @Output() closed = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.open) {
      this.closed.emit();
    }
  }

  protected onContextMenu(event: MouseEvent): void {
    if (this.disableContextMenu) {
      event.preventDefault();
    }
  }
}
