const buttons = document.getElementById("buttons");

const contacts = [
  {
    number: "+90 539 115 0441",
    tel: "905391150441"
  },
  {
    number: "+90 539 115 0442",
    tel: "905391150442"
  },
  {
    number: "+98 912 233 7376",
    tel: "989122337376"
  }
];

contacts.forEach(contact => {

buttons.innerHTML += `
<a class="btn call" href="tel:${contact.tel}">
📞 Call ${contact.number}
</a>

<a class="btn whatsapp"
href="https://wa.me/${contact.tel}?text=Hello!%20I%20found%20Jackie.">
💬 WhatsApp ${contact.number}
</a>
`;

});
