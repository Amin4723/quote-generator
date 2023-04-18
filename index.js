let btn = document.querySelector("#new-quote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the sevice of others."`,
    person: "Mahtma Gandhi"
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things"`,
    person: "Albert Einstein"
}, {
    quote: `"At his best, man is the noblest of all animals; seperated from law and justice he is the worst."`,
    person: "Aristotle"
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life"`,
    person: "Steve Jobs"
}, {
    quote: `"For every man there is a path untravelled, and those men that fear the journey will never experience happiness"`,
    person: "Amin Ahmadipour"
}]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
    

})

