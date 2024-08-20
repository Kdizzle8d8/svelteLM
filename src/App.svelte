<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<div class="w-screen h-screen bg-background">
  <Router {routes}></Router>
</div>
