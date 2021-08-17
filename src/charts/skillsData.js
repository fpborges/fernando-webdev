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

const toolTipPercent = {
	label: function (tooltipItem, data) {
		var value = data.datasets[0].data[tooltipItem.index];
		return "experience: " + value + "%";
	},
};

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
		responsive: true,
		aspectRatio: 2,
		legend: {
			display: false,
		},
		animation: {
			duration: 3000,
		},
		tooltips: {
			callbacks: toolTipPercent,
		},
		scales: {
			xAxes: [
				{
					ticks: {
						beginAtZero: true,
						max: 100,
						stepSize: 20,
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
		tooltips: {
			callbacks: toolTipPercent,
		},
		aspectRatio: 2,
		responsive: true,
		scales: {
			xAxes: [
				{
					ticks: {
						beginAtZero: true,
						max: 100,
						stepSize: 20,
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
				backgroundColor: "#64B5F6",
				borderColor: "#0D47A1",
				borderWidth: 3,

				pointRadius: 5,
				pointBackgroundColor: "#0D47A1",
				hitRadius: 5,
			},
		],
	},
	options: {
		legend: {
			display: false,
		},
		tooltips: {
			callbacks: toolTipPercent,
		},
		responsive: true,
		aspectRatio: 2,
		lineTension: 1,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						padding: 25,
						stepSize: 20,
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
	type: "polarArea",
	data: {
		datasets: [
			{
				label: "",
				data: [35, 55, 15, 65, 70, 85, 40, 90],
				backgroundColor: randomColors(),
				borderColor: "white",
				borderWidth: 3,
			},
		],
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
	},
	options: {
		responsive: true,
		lineTension: 1,
		aspectRatio: 2,
		legend: {
			display: false,
		},
		tooltips: {
			callbacks: {
				label: function (tooltipItem, data) {
					let value = data.datasets[0].data[tooltipItem.index];
					let label = data.labels[tooltipItem.index];
					return label + ": " + value + "%";
				},
			},
		},
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
