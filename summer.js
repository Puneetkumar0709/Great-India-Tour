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
                <h3>Booking Confirmed!</h3>
                <p>Your request for the <strong>${destination}</strong> package has been successfully submitted. Our Summer Team will contact you within 24 hours.</p>
                <button class="modal-close-btn">Cool, thanks!</button>
            </div>
        `;

        // Apply basic styling for the modal
        messageBox.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.6); display: flex;
            justify-content: center; align-items: center; z-index: 9999;
        `;
        
        const contentStyle = `
            background-color: white; padding: 2rem; border-radius: 1rem;
            max-width: 450px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        `;
        
        // Apply content style
        const modalContent = messageBox.querySelector('.modal-content');
        modalContent.style.cssText = contentStyle;
        modalContent.querySelector('h3').style.cssText = 'color: #06b6d4; margin-bottom: 0.5rem; font-size: 1.5rem;';
        
        // Close button styling
        const closeBtn = messageBox.querySelector('.modal-close-btn');
        closeBtn.style.cssText = `
            margin-top: 1.5rem; padding: 0.75rem 2rem; background-color: #10b981;
            color: white; border: none; border-radius: 0.5rem; cursor: pointer;
            font-weight: 600; transition: background-color 0.3s;
        `;
        closeBtn.onmouseover = () => closeBtn.style.backgroundColor = '#059669';
        closeBtn.onmouseout = () => closeBtn.style.backgroundColor = '#10b981';


        // Add to body and set up close listener
        document.body.appendChild(messageBox);
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(messageBox);
        });
    }
});
