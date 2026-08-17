const form = document.getElementById('quoteForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const d = new FormData(form);

  const message =
`Hi Peppys LTD,

I'd like a free quote.

Name: ${d.get('name') || ''}
Phone: ${d.get('phone') || ''}
Email: ${d.get('email') || ''}
Service: ${d.get('service') || ''}
Area/Postcode: ${d.get('area') || ''}

Job details:
${d.get('message') || ''}`;

  const whatsappURL =
    `https://wa.me/447902409746?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
});
