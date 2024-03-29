import 'zone.js/dist/zone';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Data } from './Data';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly data = signal<Data>({
    isOK: true,
    text: 'coucou',
    x: 2,
  });

  update(up: Partial<Data>): void {
    this.data.update((d) => ({ ...d, ...up }));
  }
}

bootstrapApplication(AppComponent);
