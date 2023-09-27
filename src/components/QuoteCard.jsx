
import "./QuoteCard.css"



const QuoteCard = ({quote, handleChangeQuote  }) => {
   
    
    
    return (
      <section className="quoteCard">
        <h1  className="quoteCard_title">Infogalax</h1>
        <article  className="quoteCard_container">
        <p className="quoteCard_phrase">{quote.phrase}</p>
        <button className="quoteCard_btn" onClick={handleChangeQuote}>New Phrase</button>
    </article>
    <footer className="quoteCard_footer">Author : {quote.author}</footer>
</section>

  )
    }

export default QuoteCard