<template>
	<div class="Skills">
		<v-container>
			<h1>My Developed Skills</h1>
			<v-row>
				<v-col>
					<v-card elevation="2">
						<v-card-title>Frontend Skills</v-card-title>
						<v-card-text>
							<canvas class="frontend"></canvas>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card elevation="2">
						<v-card-title>Backend Skills</v-card-title>
						<v-card-text>
							<canvas class="backend"></canvas>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-card elevation="2">
						<v-card-title>Design Skills</v-card-title>
						<v-card-text>
							<canvas class="design"></canvas>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card elevation="2">
						<v-card-title>Other Skills</v-card-title>
						<v-card-text>
							<canvas class="other"></canvas>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import { skillsMixinsData } from "../mixins";
	import {
		frontEnd,
		backEnd,
		desingSkills,
		otherSkills,
	} from "../charts/skillsData.js";

	import Chart from "chart.js";

	export default {
		name: "Skills",
		mixins: [skillsMixinsData],
		data: () => ({
			frontEnd,
			backEnd,
			desingSkills,
			otherSkills,
		}),
		mounted() {
			const frontSelector = document.querySelector(".frontend");
			const backSelector = document.querySelector(".backend");
			const designSelector = document.querySelector(".design");
			const otherSelector = document.querySelector(".other");

			new Chart(frontSelector, this.frontEnd);
			new Chart(backSelector, this.backEnd);
			new Chart(designSelector, this.desingSkills);
			new Chart(otherSelector, this.otherSkills);
		},
		methods: {},
	};
</script>

<style></style>
