// Small client-side enhancements for the static demo
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks — this demo does not send messages. To enable contact, integrate an email service or use Netlify Forms.');
});