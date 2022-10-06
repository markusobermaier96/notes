import { writable } from "svelte/store";

interface Note {
  id: number;
  text: string;
  done: boolean;
}

export let notes = writable<Note[]>([]);

if (typeof localStorage !== "undefined") {
  notes = writable<Note[]>(JSON.parse(localStorage.getItem("notes")!) || []);
  notes.subscribe((value) => (localStorage.notes = JSON.stringify(value)));
}

export const addNote = (text: string) => {
  notes.update((cur) => {
    const newNotes = [...cur, { text, done: false, id: Date.now() }];
    return newNotes;
  });
};

export const deleteNotes = () => {
  notes.set([]);
};

export const toggleNoteCompleted = (id: number) => {
  notes.update((notes) => {
    let index = -1;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      notes[index].done = !notes[index].done;
    }
    return notes;
  });
};
