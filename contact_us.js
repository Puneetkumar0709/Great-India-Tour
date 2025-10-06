document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from reloading the page

            // 1. Show the success message
            formMessage.classList.remove('hidden');
            formMessage.classList.add('success');
            formMessage.textContent = '✅ Your message has been sent successfully! We will contact you soon.';

            // 2. Clear the form fields
            contactForm.reset();

            // 3. Hide the message after 5 seconds (optional)
            setTimeout(() => {
                formMessage.classList.add('hidden');
                formMessage.classList.remove('success');
                formMessage.textContent = ''; // Clear content
            }, 5000);
        });
    }
});