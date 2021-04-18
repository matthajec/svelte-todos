<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  export let uid;

  let text = "";

  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  function addItem() {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now(),
    });
    text = "";
  }

  function updateStatus(event) {
    console.log(event);
    const { id, newStatus } = event.detail;
    db.collection("todos").doc(id).update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos").doc(id).delete();
  }
</script>

<ul>
  {#each $todos as todo}
    <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
  {/each}
</ul>

<form on:submit|preventDefault={addItem}>
  <input class="input" placeholder="Your new todo" bind:value={text} />

  <button class="button">Add Task</button>
</form>

<style>
</style>
