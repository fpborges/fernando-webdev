<template>
	<div class="Header">
		<div class="discover">
			<v-row>
				<v-col>
					<v-hover v-slot="{ hover }" open-delay="200">
						<v-fab-transition>
							<v-btn
								:class="{ 'on-hover': hover }"
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
		background: url("https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg")
			no-repeat center center fixed !important;
		background-size: cover;
	}

	.discover {
		position: absolute;
		text-align: center;
		top: 50%;
		width: 100%;
		left: 0;
	}

	html {
		scroll-behavior: smooth;
	}
</style>
