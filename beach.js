document.addEventListener('DOMContentLoaded', () => {
    // Get all 'Book Now' buttons
    const bookButtons = document.querySelectorAll('.book-btn');

    // Attach event listener to each button
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const destination = button.getAttribute('data-destination');
            
            // Display a custom modal message
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
                <p>Your request for the tropical <strong>${destination}</strong> package has been successfully submitted. Our Beach Expert will contact you shortly to plan your sun-soaked itinerary.</p>
                <button class="modal-close-btn">See you on the beach!</button>
            </div>
        `;

        // Apply basic styling for the modal overlay
        messageBox.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.7); display: flex;
            justify-content: center; align-items: center; z-index: 9999;
        `;
        
        // Modal content styling (matches CSS theme)
        const contentStyle = `
            background-color: white; padding: 2.5rem; border-radius: 1rem;
            max-width: 480px; text-align: center; box-shadow: 0 15px 40px rgba(245, 158, 11, 0.5);
            border: 4px solid #f59e0b;
        `;
        
        // Apply content style
        const modalContent = messageBox.querySelector('.modal-content');
        modalContent.style.cssText = contentStyle;
        modalContent.querySelector('h3').style.cssText = 'color: #06b6d4; margin-bottom: 0.5rem; font-size: 1.8rem; font-weight: 700;';
        
        // Close button styling
        const closeBtn = messageBox.querySelector('.modal-close-btn');
        closeBtn.style.cssText = `
            margin-top: 1.5rem; padding: 0.9rem 2.5rem; background-color: #f59e0b;
            color: white; border: none; border-radius: 0.5rem; cursor: pointer;
            font-weight: 700; transition: background-color 0.3s; font-size: 1.1rem;
        `;
        closeBtn.onmouseover = () => closeBtn.style.backgroundColor = '#d97706';
        closeBtn.onmouseout = () => closeBtn.style.backgroundColor = '#f59e0b';


        // Add to body and set up close listener
        document.body.appendChild(messageBox);
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(messageBox);
        });
    }
});
