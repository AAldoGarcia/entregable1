const getRandomQuote = (elements) => {
    const randomQuote= Math.floor(Math.random() *elements.length)
    return elements[randomQuote]
    
}


export {getRandomQuote}