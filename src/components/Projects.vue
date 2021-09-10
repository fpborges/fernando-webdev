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
				<h2>Web Applications</h2>
				<v-col>
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

			<v-divider class="divider"></v-divider>

			<v-row class="mt-10">
				<h2>GitHub</h2>
				<v-col>
					<v-card class="mx-auto" max-width="400">
						<a href="https://github.com/fpborges/Word_Scramble_WCF_Project.git">
							<v-img
								class="white--text align-end"
								height="200px"
								src="https://word.tips/pictures/d45ff610-e6f5-4f4c-a04e-1e1bc3c3bd1a_scramble_words.jpg?auto=compress,format"
							>
								<v-card-title class="card-title">Word Scrumble</v-card-title>
							</v-img>
						</a>

						<v-card-subtitle class="pb-0"> About </v-card-subtitle>

						<v-card-text class="text--primary">
							<div>
								This project is a multi-player version of a WordScramble game
								and consists of two Visual Studio projects: the service
								application (a WCF library) and the client app (console app).
								WCF multi-player Client and Service applications. To play the
								game with multiple users launch the service in Visual Studio and
								launch the client app on Windows Explore…
							</div>
						</v-card-text>

						<v-card-actions> </v-card-actions>
					</v-card>
				</v-col>
				<v-divider vertical></v-divider>
				<v-col>
					<v-card class="mx-auto" max-width="400">
						<a href="https://github.com/fpborges/ExpTrip.git">
							<v-img
								class="white--text align-end"
								height="200px"
								src="https://github.com/fpborges/ExpTrip/blob/master/images/img_welcome.jpg?raw=true"
							>
								<v-card-title class="card-title"
									>Exp Trip mobile app</v-card-title
								>
							</v-img>
						</a>

						<v-card-subtitle class="pb-0"> About </v-card-subtitle>

						<v-card-text class="text--primary">
							<div>
								This is an Android app project that helps people to organize
								travels. Some features and database changes to be made.
							</div>
						</v-card-text>

						<v-card-actions> </v-card-actions>
					</v-card>
				</v-col>
				<v-col cols="12">
					<a href="https://github.com/fpborges" style="color: white"
						><h2>Other Projects on GitHub...</h2></a
					>
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
	.divider {
		margin-top: 5%;
	}
	.card-title {
		-webkit-text-stroke: 1px black; /* width and color */
		color: white;
		font-size: 25px;
		font-weight: 900;
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
		/* left: 10%; */
		width: 350px;
		height: 250px;
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
		width: 150px;
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
		width: 300px;
		height: 200px;
		overflow: hidden;
		border: none;
		background: white;
	}
</style>
