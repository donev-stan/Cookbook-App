import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() pageSelected: EventEmitter<string> = new EventEmitter();

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onSelect(page: string): void {
    this.pageSelected.emit(page);
  }
}
