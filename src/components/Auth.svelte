<script>
  import { supabase } from '../db/supabaseClient';
  import { userData } from '../db/sessionStore';

  const signIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google'
    });
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    }
  }
</script>

<section>
  {#if $userData}
    <button on:click={signOut}>Sign out</button>
  {:else}
    <button on:click={signIn}>Sign in</button>
  {/if}
</section>