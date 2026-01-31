 fetch('booking.html')
  .then(res => res.text())
  .then(data => {
    // Inject HTML
    document.getElementById('booking-placeholder').innerHTML = data;

    // Now the elements exist — we can safely select them
    const form = document.getElementById("bookingForm");
    const whatsappBtn = document.getElementById("whatsappBtn");

    // Only activate WhatsApp logic if the form exists
    if (form && whatsappBtn) {

      whatsappBtn.addEventListener("click", function(e) {
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const phone = form.querySelector('#phone').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (!name || !email || !phone || !message) {
          e.preventDefault();
          alert("Please fill all fields before submitting!");
          return;
        }

        const whatsappNumber = "19093422886";

        const whatsappMessage = `Hello, I’m looking for HVAC services from Modern Heating and Cooling Solutions.
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Set the href dynamically
        whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      });
    }
  })
  .catch(err => console.error('Error loading booking section:', err));

// ==================== LOAD FOOTER ====================
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
});
