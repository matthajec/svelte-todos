<script>
  import { auth, googleProvider } from "../firebase";
  import { authState } from "rxfire/auth";

  import Profile from "./Profile.svelte";

  let user = authState(auth);

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  {#if $user}
    <Profile {...$user} />
    <button class="button" on:click={() => auth.signOut()}>Sign Out</button>
  {:else}
    <button class="button" on:click={login}>Sign in with Google</button>
  {/if}
</section>
