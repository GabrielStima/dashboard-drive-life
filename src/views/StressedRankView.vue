<script setup>
import ListComponent from '../components/ListComponent.vue'
import {
    getListOfMostStressedBattalion
} from '../assets/database'
</script>
<template>
    <div class="main-view">
        <h1 class="main-title">Rank de Stress</h1>
        <ListComponent :data="getListOfMostStressedBattalion()" listTitle="Most stressed battalion list" />
    </div>
</template>
<style scoped></style>