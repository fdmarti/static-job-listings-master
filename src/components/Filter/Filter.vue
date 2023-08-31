<script setup lang="ts">
	import './Filter.css';
	import FilterBullet from '../FilterBullet/FilterBullet.vue';
	import { useJobsStore } from '../../store/jobs';
	const useJobs = useJobsStore();
	const { optionsSelected } = useJobs;
</script>
<template>
	<div class="filter">
        <FilterBullet v-for="option in optionsSelected" :option="option"/>
    </div>
</template>
