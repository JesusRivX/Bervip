document.addEventListener('click', function(event) {
    var contactLogo = document.getElementById('contact-logo');
    var contactInfo = document.getElementById('contact-info');

    if (event.target !== contactLogo && !contactInfo.contains(event.target)) {
        contactInfo.style.display = 'none';
    }
});

document.getElementById('contact-logo').addEventListener('click', function() {
    var contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
});