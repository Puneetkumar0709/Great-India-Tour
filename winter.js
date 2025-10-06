document.addEventListener('DOMContentLoaded', () => {
    // Get all 'Book Now' buttons
    const bookButtons = document.querySelectorAll('.book-btn');

    // Attach event listener to each button
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const destination = button.getAttribute('data-destination');
            
            // Log the action to the console for tracking
            console.log(`Booking attempt for ${destination}`);
            
            // Display a message box (since alert() is forbidden)
            showConfirmationMessage(destination);
        });
    });

    /**
     * Shows a confirmation message in a custom modal (mimicking an alert/confirmation).
     * @param {string} destination The name of the tour package being booked.
     */
    function showConfirmationMessage(destination) {
        // Create a simple, temporary message element
        const messageBox = document.createElement('div');
        messageBox.className = 'confirmation-modal';
        messageBox.innerHTML = `
            <div class="modal-content">
                <h3>Booking Request Received!</h3>
                <p>Thank you for your interest in the <strong>${destination}</strong> package. Our team will contact you shortly.</p>
                <button class="modal-close-btn">Close</button>
            </div>
        `;

        // Apply basic styling for the modal (using Tailwind classes for convenience)
        messageBox.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.7); display: flex;
            justify-content: center; align-items: center; z-index: 9999;
        `;
        
        const contentStyle = `
            background-color: white; padding: 2rem; border-radius: 1rem;
            max-width: 400px; text-align: center; box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        `;
        
        // Apply content style
        const modalContent = messageBox.querySelector('.modal-content');
        modalContent.style.cssText = contentStyle;
        modalContent.querySelector('h3').style.cssText = 'color: #0288d1; margin-bottom: 0.5rem;';
        
        // Close button styling
        const closeBtn = messageBox.querySelector('.modal-close-btn');
        closeBtn.style.cssText = `
            margin-top: 1.5rem; padding: 0.75rem 2rem; background-color: #f57c00;
            color: white; border: none; border-radius: 0.5rem; cursor: pointer;
            font-weight: 600; transition: background-color 0.3s;
        `;
        closeBtn.onmouseover = () => closeBtn.style.backgroundColor = '#e65100';
        closeBtn.onmouseout = () => closeBtn.style.backgroundColor = '#f57c00';


        // Add to body and set up close listener
        document.body.appendChild(messageBox);
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(messageBox);
        });
    }
});
