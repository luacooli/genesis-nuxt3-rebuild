<script setup lang="ts">
import { ref } from "vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";

const colDefs = ref([
  { field: "data" },
  { field: "protocolo" },
  { field: "modalidade" },
  { field: "procedimento" },
  { field: "paciente" },
  { field: "laudo" },
  { field: "imagem" },
  { field: "video" },
]);
const rowData = [
  {
    data: "07/12/2023",
    protocolo: 223426,
    modalidade: "RAIO X",
    procedimento: "RX SELA TURCICA",
    paciente: "PAULA AURELIO",
    laudo: true,
    imagem: false,
    video: false,
  },
  {
    data: "07/12/2023",
    protocolo: 223426,
    modalidade: "RAIO X",
    procedimento: "RX SELA TURCICA",
    paciente: "PAULA AURELIO",
    laudo: true,
    imagem: false,
    video: false,
  },
  {
    data: "07/12/2023",
    protocolo: 223426,
    modalidade: "RAIO X",
    procedimento: "RX SELA TURCICA",
    paciente: "PAULA AURELIO",
    laudo: true,
    imagem: false,
    video: false,
  },
  {
    data: "07/12/2023",
    protocolo: 223426,
    modalidade: "RAIO X",
    procedimento: "RX SELA TURCICA",
    paciente: "PAULA AURELIO",
    laudo: true,
    imagem: false,
    video: false,
  },
  {
    data: "07/12/2023",
    protocolo: 223426,
    modalidade: "RAIO X",
    procedimento: "RX SELA TURCICA",
    paciente: "PAULA AURELIO",
    laudo: true,
    imagem: false,
    video: false,
  },
  {
    data: "07/12/2023",
    protocolo: 223426,
    modalidade: "RAIO X",
    procedimento: "RX SELA TURCICA",
    paciente: "PAULA AURELIO",
    laudo: true,
    imagem: false,
    video: false,
  },
  {
    data: "07/12/2023",
    protocolo: 223426,
    modalidade: "RAIO X",
    procedimento: "RX SELA TURCICA",
    paciente: "PAULA AURELIO",
    laudo: true,
    imagem: false,
    video: false,
  },
];
const paginationPageSizeSelector = [10, 20, 50, 100];
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex justify-between">
        <h2 class="text-slate-950 text-xl font-medium">Atendimentos</h2>

        <div>
          <UButton variant="outline" to="/portal/agendamento">
            Agendar Exame
          </UButton>
          <UButton variant="outline" class="ml-4" to="/portal/consultorio">
            Agendar Consulta
          </UButton>
        </div>
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
