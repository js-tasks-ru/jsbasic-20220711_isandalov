function initCarousel() {
  rightButton = document.querySelector('.carousel__arrow_right')
  leftButton = document.querySelector('.carousel__arrow_left')
  carouselInner = document.querySelector('.carousel__inner')
  offsetWidthParam = document.querySelector('.carousel__inner').offsetWidth
  scrollWidthParam = document.querySelector('.carousel__inner').scrollWidth
  offset = 0
 
  if (offset == 0) {
    leftButton.style.display = 'none' 
  }
  else {
    leftButton.style.display = '' 
  }
  
  rightButton.addEventListener('click', () => {   
    offset += 1
    carouselInner.style.transform = `translateX(-${offsetWidthParam * offset}px)`    

    if (offset > 0) {
      leftButton.style.display = ''  
    }
    
    if (offsetWidthParam * (offset + 1) >= scrollWidthParam) {
      rightButton.style.display = 'none'
      return
    }

  })
  
  leftButton.addEventListener('click', () => {     
    offset -= 1 
    carouselInner.style.transform = `translateX(-${offsetWidthParam * offset}px)`
    
    if (offsetWidthParam * offset <= scrollWidthParam) {
      rightButton.style.display = ''
    }
    

    if (offset == 0) {
      leftButton.style.display = 'none'   
      return
    } 
  })


}
