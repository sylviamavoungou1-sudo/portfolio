<script lang="ts">
  export let show = false;
</script>

<div
  class="absolute z-40 inset-0 isolate overflow-hidden h-screen w-full pointer-events-none flex items-center justify-center px-6"
>
  {#if show}
    <div class="hello z-50 text-center" data-flip-id="text">
      <div
        class="cyber-title text-5xl md:text-7xl font-bold tracking-tighter uppercase"
      >
        Cyber Défense Portfolio
      </div>
      <div
        class="cyber-subtitle text-xl md:text-2xl font-medium tracking-wide mt-3 normal-case"
      >
        MAVOUNGOU Sylvia
      </div>
    </div>
  {/if}
  <div class="absolute bg-background h-screen w-full z-10 background"></div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&display=swap");

  .cyber-title {
    font-family: "Cormorant Garamond", serif;
    background: linear-gradient(135deg, #c084fc 0%, #a78bfa 40%, #7dd3fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.04em;
  }

  .cyber-subtitle {
    font-family: "Cormorant Garamond", serif;
    color: #c4b5fd;
    letter-spacing: 0.15em;
    font-style: italic;
  }
</style>
