const form = document.getElementById("myForm");

(function () {
    // Initialize EmailJS with your User ID
    emailjs.init(""); // Replace with your EmailJS user ID
})();

function sendEmail(data) {
    return emailjs
        .send("", "", {
            to_name: data.name,
            from_name: data.name,
            message: data.message,
            email: data.email,
            subject: data.subject,
        })
        .then(
            function (response) {
                // Success feedback
                document.querySelector(".alert-msg").textContent =
                    "Message sent successfully!";
                document.querySelector(".alert-msg").style.color = "green";
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                // Error feedback
                document.querySelector(".alert-msg").textContent =
                    "Something went wrong. Please try again.";
                document.querySelector(".alert-msg").style.color = "red";
                console.log("FAILED...", error);
            }
        );
}

// Handle form submission
form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form behavior

    // Capture form data
    const formData = new FormData(form);
    const formDataJson = Object.fromEntries(formData.entries());

    try {
        await sendEmail(formDataJson); // Send email
    } catch (error) {
        console.error("Error sending email:", error);
    }
});