import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Output() subscribeClicked = new EventEmitter<void>();

  onSubscribe() {
    this.subscribeClicked.emit();
  }

  username = ''
}
