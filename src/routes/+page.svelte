<script>

  import Note from "../components/Note.svelte";
  import NoteForm from "../components/NoteForm.svelte";
  import {notes} from "../stores/noteStore"
</script>

<main>
  <h1 class="text-center font-bold text-white text-2xl pt-4">NOTIZEN</h1>
  <NoteForm />
  <div class="flex justify-center">
    <ul>
      {#each $notes as note}
        <Note {note}></Note>
      {/each}
    </ul>
  </div>
</main>
