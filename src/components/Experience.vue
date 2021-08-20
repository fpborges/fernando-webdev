<template>
	<div class="Experience">
		<v-container class="mt-10">
			<h1>List of Experiences</h1>
			<v-row>
				<v-col cols="12">
					<h3>Canada</h3>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col md="3" v-for="(card, i) in canadaCompanies" :key="card.id">
					<v-card class="mx-auto" max-width="344">
						<v-img :src="card.logo" height="200px"></v-img>

						<v-card-title> {{ card.companyName }} </v-card-title>

						<v-card-subtitle> {{ card.description }} </v-card-subtitle>

						<v-card-actions>
							<v-btn
								color="orange lighten-2"
								@click="$set(show, i, !show[i])"
								text
							>
								Explore
							</v-btn>

							<v-spacer></v-spacer>

							<!-- <v-btn icon @click="show = !show">
								<v-icon>{{
									show ? "mdi-chevron-up" : "mdi-chevron-down"
								}}</v-icon>
							</v-btn> -->
						</v-card-actions>

						<v-expand-transition>
							<div v-show="show[i]">
								<v-divider></v-divider>

								<v-card-text>
									<p class="text-h5 text--primary">
										{{ card.jobTitle }}
									</p>
									<p>{{ card.jobDescription }}</p>
								</v-card-text>
							</div>
						</v-expand-transition>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<h3>Brazil</h3>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col md="3" v-for="card in 4" :key="card">
					<v-card>
						<v-card-title> test </v-card-title>
						<v-card-text> text test </v-card-text>
						<v-card-actions>
							<v-btn text>Expand</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Experience",
		data: () => ({
			show: [false, false, false, false],
			canadaCompanies: [
				{
					id: "pmg",
					companyName: "PMG Intelligence",
					logo: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
					url: "timhortons.ca",
					description: "Cafe store",
					jobTitle: "Customer Services",
					jobDescription: "Public service",
				},
				{
					id: "conestogac",
					companyName: "Conestoga College",
					logo: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
					url: "timhortons.ca",
					description: "Cafe store",
					jobTitle: "Customer Services",
					jobDescription: "Public service",
				},
				{
					id: "toyotab",
					companyName: "Toyota Boshoku",
					logo: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
					url: "timhortons.ca",
					description: "Cafe store",
					jobTitle: "Customer Services",
					jobDescription: "Public service",
				},
				{
					id: "timh",
					companyName: "Tim Hortons",
					logo: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
					url: "timhortons.ca",
					description: "Cafe store",
					jobTitle: "Customer Services",
					jobDescription: "Public service",
				},
			],
		}),
		methods: {},
	};
</script>

<style></style>
