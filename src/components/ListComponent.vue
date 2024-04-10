<script setup>
const props = defineProps(['data', 'listTitle'])
</script>

<template>
  <div class="card list">
    <h3 class="list-title">{{ props.listTitle }}</h3>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">Posição</th>
          <th scope="col">Batalhão</th>
          <th scope="col">Região</th>
          <th scope="col">Responsavel</th>
          <th scope="col">Nº de agentes</th>
          <th scope="col">Nivel de stress</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in props.data" :key="index">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.responsable }}</td>
          <td>{{ item.numberAgents }}</td>
          <td>{{ item.stressLevel }}</td>
          <td>
            <span>Baixar Relatório</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.list-title {
  margin-bottom: 1rem;
}

.list-item {
  border-radius: 12px;
  background-color: #dfd69d;
  padding: 1rem;
  margin-bottom: 1rem;
}

.table th {
  font-weight: bold;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
