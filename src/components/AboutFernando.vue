<template>
	<div class="AboutFernando">
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

			testArray: ["te", "we", "fef"],
		}),
		computed: {
			...mapState("aboutFernando", ["description"]),
		},
	};
</script>

<style scoped>
	.AboutFernando {
		height: 100%;
		margin-top: 10%;
		margin-bottom: 10%;
	}
	#container {
		position: relative;
		border: 3px solid black;
		border-radius: 50%;
		width: 60%;
		top: 10%;
	}
	.desc {
		padding: 10%;
		/* text-align: justify; */
	}
</style>
