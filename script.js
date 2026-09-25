// XIXTECH7 WhatsApp contact.
const WHATSAPP_NUMBER = '62895391480010';

// Keep the mobile menu functional on the single-page price list.
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('mobile-open'));
}
