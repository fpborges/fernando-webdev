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
				<v-expansion-panels popout>
					<v-expansion-panel>
						<v-expansion-panel-header
							>test
							<!-- <img
								src="https://i.ibb.co/VB0ZDcK/Globo-com-logo-stacked-svg.png"
								alt="Globo-com-logo-stacked-svg"
								border="0"
								width="50"
								height="auto"
							/> -->
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-row>
			<v-row>
				<v-col cols="12">
					<h3>Brazil</h3>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-expansion-panels popout>
					<v-expansion-panel>
						<v-expansion-panel-header>Item</v-expansion-panel-header>
						<v-expansion-panel-content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Experience",
		data: () => ({
			workExpBrazil: ["a", "b", "c"],
			workExpCanada: ["a", "b", "c"],
		}),
	};
</script>

<style></style>
