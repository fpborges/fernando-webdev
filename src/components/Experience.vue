<template>
	<div class="Experience">
		<v-container class="">
			<h1 class="text-center white--text">Relevant Experiences</h1>
			<v-row>
				<v-col cols="12">
					<h2>From Canada</h2>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col md="3" v-for="(card, i) in canadaCompanies" :key="card.id">
					<v-card class="mx-auto" max-width="344">
						<a :href="card.url" target="_blank"
							><v-img :src="card.logo" height="250px"></v-img
						></a>

						<v-card-title> {{ card.companyName }} </v-card-title>

						<v-card-subtitle> {{ card.description }} </v-card-subtitle>

						<v-card-actions>
							<v-btn
								color="indigo"
								@click="$set(showCanada, i, !showCanada[i])"
								text
							>
								{{ card.jobTitle }}
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
										Work Period: <b>{{ card.workPeriod }}</b>
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
					<h2>From Brazil</h2>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col md="4" v-for="(card, i) in brazilCompanies" :key="card.id">
					<v-card class="mx-auto" max-width="400">
						<a :href="card.url" target="_blank"
							><v-img :src="card.logo" height="250px"></v-img
						></a>

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
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Experience",
		data: () => ({
			showCanada: [false, false, false, false],
			showBrazil: [false, false, false],
			canadaCompanies: [
				{
					id: "pmg",
					companyName: "PMG Intelligence",
					logo: "https://i.ibb.co/gzyF3X7/pmg.png",
					url: "https://www.pmgintelligence.com/",
					description:
						"PMG is a highly experienced market research and intelligence agency with advanced skillsets in mathematics, psychology, sociology, business, and economics.",
					jobTitle: "Web Developer",
					workPeriod: "2018 - Present",
					jobDescription:
						"Designing, developing, maintaining, and testing responsive Web-based applications. Identifying, researching, and modifying codes for best solutions. Planning and creating Web Pages Prototype. Translate UI/UX design wireframes to actual code.",
				},
				{
					id: "conestogac",
					companyName: "Conestoga College",
					logo: "https://pbs.twimg.com/profile_images/875382707647242240/01YS8FlR.jpg",
					url: "https://www.conestogac.on.ca/",
					description:
						"Conestoga is a leader in polytechnic education and one of Ontario's fastest growing colleges, delivering a full range of career-focused education, and applied research programs.",
					jobTitle: "Social Media Ambassador",
					workPeriod: "2017 - 2018",
					jobDescription:
						"Worked as Social Media Ambassador in order to connect Conestoga College to international students through content creation, social media, and digital recruitment support.",
				},
				// {
				// 	id: "toyotab",
				// 	companyName: "Toyota Boshoku",
				// 	logo: "https://www.toyota-boshoku.com/global/img/common/ogp.png",
				// 	url: "https://toyotaboshoku.ca/",
				// 	description:
				// 		"Toyota Boshoku Corporation business sites manufacture and sell automotive-related components such as automobile interior components and exterior components.",
				// 	jobTitle: "Assembler Team Member",
				// 	workPeriod: "2016",
				// 	jobDescription:
				// 		"Providing service in assembly duties, accuracy in the assembly of components. Work in fast pace environment, under pressure with tight deadlines, attention to detail to check parts for quality control.",
				// },
				// {
				// 	id: "timh",
				// 	companyName: "Tim Hortons",
				// 	logo: "https://peel.bigbrothersbigsisters.ca/wp-content/uploads/sites/160/2017/10/Tim-hortons-logo.jpg",
				// 	url: "timhortons.ca",
				// 	description:
				// 		"Tim Hortons is a multinational fast food restaurant chain. Tim Hortons serves coffee, doughnuts and other fast food items. It is Canada's largest quick-service restaurant.",
				// 	jobTitle: "Customer Services",
				// 	workPeriod: "2015",
				// 	jobDescription:
				// 		"Providing customer service, Work under pressure with tight deadlines using repetitive tasks, dispatching orders, preparing stations and preparing for revenue periods and cashier.",
				// },
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
					logo: "https://download.logo.wine/logo/Orange_(India)/Orange_(India)-Logo.wine.png",
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
