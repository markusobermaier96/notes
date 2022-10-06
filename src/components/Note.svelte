<script>
  import { deleteNotes, toggleNoteCompleted } from "../stores/noteStore";

  /**
   * @type {{ id:number; text: string; done: boolean; }}
   */
  export let note;
</script>

<li>
  <button
    class={`w-96 bg-slate-100 text-gray-800 border border-gray-200 rounded-lg my-4 py-2 px-4 hover:shadow-lg hover:shadow-green-500
    ${note.done ? "line-through bg-green-600" : ""}`}
    on:click={() => toggleNoteCompleted(note.id)}>{note.text}</button
  >
  <span />
</li>
