document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        const formData = {
            firstName: document.getElementById("firstName").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            dob: document.getElementById("dob").value,
            password: document.getElementById("pass").value,
            state: document.getElementById("state").value,
            year: document.querySelector("input[name='Year']:checked")?.value || "",
            agree: document.getElementById("Agree").checked,
            comments: document.getElementById("comments").value.trim(),
        };

        console.log("Form Data:", formData); 

       
        let errors = [];

        if (!formData.firstName) errors.push("First Name is required.");
        if (!formData.email) errors.push("Email is required.");
        if (!formData.phone) errors.push("Phone Number is required.");
        if (formData.password.length < 6) errors.push("Password must be at least 6 characters.");
        if (!formData.year) errors.push("Please select a year in school.");
        
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

       
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "response.json", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                alert(response.message); 

               
                form.reset();
            } else {
                alert("Error submitting form. Please try again.");
            }
        };

        xhr.send(JSON.stringify(formData));
    });
});