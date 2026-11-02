import { Component, signal } from '@angular/core';
import { NoteService } from '../../service/note';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {
  constructor(private noteService: NoteService) {}

  protected get notes() {
    return this.noteService.getNotes();
  }

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: '',
  });

  protected submited = false;

  protected addNote(form: any) {
    this.submited = true;

    if (form.invalid) return;

    const noteData = this.newNote();

    if (!noteData.title || !noteData.content) return;

    this.noteService.addNote(noteData.title, noteData.content);

    this.newNote.set({
      title: '',
      content: '',
    });

    form.resetForm();
    this.submited = false;
  }
}
