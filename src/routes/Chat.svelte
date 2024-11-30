<script>
    import { writable } from "svelte/store";
    import "../app.css";
    import Loading from "../lib/components/Loading.svelte";
    import Mainbox from "../lib/components/Mainbox.svelte";
    let chatStarted = false;
    const messages = writable([]);
</script>

<div class="w-full h-full flex justify-center items-center">
    <Mainbox modelName="OpenAI Gpt-4o" />
</div>
