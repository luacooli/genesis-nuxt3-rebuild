<script setup lang="ts">
const formSchema = [
  {
    $el: "div",
    attrs: {
      class: "grid grid-cols-12 gap-3",
    },
    children: [
      {
        $formkit: "text",
        label: "Nome Completo",
        id: "name",
        name: "name",
        placeholder: "Digite seu nome",
        validation: "required|contains_alpha_spaces",
        "outer-class": "col-span-12",
      },
      {
        $formkit: "email",
        label: "Email",
        id: "email",
        name: "email",
        placeholder: "Digite seu nome",
        validation: "email",
        "outer-class": "col-span-8",
      },
      {
        $formkit: "select",
        label: "Sexo",
        id: "sex",
        name: "sex",
        options: "$sexOptions",
        "outer-class": "col-span-4",
      },
      {
        $formkit: "number",
        label: "Celular",
        id: "cellphone",
        name: "cellphone",
        placeholder: "Digite seu número",
        validation: "number",
        "outer-class": "col-span-4",
      },
      {
        $formkit: "number",
        label: "CPF",
        id: "cpf",
        name: "cpf",
        placeholder: "000.000.000-00",
        validation: "required|number",
        "outer-class": "col-span-4",
      },
      {
        $formkit: "date",
        label: "Data de Nascimento",
        id: "birthdate",
        name: "birthdate",
        placeholder: "09/10/1990",
        validation: "required",
        "outer-class": "col-span-4",
      },
    ],
  },
];

defineProps({
  isDependent: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["success"]);
console.log('abri!!!');

const closeHandler = () => {};
const submitHandler = (event) => {
  event.preventDefault();
  emit("save", event);
};
</script>

<template>
  <div>
    <UModal>
      <UCard>
        <template #header>
          <h2 class="text-slate-950 text-xl font-medium">
            Cadastro de Paciente
          </h2>
        </template>

        <FormKit
          id="user_register"
          type="form"
          :actions="false"
          @submit.preventDefault="submitHandler"
        >
          <FormKitSchema :schema="formSchema" :data="data" />
        </FormKit>

        <template #footer>
          <UButton variant="outline" @click="closeHandler" class="ml-4"
            >Fechar</UButton
          >
          <UButton class="ml-2" type="submit">Salvar</UButton>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<style scoped></style>
