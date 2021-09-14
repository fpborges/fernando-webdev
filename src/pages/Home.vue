<template>
	<div class="home">
		<Header />

		<v-app-bar
			id="menu"
			shrink-on-scroll
			fade-img-on-scroll
			style="background-color: white"
		>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://i.ibb.co/ryfMqQF/me.jpg"
					width="40"
				/>
			</div>

			<v-tabs v-model="tab" centered align-with-title>
				<v-tabs-slider color="#311B92"></v-tabs-slider>
				<v-tab v-for="(item, index) in tabMenu" :key="index">
					<a :href="'#' + item.id">{{ item.title }}</a>
				</v-tab>
			</v-tabs>

			<v-spacer></v-spacer>

			<v-btn href="/techstack" target="_blank" text>
				<span class="mr-2">Website Info</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<!-- <div>
			<v-toolbar>
				<v-app-bar-nav-icon></v-app-bar-nav-icon>

				<v-toolbar-title>Vuetify</v-toolbar-title>

				<v-spacer></v-spacer>

				<v-btn icon>
					<v-icon>mdi-export</v-icon>
				</v-btn>
			</v-toolbar>
		</div> -->
		<v-btn
			v-scroll="onScroll"
			v-show="fab"
			fab
			dark
			fixed
			top
			left
			color="primary"
		>
			<v-icon>mdi-menu</v-icon>
		</v-btn>

		<div :id="tabMenu[0].id">
			<AboutFernando />
		</div>
		<div :id="tabMenu[1].id">
			<Experience />
		</div>
		<div :id="tabMenu[2].id">
			<Skills />
		</div>
		<div :id="tabMenu[3].id">
			<Projects />
		</div>
		<div :id="tabMenu[4].id">
			<Hobbies />
		</div>
		<div :id="tabMenu[5].id">
			<NetlifyForm />
		</div>
		<v-btn
			v-scroll="onScroll"
			v-show="fab"
			fab
			dark
			fixed
			bottom
			right
			color="primary"
			href="#menu"
		>
			<v-icon>mdi-arrow-up</v-icon>
		</v-btn>
		<Footer />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "../components/Header.vue";
	// import HelloWorld from "../components/HelloWorld.vue";
	import NetlifyForm from "../components/netlifyComponents/NetlifyForm.vue";
	import AboutFernando from "../components/AboutFernando.vue";
	import Experience from "../components/Experience.vue";
	import Projects from "../components/Projects.vue";
	import Skills from "../components/Skills.vue";
	import Hobbies from "../components/Hobbies.vue";
	import Footer from "../components/Footer.vue";

	export default {
		name: "Home",
		components: {
			Header,
			// HelloWorld,
			NetlifyForm,
			AboutFernando,
			Experience,
			Projects,
			Skills,
			Hobbies,
			Footer,
		},
		data: () => ({
			tab: null,
			fab: false,
			tabMenu: [
				{ title: "Who is Fernando", id: "aboutf" },
				{ title: "Experience", id: "expf" },
				{ title: "Skills", id: "skillsf" },
				{ title: "Projects", id: "projf" },
				{ title: "Hobbies", id: "hobbyf" },
				{ title: "Contact me", id: "contactf" },
			],
		}),
		methods: {
			onScroll(e) {
				console.log("scroll");
				if (typeof window === "undefined") return;
				const top = window.pageYOffset || e.target.scrollTop || 0;
				this.fab = top > 750;
			},
		},
	};
</script>

<style>
	.home {
		height: 100vh;
	}

	#aboutf {
		background-color: #f5f5f5;
		padding: 5%;
	}
	#expf {
		background-color: #eeeeee;
		padding: 5%;
	}
	#skillsf {
		background-color: #f5f5f5;
		padding: 5%;
	}
	#projf {
		background-color: #eeeeee;
		padding: 5%;
	}
	#hobbyf {
		background-color: #f5f5f5;
		padding: 5%;
	}
	#contactf {
		background-color: #eeeeee;
		padding: 5%;
	}
	a:link {
		text-decoration: none;
	}
</style>
