<script setup lang="ts">
import { HeaderComponent, ListComponent, FilterComponent } from './components';

import { useJobsStore } from './store/jobs';
const useJobs = useJobsStore();
const { optionsSelected } = useJobs;
</script>
<template>
	<HeaderComponent />
	<FilterComponent v-if="optionsSelected.length > 0" />
	<ListComponent />
</template>
