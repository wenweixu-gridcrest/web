const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const cartCount = document.querySelector('.cart-count');
const cartButton = document.querySelector('.cart-button');
const toast = document.querySelector('.toast');
let count = 0;
let toastTimer;

document.querySelector('#year').textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    cartButton.setAttribute('aria-label', `Shopping bag, ${count} ${count === 1 ? 'item' : 'items'}`);
    showToast(`${button.dataset.product} added to your bag`);
  });
});

cartButton.addEventListener('click', () => {
  showToast(count ? `Your bag has ${count} ${count === 1 ? 'item' : 'items'}.` : 'Your bag is ready for something good.');
});

document.querySelector('.newsletter').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  form.querySelector('.form-message').textContent = 'Thanks for joining us. Watch your inbox!';
  form.reset();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}
