<script>
  import { userData } from "../db/sessionStore";
  import { supabase } from "../db/supabaseClient";

  supabase.auth.onAuthStateChange((_, session) => {
    if (session === null) {
      userData.set(null);
    } else {
      userData.set(session.user);
    }
  })
</script>

<section class="container">
  {#if $userData}
    You're signed in!
  {:else}
    Please sign in!
  {/if}
</section>