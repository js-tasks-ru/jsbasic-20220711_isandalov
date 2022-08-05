function initCarousel() {
  let rightButton = document.querySelector('.carousel__arrow_right')
  let leftButton = document.querySelector('.carousel__arrow_left')
  let carouselInner = document.querySelector('.carousel__inner')
  let offsetWidthParam = document.querySelector('.carousel__inner').offsetWidth
  let scrollWidthParam = document.querySelector('.carousel__inner').scrollWidth
  let offset = 0
 
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
