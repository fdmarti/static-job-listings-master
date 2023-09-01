<script setup lang="ts">
import './FilterBulletComponent.css';
import { useJobsStore } from '../../store/jobs';

const { option } = defineProps(['option']);
const useJobs = useJobsStore();
const { deleteOptionFilter } = useJobs;
</script>
<template>
	<div class="option">
		<span class="text-option">{{ option }}</span>
		<section class="logo-block" @click="deleteOptionFilter(option)">
			<img
				class="icon-remove"
				src="/images/icon-remove.svg"
				alt="icon remove"
			/>
		</section>
	</div>
</template>
