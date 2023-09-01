<script setup lang="ts">
import './BadgeComponent.css';
import BulletComponent from '../BulletComponent/BulletComponent.vue';

const { job } = defineProps(['job']);
</script>
<template>
	<div class="badge">
		<section class="job-offer">
			<section class="logo">
				<img :src="job.logo" :alt="`${job.company} logo`" />
			</section>
			<section class="job-info">
				<section class="first-info">
					<h4>{{ job.company }}</h4>
					<span class="new" v-if="job.new">NEW!</span>
					<span class="featured" v-if="job.featured">FEATURED</span>
				</section>
				<section class="level">
					<h3>{{ job.position }}</h3>
				</section>
				<section class="info-details">
					<span>{{ job.postedAt }}</span
					>&#x2022;<span>{{ job.contract }}</span
					>&#x2022;<span>{{ job.location }}</span>
				</section>
			</section>
		</section>
		<section class="languages">
			<BulletComponent
				v-for="(stack, index) in [
					job.role,
					job.level,
					...job.languages,
					...job.tools,
				]"
				:stack="stack"
				:key="index"
			/>
		</section>
	</div>
</template>
