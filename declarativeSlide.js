const Slide = {
    title:'React is declarative',
    bullets:[
        'imperitive vs declarative',
        'The browser APIs are not fun to work with',
        'React allows us to write what we want, and the library will take care of the DOM manipulation',
    ],
}

function createSlide(slide){
    return(
        <Slide>
            <h1>{Slide.title}</h1>
            <ul>
                {Slide.bullets.map(bullet=><li>bullet</li>)}
            </ul>
        </Slide>
    )
}