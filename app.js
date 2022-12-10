const openBtn = Array.from(
  document.querySelectorAll('.question'),
);
const closeBtn = Array.from(
  document.querySelectorAll('.answer'),
);

openBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    closeBtn.forEach((close) => {
      if (
        e.target.nextElementSibling !== close &&
        close.classList.contains('active')
      ) {
        close.classList.remove('active');
        openBtn.forEach((btn) => {
          btn.classList.remove('active');
        });
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle('active');
    btn.classList.toggle('active');
  });
});

window.onclick = (e) => {
  if (!e.target.matches('.question')) {
    openBtn.forEach((btn) =>
      btn.classList.remove('active'),
    );
    closeBtn.forEach((btn) =>
      btn.classList.remove('active'),
    );
  }
};
