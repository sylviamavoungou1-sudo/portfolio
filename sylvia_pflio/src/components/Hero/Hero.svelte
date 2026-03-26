<script lang="ts">
  import Loading from "./Loading.svelte";
  import { onMount, tick } from "svelte";

  import { gsap } from "gsap";
  import { Flip } from "gsap/Flip";
  gsap.registerPlugin(Flip);

  export let showTitle = false;

  onMount(() => {
    let animationTime = 2.1;

    setTimeout(async () => {
      const state = Flip.getState(".hello");
      console.log(state);

      showTitle = true;
      await tick();

      let fade = gsap.to(".background", { opacity: 0, duration: 1 });
      Flip.from(state, {
        targets: ".hello",
        absolute: true,
        duration: 1,
      });
    }, animationTime * 1000);
  });
</script>

<Loading show={!showTitle} />

<div
  class="relative isolate overflow-hidden section h-screen pointer-events-none z-50"
  id="home"
>
  <div class="mx-auto max-w-7xl px-6 py-64 lg:px-8">
    <h1 class="flex justify-end w-full">
      {#if showTitle}
        <span class="sr-only">Cyber Defense Portfolio</span>
        <div class="hello z-30 text-right" data-flip-id="text">
          <div
            class="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic"
          >
            <span class="block text-cyan-400">Cyber</span>
            <span class="block text-emerald-400">Defense</span>
            <span class="block text-white">Portfolio</span>
          </div>
        </div>
      {/if}
    </h1>
  </div>
</div>
