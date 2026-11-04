(() => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const dialog = document.getElementById('projectDialog');
  const openProject = document.querySelector('[data-open-project]');
  const closeDialog = document.getElementById('dialogClose');
  const toast = document.getElementById('toast');
  let toastTimer;

  document.getElementById('year').textContent = new Date().getFullYear();

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });

  function showToast(label) {
    toast.textContent = `Placeholder: add your ${label} details here before publishing.`;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3600);
  }

  document.querySelectorAll('[data-placeholder]').forEach(control => {
    control.addEventListener('click', () => showToast(control.dataset.placeholder));
  });

  openProject.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
  });

  function closeProjectDialog() {
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    document.body.style.overflow = '';
  }

  closeDialog.addEventListener('click', closeProjectDialog);
  dialog.addEventListener('click', event => {
    if (event.target === dialog) closeProjectDialog();
  });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dialog.open) closeProjectDialog();
  });
})();
