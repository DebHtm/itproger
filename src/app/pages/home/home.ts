import { Component } from '@angular/core';
import { NoteService } from '../../service/note';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoteAdd } from '../../components/note-add/note-add';
import { NoteShortenerPipe } from '../../pipes/note-shortener-pipe';

@Component({
  selector: 'app-home',
  imports: [DatePipe, RouterModule, NoteAdd, NoteShortenerPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.fetchNotes();
  }

  protected get notes() {
    return this.noteService.getNotes();
  }
}
