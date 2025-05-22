const shareContainer = document.querySelector('.share-container')
const socialHover = document.querySelector('.social-hover')
const contentSocial = document.querySelector('.content-social')
const socialLeft = document.querySelector('.content-social-left')
const socialMobile = document.querySelector('.content-social-mobile-left')

console.log(socialMobile)

shareContainer.addEventListener('mouseenter', () => {
  if (window.innerWidth > 890) {
    socialHover.classList.remove('hidden')
  } else {
    socialMobile.classList.add('flex')
    socialLeft.classList.add('hidden')
    contentSocial.classList.add('bg-gray-900')
  }
})

shareContainer.addEventListener('mouseleave', () => {
  if (window.innerWidth > 890) {
    socialHover.classList.add('hidden')
  } else {
    socialMobile.classList.remove('flex')
    socialLeft.classList.remove('hidden')
    contentSocial.classList.remove('bg-gray-900')
  }
})

shareContainer.addEventListener('click', () => {
  if (window.innerWidth < 890) {
    socialMobile.classList.toggle('flex')
    socialLeft.classList.toggle('hidden')
    contentSocial.classList.toggle('bg-gray-900')
  }
})
