<template>
	<div class="Footer">
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
		/>
		<v-container>
			<v-row justify="center" class="mt-5">
				<v-col md="2" offset-md="2">
					<h4>WebSite Map:</h4>
					<ul>
						<li v-for="(link, id) in links" :key="id">
							<v-btn text class="white--text" :href="link.ref">{{
								link.title
							}}</v-btn>
						</li>
					</ul>
				</v-col>
				<v-col md="2" offset-md="2">
					<h4>Other Links:</h4>
					<ul>
						<li>
							<v-btn text class="white--text" href="qbord.com">
								Qbord Project
							</v-btn>
						</li>
						<li>
							<v-btn
								text
								class="white--text"
								href="https://github.com/fpborges"
							>
								GitHub
							</v-btn>
						</li>
						<li>
							<v-btn text class="white--text" href="/techstack">
								WebSite Tech Stack
							</v-btn>
						</li>
					</ul>
				</v-col>
				<v-col md="3" offset-md="1">
					Follow me on social media:
					<div class="caption">
						<a
							href="https://www.facebook.com/fernando.p.borges"
							class="fa fa-facebook"
						></a>
						<a href="https://twitter.com/NandoPBR" class="fa fa-twitter"></a>
						<a
							href="https://www.linkedin.com/in/fernandopborges/"
							class="fa fa-linkedin"
						></a>
						<a
							href="https://www.instagram.com/ferviporai/"
							class="fa fa-instagram"
						></a>
					</div>
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<v-row class="footerBottom">
				<v-col>
					<div class="caption text-center">
						&copy;{{ currentYear }} Fernando Pereira Borges. All Rigths
						Reserved.
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
		margin-top: 5%;
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
	ul {
		list-style-type: none;
	}
</style>
