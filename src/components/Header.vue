<template>
	<div class="header">
		<div class="discover">
			<v-row>
				<v-col>
					<v-hover v-slot="{ hover }" open-delay="200">
						<v-fab-transition>
							<v-btn
								:class="{ 'on-hover': hover }"
								:fab="hover ? true : false"
								dark
								large
								:color="hover ? 'green' : 'primary'"
							>
								<v-icon v-if="hover" dark> mdi-android </v-icon>
								<v-span v-else>About me!</v-span>
							</v-btn>
						</v-fab-transition>
					</v-hover>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: "header",
		data: () => ({
			show: false,
		}),
	};
</script>

<style>
	.header {
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

	.on-hover {
	}
</style>
