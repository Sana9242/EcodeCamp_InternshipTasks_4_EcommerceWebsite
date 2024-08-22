document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Simple validation (if needed)
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Please fill out all fields.');
        return;
    }

    // Here you can implement sending data to your server or API
    console.log('Form Submitted', data);

    // Reset the form after submission
    this.reset();
    alert('Thank you for contacting us!');
});
