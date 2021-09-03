<template>
	<div class="Hobbies">
		<v-container>
			<v-row>
				<v-col cols="md-12">
					<div>
						<v-card elevation="2">
							<img
								src="https://i.pcmag.com/imagery/articles/00DDUM2F1UuVX1ciAvfJqM3-9..1623763322.jpg"
							/>
							<v-card-title>Games</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-6">
					<div>
						<v-card elevation="2">
							<img
								src="https://images.immediate.co.uk/production/volatile/sites/4/2021/01/astronomy-beginners-uk-7f589e4.jpg"
							/>
							<v-card-title>Astronomy</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-6">
					<div>
						<v-card elevation="2">
							<img
								src="https://www.thamescentre.on.ca/sites/default/files/styles/open_graph_image/public/images/2019-06/xxxx_spo_ocr-l-soccer-generic-stock-001-5.jpg?h=c00a0a28&itok=quh8lLR1"
							/>
							<v-card-title>Soccer</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-3">
					<div>
						<v-card elevation="2">
							<img
								src="https://preview.pixlr.com/images/800wm/1205/1/12051377639.jpg"
							/>
							<v-card-title>Traveling</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-3">
					<div>
						<v-card elevation="2">
							<img
								src="https://activesafe.ca/wp-content/uploads/2018/04/snowboarding-corrected-01-01-01.png"
							/>
							<v-card-title>Snowboarding</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-3">
					<div>
						<v-card elevation="2">
							<img
								src="https://lh3.googleusercontent.com/proxy/oW2SB4gaa51t1djTXdKs8nxPP7dsqUWOsW8E8HLNASYilowZLXN8PapKNm2I1JZwj723xo32XFFMBuDWDOnP5vqE8fWlJJfP7vbjrEtiaOPLwtu1UdZX1S9UEJhLzDhj_To6gktbCA"
							/>
							<v-card-title>Animes</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-3">
					<div>
						<v-card elevation="2">
							<img
								src="https://media.istockphoto.com/videos/stick-figure-pictogram-man-hiking-trail-walking-character-flat-video-id1132947200?s=640x640"
							/>
							<v-card-title>Hiking/Walking</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-4">
					<div>
						<v-card elevation="2">
							<img
								src="https://cdn.akamai.steamstatic.com/steam/apps/312450/header.jpg?t=1621855135"
							/>
							<v-card-title>History</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-4">
					<div>
						<v-card elevation="2">
							<img
								src="https://itchronicles.com/wp-content/uploads/2021/01/technology-impact-on-life-1024x566.jpg"
							/>
							<v-card-title>Technology</v-card-title>
						</v-card>
					</div>
				</v-col>
				<v-col cols="md-4">
					<div>
						<v-card elevation="2">
							<img
								src="https://www.reviewsxp.com/blog/wp-content/uploads/2020/01/best-social-networking-sites-850x491.jpg"
							/>
							<v-card-title>Social Media</v-card-title>
						</v-card>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Hobbies",
		data: () => ({
			test: "test",
		}),
		methods: {},
	};
</script>

<style scoped>
	img {
		width: 100%;
		height: auto;
	}
</style>
