<template>
	<v-card class="mx-auto mt-10 mb-10" max-width="640" elevation="2" outlined>
		<v-card-title id="contact"> Contact me </v-card-title>
		<v-alert
			v-model="successAlert"
			type="success"
			dismissible
			close-text="Close Alert"
			elevation="5"
		>
			Message Submitted!
		</v-alert>
		<v-alert
			v-model="errorAlert"
			type="error"
			dismissible
			close-text="Close Alert"
			elevation="5"
		>
			Message cannot be submitted. Please try again.
		</v-alert>
		<v-alert
			v-model="warningAlert"
			type="warning"
			dismissible
			close-text="Close Alert"
			elevation="5"
		>
			Please check form validation before submit.
		</v-alert>

		<v-form
			@submit.prevent="handleSubmit"
			v-model="formValidation"
			ref="contactForm"
			name="contact-me"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			lazy-validation
		>
			<v-card-text>
				<v-text-field
					v-model="form.email"
					:rules="form.emailRules"
					name="email"
					label="Email"
				>
				</v-text-field>

				<v-text-field
					v-model="form.fullname"
					:rules="form.fullnameRules"
					name="fullname"
					label="Full name"
				>
				</v-text-field>

				<v-text-field
					v-model="form.company"
					name="company"
					label="Company name"
				>
				</v-text-field>

				<v-textarea
					v-model="form.message"
					:rules="form.messageRules"
					name="message"
					label="Leave your message here"
				>
				</v-textarea>
			</v-card-text>

			<v-divider />

			<v-card-actions>
				<v-btn
					:disabled="!formValidation"
					@click="formValidate()"
					type="submit"
					color="success"
					>Submit</v-btn
				>
			</v-card-actions>
		</v-form>
	</v-card>
</template>

<script>
	import axios from "axios";

	export default {
		name: "NetlifyForm",
		data: () => ({
			form: {
				email: "",
				emailRules: [
					(v) => !!v || "E-mail is required",
					(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
				],
				fullname: "",
				fullnameRules: [(v) => !!v || "Fullname is required"],
				company: "",
				message: "",
				messageRules: [
					(v) => !!v || "Message is required",
					(v) =>
						(v && v.length >= 10) || "Message must be more than 10 characters",
				],
			},
			formValidation: true,
			successAlert: false,
			errorAlert: false,
			warningAlert: false,
			submitValidation: true,
		}),

		methods: {
			resetForm() {
				//clean fields
				this.form.email = "";
				this.form.fullname = "";
				this.form.company = "";
				this.form.message = "";
				//reser validations
				this.$refs.contactForm.reset();
			},
			formValidate() {
				this.$refs.contactForm.validate();
				if (this.formValidation) {
					this.warningAlert = true;
				}
			},
			checkFormBeforeSubmit() {
				this.submitValidation = true;
				if (!this.form.email) {
					this.submitValidation = false;
				}
				if (!this.form.fullname) {
					this.submitValidation = false;
				}
				if (!this.form.message) {
					this.submitValidation = false;
				}
			},
			encode(data) {
				return Object.keys(data)
					.map(
						(key) =>
							`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
					)
					.join("&");
			},
			async handleSubmit() {
				const axiosConfig = {
					header: { "Content-Type": "application/x-www-form-urlencoded" },
				};
				this.checkFormBeforeSubmit();
				if (this.submitValidation) {
					await axios
						.post(
							"/",
							this.encode({
								"form-name": "contact-me",
								...this.form,
							}),
							axiosConfig
						)
						.then(() => {
							this.successAlert = true;
							this.errorAlert = false;
							this.warningAlert = false;
							this.resetForm();
						})
						.catch(() => {
							this.errorAlert = true;
							this.successAlert = false;
							this.warningAlert = false;
							this.resetForm();
						});
				}
			},
		},
	};
</script>

<style scoped></style>
