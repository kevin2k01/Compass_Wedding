function sendEmail() {
	Email.send({
		SecureToken: "3539540c-a974-4b91-b87f-d85047b1d733",
		To : "compassinfo@proton.me",
		From : 'compassweddingcompany@gmail.com',
		Subject : "Compass_Mail_Info",
		Body : 'Name: ' + document.getElementById("name").value + 'Mail: ' + document.getElementById("email").value  + 'Phone: ' + document.getElementById("phone").value + 'Message: ' + document.getElementById("message").value
 
	}).then(
		message => {
			alert("mail sent successfully");
			console.log(message);
		}
	);
}