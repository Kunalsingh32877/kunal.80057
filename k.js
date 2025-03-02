document.getElementById('rank-push-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const freefireId = document.getElementById('freefire-id').value;
    
    if (email && phone && freefireId) {
        alert("Your rank push request has been submitted!");
        // Here you can add functionality to send form data to a server or handle it
    } else {
        alert("Please fill all the details.");
    }
});
