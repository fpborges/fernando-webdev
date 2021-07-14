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
					{{ item }}
				</v-tab>
			</v-tabs>

			<v-spacer></v-spacer>

			<v-btn href="/about" target="_blank" text>
				<span class="mr-2">Website Info</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<v-tabs-items v-model="tab" style="background-color: #f5f5f5">
			<v-tab-item
				eager
				v-for="(item, id) in tabMenu"
				:key="id"
				transition="fade-transition"
			>
				<div v-if="id === 0">
					<AboutFernando />
				</div>
				<div v-if="id === 1">
					<HelloWorld msg="Welcome to Your Vue.js App" />
				</div>
				<div v-if="id === 2">
					<HelloWorld msg="Welcome to Your Vue.js App" />
				</div>
				<div v-if="id === 3">
					<HelloWorld msg="Welcome to Your Vue.js App" />
				</div>
				<div v-if="id === 4">
					<HelloWorld msg="Welcome to Your Vue.js App" />
				</div>
				<div v-if="id === 5">
					<NetlifyForm />
				</div>
			</v-tab-item>
		</v-tabs-items>
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
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "../components/Header.vue";
	import HelloWorld from "../components/HelloWorld.vue";
	import NetlifyForm from "../components/netlifyComponents/NetlifyForm.vue";
	import AboutFernando from "../components/AboutFernando.vue";

	export default {
		name: "Home",
		components: {
			Header,
			HelloWorld,
			NetlifyForm,
			AboutFernando,
		},
		data: () => ({
			tab: null,
			fab: false,
			tabMenu: [
				"Who is Fernando",
				"Experience",
				"Skills",
				"Projects",
				"Hobbies",
				"Contact me",
			],
		}),
		methods: {
			onScroll(e) {
				console.log("scroll");
				if (typeof window === "undefined") return;
				const top = window.pageYOffset || e.target.scrollTop || 0;
				this.fab = top > 800;
			},
		},
	};
</script>

<style>
	.home {
		height: 100vh;
	}
</style>
