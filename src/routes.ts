import Home from "./routes/Home.svelte";
import Wasm from "./routes/Wasm.svelte";
import Chat from "./routes/Chat.svelte";
export default {
    '/': Home,
    '/wasm': Wasm,
    "/chat": Chat
}