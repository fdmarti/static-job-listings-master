<script setup lang="ts">
import './FilterComponent.css';
import FilterBulletComponent from '../FilterBulletComponent/FilterBulletComponent.vue';
import { useJobsStore } from '../../store/jobs';
const useJobs = useJobsStore();
const { optionsSelected } = useJobs;
</script>
<template>
	<div class="filter">
		<FilterBulletComponent
			v-for="(option, index) in optionsSelected"
			:option="option"
			:key="index"
		/>
	</div>
</template>
