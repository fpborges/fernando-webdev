<template>
	<div class="Footer mt-10">
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
		/>
		<v-row>
			<v-col cols="4" v-for="(link, id) in links" :key="id">
				<v-btn text class="white--text" :href="link.ref">{{
					link.title
				}}</v-btn>
			</v-col>
			<v-col>
				<div class="caption">
					Follow me on social medias:<a href="#" class="fa fa-facebook"></a>
					<a href="#" class="fa fa-twitter"></a>
					<a href="#" class="fa fa-linkedin"></a>
					<a href="#" class="fa fa-instagram"></a>
				</div>
			</v-col>
		</v-row>
		<v-container>
			<v-row class="footerBottom">
				<v-col>
					<div class="caption text-center">
						&copy;All rigths reserved {{ currentYear }}. Fernando Pereira Borges
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		data: () => ({
			links: [
				{ title: "About me", ref: "#about" },
				{ title: "Experience", ref: "#experience" },
				{ title: "Skills", ref: "#skills" },
				{ title: "Projects", ref: "#projects" },
				{ title: "Hobbies", ref: "#hobbies" },
				{ title: "Contact me", ref: "#contact" },
			],
			currentYear: new Date().getFullYear(),
		}),
		methods: {},
	};
</script>

<style scoped>
	.Footer {
		background-color: black;
		color: white;
		/* min-height: 20%; */
	}

	.footerBottom {
		padding: 10px 0px 10px 0px;
	}
	.fa {
		padding: 5px;
		font-size: 30px;
		border-radius: 100%;
		width: 40px;
		text-align: center;
		text-decoration: none;
		margin: 5px 2px;
	}

	.fa:hover {
		opacity: 0.7;
	}

	.fa-facebook {
		background: #3b5998;
		color: white;
	}

	.fa-twitter {
		background: #55acee;
		color: white;
	}

	.fa-linkedin {
		background: #007bb5;
		color: white;
	}

	.fa-instagram {
		background: linear-gradient(
			45deg,
			#f58529,
			#feda77,
			#dd2a7b,
			#8134af,
			#515bd4
		);
		color: white;
	}
</style>
