function onLoad() {
    const contactForm = document.getElementById('contact');
console.log('loaded');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Details Sent Successfully!');
    });
}
