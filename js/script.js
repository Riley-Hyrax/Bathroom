function openModal() {
    document.getElementById('zipModal').style.display = 'block';
    document.getElementById('h2-modal').style.display = 'block';
    document.getElementById('button-modal').style.display = 'block';
    document.getElementById('zipInput').style.display = 'block';

}

function closeModal() {
    document.getElementById('zipModal').style.display = 'none';
    document.getElementById('result').textContent = ''; // Clear the result message
    document.getElementById('zipInput').value = ''; // Clear the input field
}

function isValidZipCode(zip) {
    const zipPattern = /^(?!00000)(\d{5}|\d{5}-\d{4})$/;
    return zipPattern.test(zip);
}

function checkZipCode() {
    const zipInput = document.getElementById('zipInput').value;
    const resultDiv = document.getElementById('result');
    


    if (isValidZipCode(zipInput)) {
        resultDiv.textContent = `${zipInput}`+' Is a Valid Zip Code! Click below to proceed.';
        resultDiv.style.color = 'green';
        resultDiv.innerHTML += '<br><button onclick="redirectToOffer()" class="offerButton">Take Me to Offer</button>';
        document.getElementById('h2-modal').style.display = 'none';
        document.getElementById('button-modal').style.display = 'none';
        document.getElementById('zipInput').style.display = 'none';

    } else {
        resultDiv.textContent = 'Invalid Zip Code. Please enter a valid format.';
        resultDiv.style.color = 'red';
    }
}

function redirectToOffer() {
    // Replace the URL below with your actual offer page URL
    window.location.href = 'https://example.com/offer';
}

// Close modal when user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('zipModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}