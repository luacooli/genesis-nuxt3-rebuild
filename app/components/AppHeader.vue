<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const items = [
  [
    {
      label: "mbertolani@gmail.com",
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Perfil",
      icon: "mdi-clipboard-account",
      to: "/portal/perfil",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-heroicons-arrow-left-on-rectangle",
      to: "/portal/login",
    },
  ],
];

const goToCadastro = () => {
  router.push("/portal/cadastro");
};

const logout = () => {
  router.push("/portal/login");
};
</script>

<template>
  <UHeader>
    <template #logo>
      Genesis <UBadge label="management" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UDropdown
        :items="items"
        :ui="{ item: { disabled: 'cursor-text select-text' } }"
      >
        <UButton label="Marcelo Bertolani" color="gray">
          <template #leading>
            <UAvatar
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              size="2xs"
            />
          </template>
        </UButton>

        <template #account="{ item }">
          <div class="text-left">
            <p>Signed in as</p>
            <p class="truncate font-medium text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
          </div>
        </template>

        <template #item="{ item }">
          <span class="truncate">{{ item.label }}</span>

          <UIcon
            :name="item.icon"
            class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
          />
        </template>
      </UDropdown>
    </template>
  </UHeader>
</template>
