import { Component } from '@angular/core';
import { NoteService } from '../../service/note';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  imports: [],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css',
})
export class NoteDetail {
  noteId!: number;
  note: any;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
  ) {
    this.route.params.subscribe(params => {
      this.noteId = +params['id'];
      this.note = this.noteService.getNotes()().find(n => n.id === this.noteId)
    })
  }
}
