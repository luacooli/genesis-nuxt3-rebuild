<script setup lang="ts">
import { ref } from "vue";
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
        placeholder: "Digite seu email",
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
      {
        $formkit: "select",
        label: "Convênio",
        id: "medical_agreement",
        name: "medical_agreement",
        options: "$medicalAgreementOptions",
        placeholder: "Selecione um plano de saúde",
        "outer-class": "col-span-8",
      },
      {
        $formkit: "text",
        label: "Matrícula",
        id: "registration",
        name: "registration",
        "outer-class": "col-span-4",
      },
      {
        $formkit: "text",
        label: "Nome da Mãe",
        id: "mother_name",
        name: "mother_name",
        validation: "required",
        "outer-class": "col-span-8",
      },
      {
        $formkit: "number",
        label: "Peso",
        id: "weight",
        name: "weight",
        "outer-class": "col-span-2",
      },
      {
        $formkit: "number",
        label: "Altura",
        id: "height",
        name: "height",
        "outer-class": "col-span-2",
      },
      {
        $formkit: "number",
        label: "CEP",
        id: "cep",
        name: "cep",
        "outer-class": "col-span-3",
      },
      {
        $formkit: "text",
        label: "Endereço",
        id: "address",
        name: "address",
        "outer-class": "col-span-7",
      },
      {
        $formkit: "number",
        label: "Número",
        id: "address_number",
        name: "address_number",
        "outer-class": "col-span-2",
      },
      {
        $formkit: "text",
        label: "Bairro",
        id: "neighborhood",
        name: "neighborhood",
        "outer-class": "col-span-5",
      },
      {
        $formkit: "text",
        label: "Cidade",
        id: "city",
        name: "city",
        "outer-class": "col-span-5",
      },
      {
        $formkit: "select",
        label: "Estado",
        id: "state",
        name: "state",
        options: "$stateOptions",
        "outer-class": "col-span-2",
      },
    ],
  },
];

const updatePasswordSchema = [
  {
    $formkit: "password",
    label: "Senha atual",
    id: "old_password",
    name: "old_password",
    suffixIcon: "eyeClosed",
  },
  {
    $formkit: "email",
    label: "Nova senha",
    id: "new_password",
    name: "new_password",
    suffixIcon: "eyeClosed",
  },
  {
    $formkit: "email",
    label: "Confirmar senha",
    id: "confirm_new_password",
    name: "confirm_new_password",
    suffixIcon: "eyeClosed",
  },
];

const updatePassword = ref(false);
const toast = useToast();

const data = reactive({
  sexOptions: ["Feminino", "Masculino"],
  stateOptions: ["SP", "RJ", "ES"],
  medicalAgreementOptions: ["Unimed", "Amil", "SulAmérica"],
});
const submitHandler = () => {
  console.log("Form submitted");
};
const updatePasswordHandler = () => {
  updatePassword.value = true;
};
const deleteAccountHandler = () => {
  toast.add({
    title: "Ainda estamos trabalhando nessa funcionalidade!",
    id: "modal-warning",
  });
};
const closeUpdatePasswordModal = () => {
  updatePassword.value = false;
};

const submitPasswordHandler = () => {
  toast.add({
    title: "Senha alterada com sucesso",
    id: "modal-success",
  });

  closeUpdatePasswordModal();
};
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex justify-between">
        <h2 class="text-slate-950 text-xl font-medium">Cadastro de Paciente</h2>
        <UButton variant="outline" @click="updatePasswordHandler">
          Alterar senha
        </UButton>
      </div>
    </template>

    <FormKit
      id="user_register"
      type="form"
      name="user_register"
      :actions="false"
    >
      <FormKitSchema :schema="formSchema" :data="data" />
    </FormKit>
    <template #footer>
      <div class="flex justify-between">
        <div>
          <UButton variant="outline" to="/portal/">Voltar</UButton>
          <UButton variant="outline" class="ml-2" @click="deleteAccountHandler">
            Excluir conta
          </UButton>
        </div>
        <UButton @click="submitHandler">Salvar</UButton>
      </div>
    </template>
  </UCard>

  <UModal v-model="updatePassword">
    <UCard>
      <template #header>
        <h2 class="text-slate-950 text-xl font-medium">Nova senha</h2>
      </template>

      <FormKit
        id="update_password"
        name="update_password"
        type="form"
        :actions="false"
      >
        <FormKitSchema :schema="updatePasswordSchema" />
      </FormKit>

      <template #footer>
        <UButton variant="outline" @click="closeUpdatePasswordModal">
          Cancelar
        </UButton>
        <UButton class="ml-4" @click="submitPasswordHandler">Salvar</UButton>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped></style>
