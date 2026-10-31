import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.models';
import { DatePipe } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [DatePipe, Header, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  handleSubscribe() {
    console.log('all is working');
    alert('all is working');
  }

  showAler() {
    alert("biba");
  }

  title = "Hello my website";

  protected readonly notes = signal<Note[]>([
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

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  })

  protected addNote() {
    const noteData = this.newNote();

    if (!noteData.title || !noteData.content) return;

    const newNote: Note = {
      id: Date.now(),
      title: noteData.title,
      content: noteData.content,
      createdAt: new Date()
    };

    this.notes.update(notes => [...notes, newNote]);

    this.newNote.set({
      title: '',
      content: ''
    });
  }
}
