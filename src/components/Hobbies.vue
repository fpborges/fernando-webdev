<template>
	<div class="Hobbies">
		<v-container>
			<v-row>
				<v-col cols="md-12">
					<div>
						<v-card elevation="2">Games</v-card>
					</div>
				</v-col>
				<v-col cols="md-6">
					<div>
						<v-card elevation="2">Astronomy</v-card>
					</div>
				</v-col>
				<v-col cols="md-6">
					<div>
						<v-card elevation="2">Soccer</v-card>
					</div>
				</v-col>
				<v-col cols="md-3">
					<div>
						<v-card elevation="2">Traveling</v-card>
					</div>
				</v-col>
				<v-col cols="md-3">
					<div>
						<v-card elevation="2">Snowboarding</v-card>
					</div>
				</v-col>
				<v-col cols="md-3">
					<div>
						<v-card elevation="2">Animes</v-card>
					</div>
				</v-col>
				<v-col cols="md-3">
					<div>
						<v-card elevation="2">Hiking / Walking</v-card>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Hobbies",
		data: () => ({
			test: "test",
		}),
		methods: {},
	};
</script>

<style></style>
