import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.models';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes = signal<Note[]>([
    {
      id: 1,
      title: 'Список покупок на неделю',
      content: 'Купить молоко, яйца, свежие овощи, куриное филе и зелёный чай.',
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'Идеи для нового проекта',
      content:
        'Сделать мобильное приложение для учёта личных финансов с красивыми графиками и тёмной темой.',
      createdAt: new Date(),
    },
    {
      id: 3,
      title: 'Встреча с командой',
      content:
        'Обсудить архитектуру проекта, распределить задачи на спринт и согласовывать дедлайны.',
      createdAt: new Date(),
    },
    {
      id: 4,
      title: 'Книги к прочтению',
      content: '1. "Чистый код" (Роберт Мартин)\n2. "Грокаем алгоритмы" (Адитья Бхаргава)',
      createdAt: new Date(),
    },
  ]);

  getNotes() {
    return this.notes;
  }

  addNote(title: string, content: string) {
    const newNote: Note = {
      id: Date.now(),
      title: title,
      content: content,
      createdAt: new Date(),
    };

    this.notes.update(notes => [...notes, newNote]);
  }
}
