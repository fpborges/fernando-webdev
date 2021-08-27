<template>
	<div class="Projects">
		<v-container>
			<v-row>
				<v-col class="text-center">
					<h2>Live Projects</h2>
					<div class="dot"></div>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<h4>QBORD</h4>
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
