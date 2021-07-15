<template>
	<div class="Experience">
		<v-container class="mt-10">
			<h1>List of Experiences</h1>
			<v-row>
				<v-col cols="12">
					<h3>Canada</h3>
				</v-col>
				<v-col>
					<ul>
						<li v-for="(item, id) in workExpCanada" :key="id">
							{{ item }}
						</li>
					</ul>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<h3>Brazil</h3>
				</v-col>
				<v-col>
					<ul>
						<li v-for="(item, id) in workExpBrazil" :key="id">
							{{ item }}
						</li>
					</ul>
				</v-col>
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
