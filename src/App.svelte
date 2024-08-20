<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
</script>

<body class="w-screen h-screen bg-background">
  <Router {routes}></Router>
</body>
