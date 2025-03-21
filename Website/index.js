function sendMail(event) {
    event.preventDefault(); // Prevent form submission and page reload

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,  // Include subject field
        message: document.getElementById("message").value
    };

    const serviceID = "service_pxyjpis";
    const templateID = "template_w2dver9";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = ""; // Clear subject field
            document.getElementById("message").value = "";

            console.log("Success:", res);
            alert("Message Sent!");
        })
        .catch(err => {
            console.log("Error:", err);
            alert("Failed to send message. Please try again.");
        });
}
