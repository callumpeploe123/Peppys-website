document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting){ entry.target.classList.add('show'); observer.unobserve(entry.target); }
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('quoteForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const subject = `Website quote request - ${d.get('service') || 'Peppys LTD'}`;
  const body = `Hi Peppys LTD,%0D%0A%0D%0AName: ${encodeURIComponent(d.get('name')||'')}%0D%0APhone: ${encodeURIComponent(d.get('phone')||'')}%0D%0AEmail: ${encodeURIComponent(d.get('email')||'')}%0D%0AService: ${encodeURIComponent(d.get('service')||'')}%0D%0AArea: ${encodeURIComponent(d.get('area')||'')}%0D%0A%0D%0AJob details:%0D%0A${encodeURIComponent(d.get('message')||'')}`;
  window.location.href = `mailto:Peppysgeneralcleaning@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
