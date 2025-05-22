const shareContainer = document.querySelector('.share-container')
const socialHover = document.querySelector('.social-hover')
const contentSocial = document.querySelector('.content-social')
const socialLeft = document.querySelector('.content-social-left')
const socialMobile = document.querySelector('.content-social-mobile-left')

shareContainer.addEventListener('click', () => {
  if (window.innerWidth > 890) {
    socialHover.classList.toggle('hidden')
  } else {
    socialMobile.classList.toggle('flex')
    socialLeft.classList.toggle('hidden')
    contentSocial.classList.toggle('bg-gray-900')
  }
})
