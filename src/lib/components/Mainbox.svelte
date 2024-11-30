<script lang="ts">
    export let modelName = "Claude 3.5 Sonnet";
    import Icon from "@iconify/svelte";
    import { marked } from "marked";
    export let inputValue = "";
    export let float = false;

    const brText = marked("Press `shift+enter` to send message");

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        console.log("submitted");
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter" && event.shiftKey) {
            event.preventDefault();
            console.log("shift+enter");
            // You might want to trigger form submission here
        }
    }
</script>

{inputValue}
<form
    class={`shadow-lg border-border border-[0.5px] grid grid-cols-2 self-end grid-rows-2 bg-foreground gap-0 ${
        float ? "rounded-2xl" : "rounded-2xl rounded-b-none"
    } auto-rows-fr p-4 ${
        float ? "" : "pb-0"
    } w-[752px] max-w-full hover:border-border/50 transition-all duration-300 ${
        float ? "" : "fixed bottom-0 left-1/2 -translate-x-1/2"
    }`}
>
    <div
        bind:innerHTML={inputValue}
        on:keydown={handleKeyDown}
        tabindex="0"
        translate="no"
        contenteditable="true"
        placeholder="Type your message..."
        class={`w-full min-h-[32px] max-h-[30vh] overflow-y-auto rounded-lg ${
            float ? "" : "rounded-b-none"
        } bg-foreground text-white placeholder:text-white/50 focus:outline-none self-end resize-none`}
    ></div>
    <div class="grid self-start justify-self-end gap-1 grid-cols-2 h-[32px]">
        <button
            class="size-[32px] hover:bg-white/10 flex items-center justify-center transition-colors rounded-lg"
        >
            <Icon icon="mdi:paperclip" class="text-white/50 size-[18px]" />
        </button>
        <button
            class="size-[32px] hover:bg-primary/90 active:scale-95 hover:shadow-lg rounded-xl bg-primary flex items-center justify-center transition-colors"
        >
            <Icon icon="mdi:arrow-up" class=" text-white size-[18px]" />
        </button>
    </div>

    <div
        class="flex mb-0 justify-between self-end items-center prose-code:text-white/80 prose-code:bg-black/10 text-white/50 text-sm max-h-[26px] font-serif prose col-span-3"
    >
        <span>{modelName}</span>
        <span>{@html brText}</span>
    </div>
</form>
