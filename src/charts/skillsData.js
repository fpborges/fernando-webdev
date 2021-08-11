import Chart from "chart.js"; //import Chart for global properties
import state from "@/store/skills/moduleSkillsState.js";

//Set global animation duration
Chart.defaults.global.animation.duration = 3000;
Chart.defaults.global.legend.display = false;

function randomColors() {
	let barColors = [];

	let dynamicColors = () => {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		return "rgba(" + r + "," + g + "," + b + ", 0.3)";
	};

	state.frontEndDataset.forEach(() => {
		barColors.push(dynamicColors());
	});

	return barColors;
}

export const frontEnd = {
	type: "horizontalBar",
	data: {
		labels: state.frontEndLabels,
		datasets: [
			{
				label: "",
				data: state.frontEndDataset,
				backgroundColor: randomColors(),
				borderColor: randomColors(),
				borderWidth: 1,
			},
		],
	},
	options: {
		animation: {
			duration: 3000,
		},
		tooltips: {
			callbacks: {
				label: function (tooltipItem, data) {
					var value = data.datasets[0].data[tooltipItem.index];
					return "experience: " + value + "%";
				},
			},
		},
		scales: {
			xAxes: [
				{
					ticks: {
						beginAtZero: true,
						max: 100,
						stepSize: 10,
						callback: (value) => {
							return value + "%";
						},
					},
					gridLines: {
						display: true,
					},
				},
			],
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},

					gridLines: {
						display: false,
					},
				},
			],
		},
	},
};

export const backEnd = {
	type: "horizontalBar",
	data: {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	},
};

// <!-- photoshop
// 						justinmind
// 						elementor
// 						chartjs
// 						d3.js
// 						MockFlow
// 						camtasia Video Editor -->

export const desingSkills = {
	type: "line",
	data: {
		labels: [
			"photoshop",
			"elementor",
			"Balsamiq",
			"Mockflow",
			"chartjs",
			"justinmind",
			"D3.js",
			"Bootstrap",
		],
		datasets: [
			{
				label: "",
				data: [35, 55, 15, 65, 70, 85, 40, 90],
				backgroundColor: "rgba(54,73,93,.5)",
				borderColor: "#36495d",
				borderWidth: 3,

				pointRadius: 6,
				pointBackgroundColor: "black",
				hitRadius: 6,
				// hoverBorder: 1,
				// pointHoverBorderWidth: 8,
				// pointHoverRadius: 8,
			},
		],
	},
	options: {
		responsive: true,
		lineTension: 1,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						padding: 25,
						max: 100,
					},
					gridLines: {
						display: true,
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						display: false,
					},
				},
			],
		},
	},
};

// create other skills

export default { frontEnd, desingSkills };
