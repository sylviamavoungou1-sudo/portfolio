<script lang="ts">
  import DesktopNavigation from "./DektopNavigation.svelte";
  import { type Item, items } from "./items";

  function setActive() {
    // @ts-ignore
    let currentlyActive = mostVisible(document.querySelectorAll(".section"));

    if (currentlyActive && currentlyActive.id) {
      active = currentlyActive.id;
    }
  }

  export let active: Item = "home";
</script>

<svelte:window
  on:scroll={() => {
    setActive();
  }}
/>

<div class="fixed top-6 w-full z-40 pointer-events-none">
  <div class="flex flex-1 justify-center">
    <DesktopNavigation {items} bind:active class="pointer-events-auto" />
  </div>
</div>
