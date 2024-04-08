<script setup>
import GraphicCardComponent from '../components/GraphicCardComponent.vue'
import ListComponent from '../components/ListComponent.vue'
import {
  getStressDataByYear,
  getSleepDataByYear,
  getMentalExhaustionByYear,
  getListOfMostStressedBattalion
} from '../assets/database'
</script>
<template>
  <div class="home-view">
    <h1 class="home-title">Visão Inicial</h1>
    <div class="graphic-group">
      <GraphicCardComponent label="Stress % by year" :data="getStressDataByYear()" cardTitle="Estress" />
      <GraphicCardComponent label="Sleep quality % by year" :data="getSleepDataByYear()" cardTitle="Sleep Quality" />
      <GraphicCardComponent label="Feeling of Mental Exhaustion % by year" :data="getMentalExhaustionByYear()"
        cardTitle="Mental exhaustion" />
    </div>
    <ListComponent :data="getListOfMostStressedBattalion()" listTitle="Most stressed battalion list" />
  </div>
</template>
<style scoped>
.home-view {
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.home-title {
  width: 100%;
  margin: 0;
}

.graphic-group {
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}
</style>
