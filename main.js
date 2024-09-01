function toggleEventDetails(eventElement) {
    const details = eventElement.querySelector('.event-details');
    const isVisible = details.style.display === 'block';

    // Hide all event details
    document.querySelectorAll('.event-details').forEach(detail => {
        detail.style.display = 'none';
    });

    // Toggle visibility of the clicked event's details
    if (!isVisible) {
        details.style.display = 'block';
    }
}

function toggleBenefitDetails(benefitElement) {
    const details = benefitElement.querySelector('.benefit-details');
    const isVisible = details.style.display === 'block';

    // Hide all benefit details
    document.querySelectorAll('.benefit-details').forEach(detail => {
        detail.style.display = 'none';
    });

    // Toggle visibility of the clicked benefit's details
    if (!isVisible) {
        details.style.display = 'block';
    }
}

