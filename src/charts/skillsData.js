export const planetChartData = {
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

export const myChart = {
	type: "horizontalBar",
	data: {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				axis: "y",
				label: "My First Dataset",
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: false,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(201, 203, 207, 0.2)",
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
				borderWidth: 1,
			},
		],

		options: {
			indexAxis: "y",
			scales: {
				xAxes: [
					{
						stacked: true,
					},
				],
				yAxes: [
					{
						stacked: true,
					},
				],
			},
		},
	},
};

export default { planetChartData, myChart };
