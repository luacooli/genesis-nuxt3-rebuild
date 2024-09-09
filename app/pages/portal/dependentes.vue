<script setup lang="ts">
import { ref } from "vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";

import createPatientModal from '../../components/portal/createPatientModal'

const colDefs = ref([
  { field: "nome", flex: 3 },
  { field: "editar", flex: 1 },
]);
const rowData = [
  {
    nome: "Luís Mariano Silva",
    editar: true,
  },
  {
    nome: "Luís Mariano Silva",
    editar: true,
  },
];
const paginationPageSizeSelector = [10, 20, 50, 100];

const modal = useModal();

const openCreatePatientModal = () => {
  console.log('vai abrir');
  
  modal.open(createPatientModal, {
    isDependent: true,
    onSave(event) {
      console.log(event);
    },
  });
};
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex justify-between">
        <h2 class="text-slate-950 text-xl font-medium">Dependentes</h2>

        <UButton class="ml-4" @click="openCreatePatientModal">
          Novo dependente
        </UButton>
      </div>
    </template>

    <ag-grid-vue
      :rowData="rowData"
      :columnDefs="colDefs"
      style="height: 500px"
      class="ag-theme-quartz"
      :pagination="true"
      :paginationPageSize="10"
      :paginationPageSizeSelector="paginationPageSizeSelector"
    ></ag-grid-vue>
  </UCard>
</template>

<style lang="scss"></style>
