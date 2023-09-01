import { defineStore } from 'pinia';

interface JobsState {
	jobs: JobState[];
	filteredJobs: JobState[];
	optionsSelected: string[];
	isLoading: boolean;
}

interface JobState {
	id: number;
	company: string;
	languages: string[];
	level: string;
	role: string;
	tools: string[];
}

export const useJobsStore = defineStore('Jobs', {
	state: (): JobsState => ({
		jobs: [],
		filteredJobs: [],
		optionsSelected: [],
		isLoading: false
	}),

	actions: {
		async getJobs() {
			this.isLoading = true;
			const result = await fetch('data/data.json');
			this.jobs = await result.json();
			this.filteredJobs = this.jobs;
			this.isLoading = false;
		},

		filterJobs(job: string) {
			const isSeleceted = this.optionsSelected.some(
				(element) => element === job
			);
			if (!isSeleceted) {
				this.optionsSelected.push(job);
			}

			this.refreshList();
		},

		deleteOptionFilter(option: string) {
			const optionToDelete = this.optionsSelected.indexOf(option);
			this.optionsSelected.splice(optionToDelete, 1);
			this.refreshList();
		},

		refreshList() {
			this.filteredJobs = this.jobs.filter((element: JobState) => {
				const languages = element.languages;
				const tools = element.tools;
				const stack = [element.level, ...languages, ...tools, element.role];

				let flag = 0;

				this.optionsSelected.forEach((elementStack) => {
					if (stack.includes(elementStack)) {
						flag++;
					}
				});

				if (flag === this.optionsSelected.length) {
					return element;
				}
			});
		}
	}
});
