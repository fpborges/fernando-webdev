<template>
	<div class="home">
		<Header />

		<v-app-bar id="menu" shrink-on-scroll fade-img-on-scroll>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
					transition="scale-transition"
					width="40"
				/>

				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
					width="100"
				/>
			</div>

			<v-tabs v-model="tab" centered align-with-title>
				<v-tabs-slider color="red"></v-tabs-slider>
				<v-tab v-for="(item, index) in tabMenu" :key="index">
					{{ item }}
				</v-tab>
			</v-tabs>

			<v-spacer></v-spacer>

			<v-btn href="/about" target="_blank" text>
				<span class="mr-2">Fernando Test</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<v-tabs-items v-model="tab">
			<v-tab-item
				eager
				v-for="(item, id) in tabMenu"
				:key="id"
				transition="scale-transition"
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
			tabMenu: [
				"Who is Fernando",
				"Experience",
				"Skills",
				"Projects",
				"Hobbies",
				"Contact me",
			],
		}),
	};
</script>

<style>
	.home {
		height: 100vh;
	}
</style>
