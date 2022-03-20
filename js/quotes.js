const quotes = [
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder"
    },
    {
        quote:"Do not try to be original, just try to be good.",
        author: "Paul Rand"
    },
    {
        quote:"Do not be afraid to give up the good to go for the great.",
        author:"John D. Rockefeller"
        
    },
    {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author:"Thomas Edison"
    },
    {
        quote:"The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author: "Reid Hoffman"
    },
    {
        quote:"Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you're not doing a tour of gas stations.",
        author:"Tim O'Reilly"
    },
    {
        quote:"Some people dream of success, while other people get up every morning and make it happen.",
        author:"Wayne Huizenga"
    },
    {
        quote:"THe only thing worse than starting something and failing is not starting something",
        author:"Seth Godin"
    },
    {
        quote:"If you really want to do something, You'll find a way. If you do not, you'll find an excuse.",
        author:"Jim Rohn"
    },
    {
        quote:"Tough times never last, but tough people do.",
        author:"Robert H.Schuller"
    },
    {
        quote:"If you don't get out of the box you've been raised in, you won't understand how much bigger the world is.",
        author:"Angelina Jolie"
    }
];

const quoteSpace  = document.querySelector("#quotes span:first-child");
const authorSpace = document.querySelector("#quotes span:last-child");

const arraySize = quotes.length;
const randomIndex = Math.floor(Math.random()*arraySize);
const todaysQuote = quotes[randomIndex];

function mouseOverQuote(event){
    authorSpace.classList.remove(HIDDEN_CLASS);
    authorSpace.innerHTML = `- ${todaysQuote.author} -`;
}

function mouseLeave(event){
    authorSpace.innerHTML = "";
    authorSpace.classList.add(HIDDEN_CLASS);
}
quoteSpace.innerHTML =`"${todaysQuote.quote}"`;
quoteSpace.addEventListener("mouseover",mouseOverQuote);
quoteSpace.addEventListener("mouseout",  mouseLeave);