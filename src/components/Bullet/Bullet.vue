<script setup lang="ts">
	import './Bullet.css';
	const { stack } = defineProps(['stack']);

	import { useJobsStore } from '../../store/jobs';
	const useStore = useJobsStore();
	const { filterJobs } = useStore;
</script>
<template>
	<div class="bullet" @click="filterJobs(stack)">{{ stack }}</div>
</template>
