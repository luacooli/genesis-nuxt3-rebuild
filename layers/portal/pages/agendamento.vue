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
const currentStep = ref(1);

const goToStep = (event) => {
  console.log(event.target.textContent);
  const step = event.target.textContent;

  switch (step) {
    case "Local":
      currentStep.value = 1;
    case "Plano de Saúde":
      currentStep.value = 2;
    case "Exames":
      currentStep.value = 3;
    case "Horários":
      currentStep.value = 4;
    case "Horários":
      currentStep.value = 5;

    default:
      currentStep.value = 1;
      break;
  }
  console.log(currentStep.value);
  
  currentStep.value = step;
};
const setActiveLink = (link: any) => {
  console.log(link);
  console.log(activeLink.value);
  activeLink.value = link;
};
</script>

<template>
  <UCard>
    <UBreadcrumb :links="links" :ui="{ ol: 'gap-x-3' }" @click="goToStep">
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

    <div v-if="currentStep === 1">Local</div>
    <div v-else-if="currentStep === 2">Plano de Saúde</div>
    <div v-else-if="currentStep === 3">Exames</div>
    <div v-else-if="currentStep === 4">Horários</div>
    <div v-else-if="currentStep === 5">Confirmação</div>
  </UCard>
</template>

<style scoped></style>
