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
                <h3>Safari Request Received!</h3>
                <p>Your request for the <strong>${destination}</strong> safari package has been successfully submitted. Our Wildlife Specialist will contact you shortly to plan your thrilling jungle expedition.</p>
                <button class="modal-close-btn">Venture Forth</button>
            </div>
        `;

        // Apply basic styling for the modal overlay
        messageBox.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.7); display: flex;
            justify-content: center; align-items: center; z-index: 9999;
        `;
        
        // Modal content styling (matches CSS theme: green, orange accents)
        const contentStyle = `
            background-color: white; padding: 2.5rem; border-radius: 1rem;
            max-width: 480px; text-align: center; box-shadow: 0 15px 40px rgba(76, 175, 80, 0.5);
            border: 4px solid #ff9800;
        `;
        
        // Apply content style
        const modalContent = messageBox.querySelector('.modal-content');
        modalContent.style.cssText = contentStyle;
        modalContent.querySelector('h3').style.cssText = 'color: #004d40; margin-bottom: 0.5rem; font-size: 1.8rem; font-weight: 700;';
        
        // Close button styling
        const closeBtn = messageBox.querySelector('.modal-close-btn');
        closeBtn.style.cssText = `
            margin-top: 1.5rem; padding: 0.9rem 2.5rem; background-color: #ff9800;
            color: white; border: none; border-radius: 0.5rem; cursor: pointer;
            font-weight: 700; transition: background-color 0.3s; font-size: 1.1rem;
        `;
        closeBtn.onmouseover = () => closeBtn.style.backgroundColor = '#fb8c00';
        closeBtn.onmouseout = () => closeBtn.style.backgroundColor = '#ff9800';


        // Add to body and set up close listener
        document.body.appendChild(messageBox);
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(messageBox);
        });
    }
});
