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
							<v-btn color="indigo" @click="$set(show, i, !show[i])" text>
								{{ card.jobTitle }}
							</v-btn>

							<v-spacer></v-spacer>
						</v-card-actions>

						<v-expand-transition>
							<div v-show="show[i]">
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
				{
					id: "toyotab",
					companyName: "Toyota Boshoku",
					logo: "https://www.toyota-boshoku.com/global/img/common/ogp.png",
					url: "https://toyotaboshoku.ca/",
					description:
						"Toyota Boshoku Corporation business sites manufacture and sell automotive-related components such as automobile interior components and exterior components.",
					jobTitle: "Assembler Team Member",
					workPeriod: "2016",
					jobDescription:
						"Providing service in assembly duties, accuracy in the assembly of components. Work in fast pace environment, under pressure with tight deadlines, attention to detail to check parts for quality control.",
				},
				{
					id: "timh",
					companyName: "Tim Hortons",
					logo: "https://peel.bigbrothersbigsisters.ca/wp-content/uploads/sites/160/2017/10/Tim-hortons-logo.jpg",
					url: "timhortons.ca",
					description:
						"Tim Hortons is a multinational fast food restaurant chain. Tim Hortons serves coffee, doughnuts and other fast food items. It is Canada's largest quick-service restaurant.",
					jobTitle: "Customer Services",
					workPeriod: "2015",
					jobDescription:
						"Providing customer service, Work under pressure with tight deadlines using repetitive tasks, dispatching orders, preparing stations and preparing for revenue periods and cashier.",
				},
			],
		}),
		methods: {},
	};
</script>

<style></style>
