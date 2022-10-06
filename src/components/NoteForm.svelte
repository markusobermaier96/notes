<script lang="ts">
  import {addNote, deleteNotes} from "../stores/noteStore"

  let note = '';
  const addNoteHelper = () => {
    addNote(note);
    note = '';
  }
</script>

<form class="my-6" autocomplete="off" on:submit|preventDefault={() => addNoteHelper()}>
  <div class="flex text-center justify-center text-sm mb-2">
    <label for="note" name="note" />
    <input
      class="text-center rounded-2xl appearance-none shadow-inner shadow-black mr-4"
      type="text"
      name="note"
      placeholder="Add Note"
      bind:value={note}
    />
    
    <button
      type="button"
      class="rounded-2xl text-lg font-bold bg-red-400 pt-2 px-4 border hover:scale-105"
      on:click="{() => deleteNotes()}"
      >Clear</button
    >
  </div>
</form>
