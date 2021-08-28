<template>
	<div class="Projects">
		<v-container>
			<v-row justify="center" no-gutters>
				<v-col md="auto">
					<h2>Live Projects</h2>
					<div class="dot"></div>
					<!-- <v-card class="pa-2"> Live Projects </v-card><span class="dot"></span> -->
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<h3>Web Applications</h3>
					<div class="desktop">
						<div class="content">
							<a href="https://www.qbord.com/" target="blank">
								<img
									src="https://i.ibb.co/7jBMh69/qbord2.jpg"
									style="border: none; height: 100%; margin-left: 2%"
							/></a>
						</div>
					</div>
				</v-col>
			</v-row>
			<v-row class="mt-10">
				<h3>GitHub</h3>
				<v-col>
					<p>Word Scrumble</p>
					<a href="https://github.com/fpborges/Word_Scramble_WCF_Project.git">
						<img
							src="https://word.tips/pictures/d45ff610-e6f5-4f4c-a04e-1e1bc3c3bd1a_scramble_words.jpg?auto=compress,format"
					/></a>
				</v-col>
				<v-col>
					<p>Exp Trip mobile app</p>
					<a href="https://github.com/fpborges/ExpTrip.git">
						<img
							src="https://github.com/fpborges/ExpTrip/blob/master/images/img_welcome.jpg?raw=true"
							height="400"
					/></a>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Projects",
		data: () => ({
			test: "test",
		}),
	};
</script>

<style scoped>
	h2 {
		float: left;
	}
	.dot {
		height: 15px;
		width: 15px;
		border-radius: 100%;
		border: 1px solid grey;
		background-color: chartreuse;
		float: left;
		margin-top: 5px;
		margin-left: 5px;
	}

	.previewOnScreen {
		margin-left: 10%;
	}
	/* The desktop with borders */
	.desktop {
		content: "";
		position: relative;
		left: 15%;
		width: 750px;
		height: 500px;
		border-radius: 6px;
		border-style: solid;
		border-color: black;
		border-width: 24px 24px 80px;
		background-color: black;
	}

	/* The top of the keyboard */
	.desktop:before {
		content: "";
		display: block;
		position: absolute;
		width: 250px;
		height: 30px;
		bottom: -110px;
		left: 50%;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		background: #f1f1f1;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		z-index: 1;
	}

	/* The screen (or content) of the device */
	.desktop .content {
		width: 700px;
		height: 450px;
		overflow: hidden;
		border: none;
		background: white;
	}
</style>
