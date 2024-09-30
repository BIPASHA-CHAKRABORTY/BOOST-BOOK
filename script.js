document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('campaignForm');

   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        window.location.href = 'ext-page.html'; 
    });
});
