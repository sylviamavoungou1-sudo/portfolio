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
          <div class="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic min-h-[1em]">
            <span class="text-cyan-400">{displayedTitle.slice(0, 5)}</span><span
              class="text-emerald-400">{displayedTitle.slice(5, 12)}</span
            ><span class="text-white">{displayedTitle.slice(12)}</span
            >{#if !typingDone || displayedSubtitle.length === 0}<span
                class="inline-block w-[3px] h-[0.9em] bg-cyan-400 align-middle ml-1 {showCursor
                  ? 'opacity-100'
                  : 'opacity-0'} transition-opacity"
              ></span>{/if}
          </div>
          <!-- Sous-titre avec curseur -->
          <div class="text-xl md:text-2xl font-medium tracking-wide text-base-300 mt-3 normal-case not-italic min-h-[1em]">
            {displayedSubtitle}{#if displayedSubtitle.length > 0}<span
                class="inline-block w-[2px] h-[0.85em] bg-base-300 align-middle ml-0.5 {showCursor
                  ? 'opacity-100'
                  : 'opacity-0'} transition-opacity"
              ></span>{/if}
          </div>
        </div>
      {/if}
    </h1>
  </div>
</div>
