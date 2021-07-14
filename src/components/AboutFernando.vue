<template>
	<div class="AboutFernando">
		<v-row class="mt-10" align="center" justify="center">
			<v-col cols="9">
				<h1>About me</h1>
			</v-col>
		</v-row>

		<v-container id="container">
			<v-row>
				<v-col>
					<div class="desc" v-html="description"></div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "AboutFernando",
		data: () => ({
			test: "test",
		}),
		computed: {
			...mapState("aboutFernando", ["description"]),
		},
	};
</script>

<style scoped>
	.AboutFernando {
		/* height: 100%; */
		/* margin-top: 10%;
		margin-bottom: 10%; */
	}
	#container {
		position: relative;
		border: 3px solid black;
		border-radius: 10px;
		width: 80%;
		top: 10%;
	}
	.desc {
		padding: 5%;
		/* text-align: justify; */
	}
</style>
