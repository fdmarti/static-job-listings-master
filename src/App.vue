<script setup lang="ts">
	import { Header, List, Filter } from './components';

	import { useJobsStore } from './store/jobs';
	const useJobs = useJobsStore();
	const { optionsSelected } = useJobs;
</script>
<template>
	<Header />
	<Filter v-if="optionsSelected.length > 0" />
	<List />
</template>
