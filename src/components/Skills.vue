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
						<v-card-actions>
							<v-btn @click="randColors()">Randomize Colors</v-btn>
						</v-card-actions>
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
							<!-- photoshop
							justinmind
							elementor
							chartjs
							d3.js
							MockFlow
							camtasia Video Editor -->
							<canvas class="design"></canvas>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<canvas id="my-skills"></canvas>
			<canvas id="myChart" width="400" height="400"></canvas>
		</v-container>
	</div>
</template>

<script>
	import { skillsMixinsData } from "../mixins";
	import {
		mySkills,
		myChart,
		frontEnd,
		backEnd,
		desingSkills,
	} from "../charts/skillsData.js";
	import myFunctions from "@/charts/skillsData";

	import Chart from "chart.js";

	export default {
		name: "Skills",
		mixins: [skillsMixinsData],
		data: () => ({
			mySkills,
			myChart,
			frontEnd,
			backEnd,
			desingSkills,
		}),
		mounted() {
			const ctx = document.querySelector("#my-skills");
			const ctx2 = document.querySelector("#myChart");
			const frontSelector = document.querySelector(".frontend");
			const backSelector = document.querySelector(".backend");
			const designSelector = document.querySelector(".design");

			new Chart(ctx, this.mySkills);
			new Chart(ctx2, this.myChart);
			new Chart(frontSelector, this.frontEnd);
			new Chart(backSelector, this.backEnd);
			new Chart(designSelector, this.desingSkills);
		},
		methods: {
			randColors() {
				myFunctions.randCol();
			},
		},
	};
</script>

<style></style>
