<script>
  export let modelName = 'Claude 3.5 Sonnet';
  import Icon from "@iconify/svelte";
  let inputValue = '';
  export let float = false; 
</script>

  <div class={`border-border border-[0.5px] grid grid-cols-2 self-end grid-rows-2 bg-foreground ${float ? 'rounded-2xl' : 'rounded-2xl rounded-b-none'} auto-rows-fr p-4 ${float ? '' : 'pb-0'} w-[752px] hover:border-border/50 transition-all duration-300`}>
      <textarea
        bind:value={inputValue}
        placeholder="Type your message..."
        class={`w-full h-[32px] max-h-[441px] rounded-lg ${float ? '' : 'rounded-b-none'} bg-foreground text-white placeholder:text-white/50 focus:outline-none self-end resize-none`}
      ></textarea>
      <div class="grid place-self-end grid-cols-2 h-[32px]">
        <button class="size-[32px] hover:bg-white/10 flex items-center justify-center transition-colors rounded-lg">
            <Icon icon="mdi:paperclip" class="text-white/50 size-[18px]" />
        </button>
        <button class="size-[32px] hover:bg-white/10 bg-primary flex items-center justify-center transition-colors rounded-lg">
            <Icon icon="mdi:arrow-up" class=" text-white size-[18px]" />
        </button>
      </div>
      <span class="text-white/50 h-[26px] font-serif prose col-span-2">{modelName}</span>
  </div>
