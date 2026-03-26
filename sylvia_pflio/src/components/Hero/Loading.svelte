<script lang="ts">
  export let show = false;
</script>

<div
  class="absolute z-40 inset-0 isolate overflow-hidden h-screen w-full pointer-events-none flex items-center justify-center px-6"
>
  {#if show}
    <div class="hello z-50 text-center" data-flip-id="text">
      <div
        class="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic"
      >
        <span class="block text-cyan-400">Cyber</span>
        <span class="block text-emerald-400">Défense</span>
        <span class="block text-white">Portfolio</span>
      </div>
      <div class="text-xl md:text-2xl font-medium tracking-wide text-base-300 mt-3 normal-case not-italic">
        MAVOUNGOU Sylvia
      </div>
    </div>
  {/if}
  <div class="absolute bg-background h-screen w-full z-10 background"></div>
</div>

<style>
</style>
