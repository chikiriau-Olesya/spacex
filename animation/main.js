let textblockAnimations = document.querySelectorAll('.textblock')
for (let i = 0; i < textblockAnimations.length; i++) {
 textblockAnimations[i].classList.add('wow')
 textblockAnimations[i].classList.add('fadeInUp')
}

let videoAnimation = document.querySelector('.video')
videoAnimation.classList.add('wow')
videoAnimation.classList.add('fadeInRight')