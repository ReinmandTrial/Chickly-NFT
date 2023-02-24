const howToBuyBtnEl = document.querySelector('.how-button')
const howToBuyPopupEl = document.getElementById('howToBuy')

howToBuyBtnEl &&
   howToBuyBtnEl.addEventListener('click', (el) => {
      howToBuyPopupEl.classList.add('_popup-open')
   })

const allPopups = document.querySelectorAll('.new-popup')
allPopups &&
   allPopups.forEach((popup) => {
      popup.addEventListener('click', (el) => {
         if (el.target.classList.contains('new-popup__close-btn') || el.target.classList.contains('new-popup__body')) {
            popup.classList.remove('_popup-open')
            if (popup.querySelector('.how-to-buy-popup__iframe')) {
               stopPlayer(popup.querySelector('.how-to-buy-popup__iframe'))
            }
         }
      })
   })

function stopPlayer(iframe) {
   let src = iframe.getAttribute('src')
   iframe.setAttribute('src', '')
   iframe.setAttribute('src', src)
}

const blogersListEl = document.querySelectorAll('.blogers__item')
blogersListEl &&
   blogersListEl.forEach((item) => {
      item.addEventListener('click', (el) => {
         if (el.target.classList.contains('blogers__prevue')) {
            const iframe = el.target.nextElementSibling
            iframe.setAttribute('src', iframe.dataset.clickSrc)
            el.target.classList.add('_hide')
         }
      })
   })
