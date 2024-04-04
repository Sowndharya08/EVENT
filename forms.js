document.addEventListener("DOMContentLoaded", function() {
  const sellTicketsCheckbox = document.getElementById("sellTickets");
  const paymentDetails = document.getElementById("paymentDetails");

  sellTicketsCheckbox.addEventListener("change", function() {
    if (this.checked) {
      paymentDetails.classList.remove("hidden");
    } else {
      paymentDetails.classList.add("hidden");
    }
  });

  const eventForm = document.getElementById("eventForm");
  eventForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Collect form data
    const formData = {
      organiserName: document.getElementById("organiserName").value,
      eventName: document.getElementById("eventName").value,
      eventType: document.getElementById("eventType").value,
      eventMode: document.getElementById("eventMode").value,
      eventStartDate: document.getElementById("eventStartDate").value,
      eventEndDate: document.getElementById("eventEndDate").value,
      eventStartTime: document.getElementById("eventStartTime").value,
      eventLocation: document.getElementById("eventLocation").value,
      eventVenue: document.getElementById("eventVenue").value,
      eventDescription: document.getElementById("eventDescription").value,
      sellTickets: sellTicketsCheckbox.checked
    };

    // If selling tickets, collect payment details
    if (sellTicketsCheckbox.checked) {
      formData.paymentMethod = document.getElementById("paymentMethod").value;
      formData.cardNumber = document.getElementById("cardNumber").value;
      formData.expiryDate = document.getElementById("expiryDate").value;
      formData.cvv = document.getElementById("cvv").value;
    }

    // Log form data (you can process or send this data as per your requirement)
    console.log(formData);
    // You can add further logic to process the form data here, like sending it to a server via AJAX, etc.
  });
});