<script lang="ts">
  import Loading from "./Loading.svelte";
  import { onMount, tick } from "svelte";

  import { gsap } from "gsap";
  import { Flip } from "gsap/Flip";
  gsap.registerPlugin(Flip);

  export let showTitle = false;

  // --- Typing animation state ---
  let displayedTitle = "";
  let displayedSubtitle = "";
  let showCursor = true;
  let typingDone = false;

  const fullTitle = "Cyber Défense Portfolio";
  const fullSubtitle = "MAVOUNGOU Sylvia";

  async function typeText(target: "title" | "subtitle", text: string) {
    for (let i = 0; i <= text.length; i++) {
      if (target === "title") {
        displayedTitle = text.slice(0, i);
      } else {
        displayedSubtitle = text.slice(0, i);
      }
      await new Promise((r) => setTimeout(r, 60));
    }
  }

  async function startTyping() {
    await typeText("title", fullTitle);
    await new Promise((r) => setTimeout(r, 300));
    await typeText("subtitle", fullSubtitle);
    typingDone = true;
    // keep blinking cursor after done
  }

  onMount(() => {
    let animationTime = 2.1;

    setTimeout(async () => {
      const state = Flip.getState(".hello");

      showTitle = true;
      await tick();

      gsap.to(".background", { opacity: 0, duration: 1 });
      Flip.from(state, {
        targets: ".hello",
        absolute: true,
        duration: 1,
        onComplete: () => {
          startTyping();
        },
      });
    }, animationTime * 1000);

    // Blink cursor
    const blink = setInterval(() => {
      showCursor = !showCursor;
    }, 530);
    return () => clearInterval(blink);
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
        <span class="sr-only">Cyber Défense Portfolio — MAVOUNGOU Sylvia</span>
        <div class="hello z-30 text-right" data-flip-id="text">
          <!-- Titre tapé ligne par ligne -->
          <div
            class="cyber-title text-4xl md:text-6xl font-bold tracking-tighter uppercase min-h-[1em]"
          >
            {displayedTitle}{#if !typingDone || displayedSubtitle.length === 0}<span
                class="inline-block w-[3px] h-[0.9em] bg-[#0d1c3d] align-middle ml-1 {showCursor
                  ? 'opacity-100'
                  : 'opacity-0'} transition-opacity"
              ></span>{/if}
          </div>
          <!-- Sous-titre avec curseur -->
          <div
            class="cyber-subtitle text-xl md:text-2xl font-medium tracking-wide mt-3 normal-case min-h-[1em]"
          >
            {displayedSubtitle}{#if displayedSubtitle.length > 0}<span
                class="inline-block w-[2px] h-[0.85em] bg-[#1a3a6e] align-middle ml-0.5 {showCursor
                  ? 'opacity-100'
                  : 'opacity-0'} transition-opacity"
              ></span>{/if}
          </div>
        </div>
      {/if}
    </h1>
  </div>
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
