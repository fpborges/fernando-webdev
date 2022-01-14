<template>
	<div class="Education">
		<v-container class="">
			<h1 class="text-center #0e1128--text">Education</h1>
			<v-row>
				<v-col cols="12">
					<h2>Canada</h2>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col md="4" v-for="(card, i) in canadaStudies" :key="card.id">
					<v-card class="mx-auto" max-width="400">
						<a :href="card.url" target="_blank"
							><v-img height="200" :src="card.logo"></v-img
						></a>

						<v-card-title> {{ card.institution }} </v-card-title>

						<v-card-subtitle> {{ card.description }} </v-card-subtitle>

						<v-card-actions>
							<v-btn
								color="indigo"
								@click="$set(showCanada, i, !showCanada[i])"
								text
							>
								{{ card.program }}
							</v-btn>

							<v-spacer></v-spacer>
						</v-card-actions>

						<v-expand-transition>
							<div v-show="showCanada[i]">
								<v-divider></v-divider>

								<v-card-text>
									<p class="text-h6 text--primary">
										{{ card.program }}
									</p>
									<p>
										Study Period: <b>{{ card.studyPeriod }}</b>
									</p>
									<p>{{ card.programDescription }}</p>
								</v-card-text>
							</div>
						</v-expand-transition>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<h2>From Brazil</h2>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col md="4" v-for="(card, i) in brazilStudies" :key="card.id">
					<v-card class="mx-auto" max-width="400" min-height="350">
						<a :href="card.url" target="_blank"
							><v-img :src="card.logo"></v-img
						></a>

						<v-card-title> {{ card.institution }} </v-card-title>

						<v-card-subtitle> {{ card.description }} </v-card-subtitle>

						<v-card-actions>
							<v-btn
								color="indigo"
								@click="$set(showBrazil, i, !showBrazil[i])"
								text
							>
								{{ card.program }}
							</v-btn>

							<v-spacer></v-spacer>
						</v-card-actions>

						<v-expand-transition>
							<div v-show="showBrazil[i]">
								<v-divider></v-divider>

								<v-card-text>
									<p class="text-h6 text--primary">
										{{ card.program }}
									</p>
									<p>
										Work Period: <b>{{ card.studyPeriod }}</b>
									</p>
									<p>{{ card.programDescription }}</p>
								</v-card-text>
							</div>
						</v-expand-transition>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Education",
		data: () => ({
			showCanada: [false],
			showBrazil: [false, false, false],
			canadaStudies: [
				{
					id: "conestoga",
					institution: "Conestoga College",
					logo: "https://www.vmcdn.ca/f/files/kitchenertoday/images/education/conestoga-college.jpg",
					url: "https://www.conestogac.on.ca/",
					description:
						"PMG is a highly experienced market research and intelligence agency with advanced skillsets in mathematics, psychology, sociology, business, and economics.",
					program: "Computer Programmer Analyst",
					studyPeriod: "2015 - 2018",
					programDescription:
						"The program emphasizes problem-solving skills using the latest versions of Microsoft, Oracle, Java and open-source software to develop enterprise, internet and mobile applications. Object-oriented analysis, design, agile methodologies and programming techniques are mastered and applied throughout the program.",
				},
			],
			brazilStudies: [
				{
					id: "veiga",
					institution: "Veiga de Almeida",
					logo: "https://www.mundodomarketing.com.br/mundodomarketing/images/materias/logo_UVA_em_alta.jpg",
					url: "https://www.uva.br/",
					description: "",
					program: "Business Administration",
					studyPeriod: "2010 - 2013",
					programDescription: "Post-Secondary",
				},
				{
					id: "cefet",
					institution: "Cefet-RJ",
					logo: "https://hybridformslab.files.wordpress.com/2019/03/cefet-rj.jpg",
					url: "http://www.cefet-rj.br/",
					description: "",
					program: "Internet Systems Technology",
					studyPeriod: "2003 - 2009",
					programDescription: "Post-secondary",
				},
			],
		}),
		methods: {},
	};
</script>

<style></style>
