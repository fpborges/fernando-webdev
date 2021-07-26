<template>
	<div class="TechStack">
		<v-container>
			<h3>Technologies used to build this website</h3>
			<v-card>
				<v-card-title>Technologies</v-card-title>
				<v-card-subtitle> FrontEnd </v-card-subtitle>
				<v-card-text>
					<ul>
						<li v-for="(tech, id) in techs" :key="id">
							{{ tech.name }}: {{ tech.description }}
						</li>
					</ul>
				</v-card-text>
				<v-card-actions>
					<v-btn rounded dark href="/" class="success">Back to Home</v-btn>
				</v-card-actions>
			</v-card>
		</v-container>
	</div>
</template>
<script>
	export default {
		name: "TechStack",
		data: () => ({
			techs: [
				{ name: "Vue.js", description: "Framework" },
				{ name: "Vuetify", description: "Material Design Framework" },
			],
			show: false,
		}),
	};
</script>
<style scoped></style>
