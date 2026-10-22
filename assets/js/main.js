document.getElementById('year').textContent = new Date().getFullYear();
const dialog = document.querySelector('.lightbox');
if (dialog && typeof dialog.showModal === 'function') {
  const viewer = dialog.querySelector('img');
  const caption = dialog.querySelector('.lightbox-caption');
  document.querySelectorAll('.photo-open').forEach(button => {
    button.addEventListener('click', () => {
      viewer.src = button.dataset.src;
      viewer.alt = button.dataset.alt;
      caption.textContent = button.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { viewer.removeAttribute('src'); });
}