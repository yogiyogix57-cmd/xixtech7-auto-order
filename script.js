// Set your business WhatsApp number here (country code, without + or spaces).
const WHATSAPP_NUMBER = '6281234567890';
const modal = document.querySelector('#orderModal');
const form = document.querySelector('#orderForm');

function openOrder(event) {
  if (event) event.preventDefault();
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeOrder() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-open-order]').forEach((button) => button.addEventListener('click', openOrder));
document.querySelectorAll('[data-close-order]').forEach((button) => button.addEventListener('click', closeOrder));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeOrder(); });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `Halo XIXTECH7, saya ingin order.%0A%0ANama: ${encodeURIComponent(data.get('name'))}%0ALayanan: ${encodeURIComponent(data.get('service'))}%0ADetail: ${encodeURIComponent(data.get('detail') || '-')}%0A%0AMohon info langkah selanjutnya.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  closeOrder();
});

// Mobile navigation: simple scroll links menu.
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  document.querySelector('.desktop-nav').classList.toggle('mobile-open');
});
