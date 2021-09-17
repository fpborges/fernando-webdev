<template>
	<div class="Education">
		<v-container class="">
			<h1 class="text-center">Education</h1>
			<v-row>
				<v-col cols="12">
					<h2>Canada</h2>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col md="3" v-for="(card, i) in canadaStudies" :key="card.id">
					<v-card class="mx-auto" max-width="344">
						<v-img :src="card.logo" height="200px"></v-img>

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
										{{ card.jobTitle }}
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
			<!-- <v-row>
				<v-col cols="12">
					<h2>From Brazil</h2>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col md="3" v-for="(card, i) in brazilCompanies" :key="card.id">
					<v-card class="mx-auto" max-width="344">
						<v-img :src="card.logo" height="200px"></v-img>

						<v-card-title> {{ card.companyName }} </v-card-title>

						<v-card-subtitle> {{ card.description }} </v-card-subtitle>

						<v-card-actions>
							<v-btn
								color="indigo"
								@click="$set(showBrazil, i, !showBrazil[i])"
								text
							>
								{{ card.jobTitle }}
							</v-btn>

							<v-spacer></v-spacer>
						</v-card-actions>

						<v-expand-transition>
							<div v-show="showBrazil[i]">
								<v-divider></v-divider>

								<v-card-text>
									<p class="text-h6 text--primary">
										{{ card.jobTitle }}
									</p>
									<p>
										Work Period: <b>{{ card.workPeriod }}</b>
									</p>
									<p>{{ card.jobDescription }}</p>
								</v-card-text>
							</div>
						</v-expand-transition>
					</v-card>
				</v-col>
			</v-row> -->
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
			brazilCompanies: [
				{
					id: "ibm",
					companyName: "IBM Brazil",
					logo: "https://www.corporate-eye.com/main/wp-content/uploads/2010/08/ibm-logo-7.jpg",
					url: "https://www.ibm.com/",
					description:
						"International Business Machines Corporation is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries",
					jobTitle: "Technical Support Expert System",
					workPeriod: "2011 - 2014",
					jobDescription:
						"Controlled and managed internal system access. Supported and created Excel formulas and Macros. Supported Fiscal Operations Team with tools and IT solutions",
				},
				{
					id: "orangeb",
					companyName: "Orange Business Services",
					logo: "https://www.bisinfotech.com/wp-content/uploads/2015/03/Orange-Business-Services.jpg",
					url: "https://www.orange.com/en",
					description:
						"Orange Business Services, the business services arm of Orange S.A., is a global integrator of communications products and services for multinational corporations.",
					jobTitle: "IT Business Analyst Internship",
					workPeriod: "2010 - 2011",
					jobDescription:
						"Analyzed procedures in SQL. Built layouts for processes involving business and technology analysis. Created and mapping performance report. Developed weekly and monthly reports.",
				},
				{
					id: "globo",
					companyName: "Globo",
					logo: "https://gkpb.com.br/wp-content/uploads/2020/12/novo-logo-globo-completo-8-cores-2021.jpg",
					url: "https://www.globo.com/",
					description:
						"TV Globo, known as Rede Globo, is a Brazilian free-to-air television network, launched by media proprietor Roberto Marinho on 26 April 1965. It is owned by media conglomerate Grupo Globo.",
					jobTitle: "Software Tester",
					workPeriod: "2007 - 2008",
					jobDescription:
						"Developed Web test cases. Identified, documented and reported bugs. Developed and designed functional, integration and exploratory testing. Reported and documented Web tests and metrics.",
				},
			],
		}),
		methods: {},
	};
</script>

<style></style>
