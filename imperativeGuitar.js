const strings = ["E","A","D","G","B","E"]

createElement()

function Guitar(){
    //create head and add pegs
    const head= createElement('head')
    for(let i=0;i<6;i++){
        const peg = createElement('peg')
        head.append(peg)
    }

    //create nec and add frets
    const head= createElement('head')
    for(let i=0;i<6;i++){
        const peg = createElement('peg')
        head.append(peg)
    }


    //create body and add strings
    const body = creteElement('body')
    strings.forEach(tone => {
        const string = createElement(''string)
        string.tune(tone)
        body.append(string)
    })

    return body
}