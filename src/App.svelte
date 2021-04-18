<script>
  import { auth } from "./firebase";
  import { authState } from "rxfire/auth";

  let user = authState(auth);

  import Login from "./components/Login.svelte";
  import Todos from "./components/Todos.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css"
    integrity="sha512-byErQdWdTqREz6DLAA9pCnLbdoGGhXfU6gm1c8bkf7F51JVmUBlayGe2A31VpXWQP+eiJ3ilTAZHCR3vmMyybA=="
    crossorigin="anonymous"
  />
</svelte:head>

<main class="content">
  <h1>Svelte Todos</h1>
  <Login />
  {#if $user}
    <Todos uid={$user.uid} />
  {/if}
</main>

<style>
  h1 {
    color: purple;
  }

  main {
    margin: 20px;
  }
</style>
