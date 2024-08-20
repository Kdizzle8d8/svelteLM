<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let rotation = 0;
  
  onMount(() => {
    const interval = setInterval(() => {
      rotation = (rotation + 45) % 360;
    }, 100);
    
    return () => clearInterval(interval);
  });
</script>

<div in:fade class="flex justify-center items-center h-full">
  <div class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full" style="transform: rotate({rotation}deg)">
  </div>
</div>

<style>
  div {
    transition: transform 0.1s linear;
  }
</style>
