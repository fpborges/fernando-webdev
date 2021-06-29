<template>
	<div class="home">
		<Header />

		<v-app-bar color="primary" dark>
			<div class="d-flex align-center" id="menu">
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

			<v-spacer></v-spacer>

			<v-btn href="/about" target="_blank" text>
				<span class="mr-2">Fernando Test</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>
		<HelloWorld msg="Welcome to Your Vue.js App" />

		<NetlifyForm />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "../components/Header";
	import HelloWorld from "../components/HelloWorld";
	import NetlifyForm from "../components/netlifyComponents/NetlifyForm";

	export default {
		name: "Home",
		components: {
			Header,
			HelloWorld,
			NetlifyForm,
		},
		mounted() {
			console.log("test");
		},
	};
</script>

<style>
	.home {
		height: 100vh;
	}
</style>
