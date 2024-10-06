const buttonToggleOffcanvas = document.querySelector('[data-js="toggle-offcanvas"]')

const hideOrShowOffcanvas = () => {
  const offcanvas = document.querySelector('[data-js="offcanvas"]')
  offcanvas.classList.toggle('show')
}

buttonToggleOffcanvas.addEventListener('click', hideOrShowOffcanvas)