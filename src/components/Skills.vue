<template>
	<div class="Skills">
		<v-container>
			<h1>My Developed Skills Progress</h1>
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
						<v-card-title>Other Skills and Learn in Progress</v-card-title>
						<v-card-text>
							<!-- <canvas class="design"></canvas> -->
							<v-row>
								<v-col cols="4">
									<div class="mt-3">
										<img
											width="300"
											src="https://icon-library.com/images/365-icon/365-icon-19.jpg"
										/>
									</div>
								</v-col>
								<v-col cols="4">
									<div>
										<img
											width="300"
											src="https://icons.iconarchive.com/icons/ziggy19/yosemite-adobe-cc-dark/icons-390.jpg"
										/>
									</div>
								</v-col>
								<v-col cols="4">
									<div>
										<img
											width="300"
											src="https://i.pinimg.com/originals/01/f1/cb/01f1cbef3fe25432e41171bd5311e49e.png"
										/>
									</div>
								</v-col>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
				<!-- <v-col>
					<v-card elevation="2">
						<v-card-title>Other Skills</v-card-title>
						<v-card-text>
							<canvas class="other"></canvas>
						</v-card-text>
					</v-card>
				</v-col> -->
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import { skillsMixinsData } from "../mixins";
	import {
		frontEnd,
		backEnd,
		// desingSkills,
		// otherSkills,
	} from "../charts/skillsData.js";

	import Chart from "chart.js";

	export default {
		name: "Skills",
		mixins: [skillsMixinsData],
		data: () => ({
			frontEnd,
			backEnd,
			// desingSkills,
			// otherSkills,
		}),
		mounted() {
			const frontSelector = document.querySelector(".frontend");
			const backSelector = document.querySelector(".backend");
			// const designSelector = document.querySelector(".design");
			// const otherSelector = document.querySelector(".other");

			new Chart(frontSelector, this.frontEnd);
			new Chart(backSelector, this.backEnd);
			// new Chart(designSelector, this.desingSkills);
			// new Chart(otherSelector, this.otherSkills);
		},
		methods: {},
	};
</script>

<style></style>
