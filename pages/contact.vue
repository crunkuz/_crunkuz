<template>
  <div
    class="flex min-h-screen w-full flex-col items-center justify-center pt-[30px]"
  >
    <h1 class="text-[1rem] uppercase">&gt;Contact</h1>
    <div class="mt-[20px] flex flex-col">
      <a class="text-center" href="mailto:hi.iluzionn@gmail.com"
        >hi.iluzionn@gmail.com</a
      >
      <a class="text-center" href="tel:+84888388859">+84 888388859</a>
    </div>
    <div class="mt-[10px] flex gap-[40px]">
      <NuxtLink
        to="https://github.com/illuzionm"
        title="Github"
        target="_blank"
        external
        class="cursor-pointer"
      >
        <Github_invert
          class="!size-[17px] [&>path]:!fill-transparent dark:[&>path]:stroke-white"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Github_invert from "@/assets/svg/github_invert.svg";
import Instagram_invert from "@/assets/svg/instagram_invert.svg";
import Youtube from "@/assets/svg/yt.svg";
</script>
