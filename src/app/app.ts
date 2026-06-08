import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessControl } from './pages/access-control/access-control';
import { AccessTable } from './shared/access-table/access-table';
import { Sidebar } from './layout/sidebar/sidebar';
import { EmptyState } from './shared/empty-state/empty-state';

@Component({
  selector: 'app-root',
  imports: [
    AccessControl,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('output');
}
