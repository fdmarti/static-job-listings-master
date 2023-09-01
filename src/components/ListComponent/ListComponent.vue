<script setup lang="ts">
import './ListComponent.css';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useJobsStore } from '../../store/jobs';
import { BadgeComponent, SpinnerComponent } from '../../components';

const useJobs = useJobsStore();
const { getJobs } = useJobs;
const { isLoading, filteredJobs } = storeToRefs(useJobs);

onMounted(async() => await getJobs());
</script>
<template>
	<SpinnerComponent v-if="isLoading" />
	<div class="list" v-else>
		<BadgeComponent v-for="job in filteredJobs" :job="job" :key="job.id" />
	</div>
</template>
