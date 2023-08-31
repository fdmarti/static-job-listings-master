<script setup lang="ts">
	import './List.css';
	import { onMounted } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useJobsStore } from '../../store/jobs';
	import { Badge, Spinner } from '../../components';

	const useJobs = useJobsStore();
	const { getJobs } = useJobs;
	const { isLoading, filteredJobs } = storeToRefs(useJobs);

	onMounted(async () => await getJobs());
</script>
<template>
	<Spinner v-if="isLoading" />
	<div class="list" v-else>
		<Badge v-for="job in filteredJobs" :job="job" />
	</div>
</template>
