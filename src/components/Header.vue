<template>
	<div class="header">
		<div class="discover">
			<v-row>
				<v-col>
					<v-btn class="primary">Learn About me</v-btn>
					<v-btn class="mx-2" fab dark large color="purple">
						<v-icon dark> mdi-android </v-icon>
					</v-btn>
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
</style>
