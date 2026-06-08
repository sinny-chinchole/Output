import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { AccessTable } from '../../shared/access-table/access-table';
import { FilterPanel } from '../../shared/filter-panel/filter-panel';
import { EmptyState } from '../../shared/empty-state/empty-state';

@Component({
  selector: 'app-access-control',
  imports: [
    AccessTable,
    Sidebar,
    FilterPanel,
    EmptyState,
  ],
  templateUrl: './access-control.html',
  styleUrl: './access-control.css',
})
export class AccessControl {}
