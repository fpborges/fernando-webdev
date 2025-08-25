<template>
	<div class="Header">
		<div class="discover">
			<v-row>
				<v-col>
					<p id="welcome">Hi, I am Fernando Borges!</p>
					<v-hover v-slot="{ hover }" open-delay="200">
						<v-fab-transition>
							<v-btn
								:class="{ 'on-hover': hover }"
								id="top-button"
								fab
								dark
								x-large
								:color="hover ? 'white' : 'primary'"
								href="#menu"
							>
								<img
									v-if="hover"
									src="https://i.ibb.co/ryfMqQF/me.jpg"
									alt="me"
									border="0"
								/>
								<span v-else>About me</span>
							</v-btn>
						</v-fab-transition>
					</v-hover>
					<!-- <v-img src="D:\Projects\fernando-webdev\src\assets\me.JPG" /> -->
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data: () => ({
			show: false,
		}),
	};
</script>

<style>
	.Header {
		height: 100%;
		margin: 0;
		/* background: url("https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg")
			no-repeat center center fixed !important; */
		background: url("https://i.ibb.co/HVq4G2D/keyboard-darknew22.jpg") no-repeat
			center center fixed !important;
		background-size: cover;
	}

	.discover {
		position: absolute;
		text-align: center;
		top: 40%;
		width: 100%;
		left: 0;
	}

	html {
		scroll-behavior: smooth;
	}
	#top-button {
		width: 95px;
		height: 95px;
	}
	#welcome-text {
		margin-bottom: -50px;
	}
	#welcome {
		font-weight: 700;
		text-align: center;
		font-size: 40px;
		font-family: Hack, sans-serif;
		text-transform: uppercase;
		/* background: linear-gradient(90deg, #000, #fff, #000); */

		letter-spacing: 5px;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-repeat: no-repeat;
		background-size: 80%;
		animation: pulse 10s linear infinite;
		position: relative;
	}

	/* @keyframes pulse {
		0% {
			background-position-x: -500%;
		}
		100% {
			background-position-x: 500%;
		}
	} */

	@keyframes pulse {
		0% {
			background-color: silver;
		}
		25% {
			background-color: gold;
		}
		50% {
			background-color: rgb(80, 162, 255);
		}
		75% {
			background-color: gold;
		}
		100% {
			background-color: silver;
		}
	}
</style>
