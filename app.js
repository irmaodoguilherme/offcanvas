const buttonToggleOffcanvasVisibility =
    document.querySelector('[data-button=toggle-offcanvas-visibility]')
const offcanvas = document.querySelector('[data-js=offcanvas]')
const offcanvasTitle = document.querySelector('h1')
const body = document.body

const focusOffcanvas = () => offcanvas.focus()
const focusButtonToggleOffcanvasVisibility = () =>
    buttonToggleOffcanvasVisibility.focus()

const showOffcanvas = () => {
    buttonToggleOffcanvasVisibility.classList.add('right-1px')
    buttonToggleOffcanvasVisibility.children[0].classList.add('rotated-icon')
    offcanvas.classList.add('show')
}

const hideOffcanvas = () => {
    buttonToggleOffcanvasVisibility.classList.remove('right-1px')
    buttonToggleOffcanvasVisibility.children[0].classList.remove('rotated-icon')
    offcanvas.classList.remove('show')
}

const setAriaAttributes = value => {
    buttonToggleOffcanvasVisibility.setAttribute('aria-expanded', value)
    offcanvasTitle.setAttribute('aria-hidden', value)
}

const handleOffcanvasVisibility = () => {
    const isOffcanvasVisible = offcanvas.classList.contains('show')

    if (isOffcanvasVisible) {
        hideOffcanvas()
        setAriaAttributes(false)
        focusButtonToggleOffcanvasVisibility()
        return
    }

    showOffcanvas()
    setAriaAttributes(true)
    focusOffcanvas()
}

const handleKeyboardKeyUp = e => {
    const isPressedKeyEscape = e.key === 'Escape'
    const isOffcanvasVisible = offcanvas.classList.contains('show')

    if (isPressedKeyEscape && isOffcanvasVisible) {
        hideOffcanvas()
        setAriaAttributes(false)
        focusButtonToggleOffcanvasVisibility()
        return
    }
}

const handleBodyClick = e => {
    const isClickedElementOffcanvas = offcanvas.contains(e.target)
    const isOffcanvasVisible = offcanvas.classList.contains('show')

    if (!isClickedElementOffcanvas && isOffcanvasVisible) {
        hideOffcanvas()
        setAriaAttributes(false)
    }
}

buttonToggleOffcanvasVisibility.addEventListener('click', handleOffcanvasVisibility)
body.addEventListener('keyup', handleKeyboardKeyUp)
body.addEventListener('click', handleBodyClick)