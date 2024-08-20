<script>
  import "../app.css";
  import Loading from "../lib/components/Loading.svelte";
  import Mainbox from "../Mainbox.svelte";
  export let params;
  let {conversationId} = params.id;
  let chatStarted = false;

	const testPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('test');
		}, 1000);
	});
</script>

  <div class="w-full h-full flex justify-center items-center">
		  {#await testPromise}
			  <Loading />
		  {:then data}
			  <Mainbox />
		  {/await}
  </div>
