const nodemailer = require("nodemailer");
const SibApiV3 = require("sib-api-v3-sdk");

const sendEmail = (email, phone, firstname, lastname, subject, message) => {
	return new Promise(async (resolve, reject) => {
		if (!email && !name && !subject && !message) {
			reject(false);
		}

		message =
			`<b>Name:</b> ${firstname} ${lastname}\n<b>Number:</b> ${phone}\n\n<b>Message:</b>\n` +
			message;
		// auth and setup
		let key = process.env.SIB_KEY;
		let defaultClient = SibApiV3.ApiClient.instance;
		let apiKey = defaultClient.authentications["api-key"];
		apiKey.apiKey = key;

		// call SIB api
		var apiInstance = new SibApiV3.TransactionalEmailsApi();
		var sendSmtpEmail = new SibApiV3.SendSmtpEmail();

		sendSmtpEmail = {
			sender: { email: email },
			to: [
				{
					email: "cwlogworks@gmail.com",
					name: `${firstname} ${lastname}`,
				},
			],
			subject: subject,
			textContent: message,
		};
		apiInstance
			.sendTransacEmail(sendSmtpEmail)
			.then(() => {
				console.log(`Email from ${email} sent to Crooked Waters`);
			})
			.catch((error) => {
				console.error(error);
			});

		resolve(true);
	});
};

module.exports = {
	sendEmail: sendEmail,
};
