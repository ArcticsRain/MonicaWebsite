document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();  // Prevent default form submission
  
      // Create a FormData object from the form
      const formData = new FormData(contactForm);
  
      // Send the form data using Fetch API
      fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      .then(response => response.json())  // Parse JSON response from Formspree
      .then(data => {
       
          alert("Form submitted successfully!");
          contactForm.reset();  // Clear the form fields after successful submission
        
      })
    });
  });
  