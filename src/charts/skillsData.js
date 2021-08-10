import Chart from "chart.js"; //import Chart for global properties

//Set global animation duration
Chart.defaults.global.animation.duration = 3000;
Chart.defaults.global.legend.display = false;

var barDataSet = [90, 80, 85, 65, 75, 40, 70, 95, 70, 60];

function randomColors() {
	let barColors = [];

	let dynamicColors = () => {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		return "rgba(" + r + "," + g + "," + b + ", 0.3)";
	};

	barDataSet.forEach(() => {
		barColors.push(dynamicColors());
	});

	return barColors;
}

export const frontEnd = {
	type: "horizontalBar",
	data: {
		labels: [
			"HTML5/CSS3",
			"Javascript",
			"Vue.js",
			"Jquery",
			"WordPress",
			"Restful APIs",
			"UI/UX",
			"UI library/framework",
			"Git",
			"Testing",
		],
		datasets: [
			{
				label: "",
				data: barDataSet,
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

export const desingSkills = {
	type: "line",
	data: {
		labels: [
			"Mercury",
			"Venus",
			"Earth",
			"Mars",
			"Jupiter",
			"Saturn",
			"Uranus",
			"Neptune",
		],
		datasets: [
			{
				label: "Number of Moons",
				data: [0, 0, 1, 2, 79, 82, 27, 14],
				backgroundColor: "rgba(54,73,93,.5)",
				borderColor: "#36495d",
				borderWidth: 3,
			},
			{
				label: "Planetary Mass (relative to the Sun x 10^-6)",
				data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
				backgroundColor: "rgba(71, 183,132,.5)",
				borderColor: "#47b784",
				borderWidth: 3,
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
					},
				},
			],
		},
	},
};
var delayed;
export const myChart = {
	type: "horizontalBar",
	data: {
		labels: ["Javascript"],
		datasets: [
			{
				label: "Users Sources",
				data: [56],
				// backgroundColor: "#2f3c5a",
				// borderColor: "#2f3c5a",
				// borderWidth: 1,
				// hoverBorder: 1,
				// hoverBorderColor: "rgba(180, 181, 183)",
				// categoryPercentage: 1.0,
				backgroundColor: "#2f3c5a",
				borderColor: "#2f3c5a",
				borderWidth: 1,
				hoverBorder: 1,
				hoverBorderColor: "rgba(180, 181, 183)",
				barThickness: 50,
			},
		],
	},
	options: {
		tooltips: {
			mode: "index",
			axis: "y",
		},
		animation: {
			onComplete: () => {
				delayed = true;
			},

			delay: (context) => {
				let delay = 0;
				if (context.type === "data" && context.mode === "default" && !delayed) {
					delay = context.dataIndex * 300 + context.datasetIndex * 100;
				}
				return delay;
			},
		},

		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: false,
						max: 100,
					},
					gridLines: {
						display: false,
					},
				},
			],
			xAxes: [
				{
					ticks: {
						beginAtZero: true,
						max: 100,
						stepSize: 10,
						callback: function (value) {
							return value + "%";
						},
					},
					scaleLabel: {
						display: true,
						labelString: "Knowledge Level",
					},
					gridLines: {
						display: false,
					},
				},
			],
		},
	},
};

export const mySkills = {
	type: "horizontalBar",
	data: {
		labels: ["HTML5"],
		datasets: [
			{
				label: "asdasd",
				data: [34],
				borderWidth: 1,
				hoverBackgroundColor: "rgba(232,105,90,0.8)",
				hoverBorderColor: "orange",
				barThickness: 50,

				backgroundColor: [
					"rgba(64, 71, 86, 0.8)",
					"rgba(149, 80, 140, 0.8)",
					"rgba(149, 245, 140, 0.8)",
					"rgba(101, 63, 0, 0.8)",
					"rgba(72, 151, 246, 0.8)",
					"rgba(0, 138, 96, 0.8)",
					"rgba(124, 145, 188, 0.8)",
					"rgba(229, 119, 55, 0.8)",
					"rgba(64, 71, 86, 0.8)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(153, 102, 255)",
					"rgb(201, 203, 207)",
				],

				hoverBorder: 2,
			},
		],
	},
	options: {
		legend: {
			labels: {
				fontColor: "blue",
				color: "red",
				fontSize: 18,
			},
		},
		scales: {
			yAxes: [
				{
					gridLines: {
						display: false,
						drawBorder: false,
					},
				},
			],
			xAxes: [
				{
					ticks: {
						beginAtZero: true,
						max: 100,
						stepSize: 10,
						callback: function (value) {
							return value + "%";
						},
					},
					gridLines: {
						display: false,
					},
				},
			],
		},
	},
};

function randCol() {
	frontEnd.data.datasets[0].backgroundColor = randomColors();

	frontEnd.update();

	console.log(frontEnd.data.datasets[0].backgroundColor);
	// frontEnd.data.datasets.forEach((dataset) => {
	// 	dataset.data.pop();
	// });
	// frontEnd.update();
}

export default { myChart, mySkills, frontEnd, randCol };
