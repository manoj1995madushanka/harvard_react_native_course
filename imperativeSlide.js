const Slide = {
    title:'React is declarative',
    bullets:[
        'imperitive vs declarative',
        'The browser APIs are not fun to work with',
        'React allows us to write what we want, and the library will take care of the DOM manipulation',
    ],
}


function createSlide(slide){
    const slideElement = document.createElement('div')

    const title = document.createElement('h1')
    title.innerHTML = Slide.title

    return slideElement
}