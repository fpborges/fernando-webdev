import Chart from "chart.js"; //import Chart for global properties
import state from "@/store/skills/moduleSkillsState.js";

//Set global animation duration
Chart.defaults.global.animation.duration = 3000;
// Chart.defaults.global.legend.display = true;

function randomColors() {
	let barColors = [];

	let dynamicColors = () => {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		return "rgba(" + r + "," + g + "," + b + ", 0.5)";
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
		legend: {
			display: false,
		},
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
						display: false,
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
		labels: [
			"Python",
			"C#",
			"Node.js",
			"Restful-API",
			"MongoDB ",
			"MySQL",
			"SQL Server",
			"AWS Servers",
		],
		datasets: [
			{
				label: "# of Votes",
				data: [40, 50, 45, 30, 25, 85, 75, 30],
				backgroundColor: randomColors(),
				borderColor: randomColors(),
				borderWidth: 1,
			},
		],
	},
	options: {
		legend: {
			display: false,
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
						display: false,
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
		legend: {
			display: false,
		},
		responsive: true,
		lineTension: 1,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						padding: 25,
						max: 100,
						callback: (value) => {
							return value + "%";
						},
					},
					gridLines: {
						display: false,
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

export const otherSkills = {
	type: "doughnut",
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
						display: false,
					},
					gridLines: {
						display: false,
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

export const otherSkills2 = {
	type: "radar",
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
						callback: (value) => {
							return value + "%";
						},
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

export default { frontEnd, desingSkills, otherSkills, otherSkills2 };
