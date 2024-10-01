<script setup lang="ts">
const links = [
  {
    label: "Local",
    step: 1,
  },
  {
    label: "Plano de Saúde",
    step: 2,
  },
  {
    label: "Exames",
    step: 3,
  },
  {
    label: "Horários",
    step: 4,
  },
  {
    label: "Horários",
    step: 5,
  },
];

const activeLink = ref(links[0]);

const setActiveLink = (link: any) => {
  activeLink.value = link;
};
</script>

<template>
  <UCard>
    <UBreadcrumb :links="links" :ui="{ ol: 'gap-x-3' }">
      <template #icon="{ link, index, isActive }">
        <UAvatar
          :alt="(index + 1).toString()"
          :ui="{
            background: isActive
              ? 'bg-primary-500 dark:bg-primary-400'
              : undefined,
            placeholder: isActive
              ? 'text-white dark:text-gray-900'
              : !!link.to
              ? 'group-hover:text-gray-700 dark:group-hover:text-gray-200'
              : '',
          }"
          size="xs"
        />
      </template>

      <template #li="{ link }">
        <span
          @click="setActiveLink(link)"
          class="cursor-pointer"
          :class="{ 'font-bold': activeLink.label === link.label }"
        >
          {{ link.label }}
        </span>
      </template>
    </UBreadcrumb>

    <div v-if="activeLink.label === 'Home'">Home?</div>
    <div v-if="activeLink.label === 'Navigation'">Navigation</div>
    <div v-if="activeLink.label === 'Breadcrumb'">Breadcrumb</div>
  </UCard>
</template>

<style scoped></style>
