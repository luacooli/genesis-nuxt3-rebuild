<script setup lang="ts">
const verticalLinks = [
  {
    label: "Home",
    icon: "mdi-home",
    to: "/portal",
  },
  {
    label: "Dependentes",
    icon: "mdi-clipboard-account",
    to: "/portal/dependentes",
  },
  {
    label: "Agendar Exame",
    icon: "mdi-calendar",
    to: "/portal/agendamento",
  },
  {
    label: "Agendar Consulta",
    icon: "mdi-calendar",
    to: "/portal/consultorio",
  },
];
</script>

<template>
  <div>
    <AppHeader />

    <div class="grid grid-cols-12 gap-3">
      <UVerticalNavigation class="col-span-2" :links="verticalLinks" />

      <UMain class="col-span-10 p-4">
        <slot />
      </UMain>
    </div>
  </div>
</template>
