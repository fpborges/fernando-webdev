<template>
	<div class="Skills">
		<v-container>
			<h1>My Developed Skills</h1>
			*Examples*
			<canvas id="planet-chart"></canvas>
			<canvas id="my-chart"></canvas>
		</v-container>
	</div>
</template>

<script>
	import { skillsMixinsData } from "../mixins";
	import { planetChartData, myChart } from "../charts/skillsData.js";
	import Chart from "chart.js";

	export default {
		name: "Skills",
		mixins: [skillsMixinsData],
		data: () => ({
			test: "test",
			planetChartData,
			myChart,
		}),
		mounted() {
			const ctx = document.querySelector("#planet-chart");
			const mch = document.querySelector("#my-chart");
			new Chart(ctx, this.planetChartData);
			new Chart(mch, this.myChart);
		},
	};
</script>

<style></style>
