// 1- onclick on button --> start function
// array of quotes
var quotes = [
  {
    author: "― Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "― Marilyn Monroe",
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  },
  {
    author: "― Frank Zappa",
    quote: "“So many books, so little time.”",
  },
  {
    author: "― Marcus Tullius Cicero",
    quote: "“A room without books is like a body without a soul.”",
  },
  {
    author: "― Bernard M. Baruch",
    quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
]

var quotesLength = quotes.length
// 2- function shuffleQuote
var lastRandom = []
function shuffleQuotes() {
  // creat a random num
  var random = Math.floor(Math.random() * quotesLength + 1) % quotesLength
  console.log(random)
  // push random num in arr
  lastRandom.push(random)
  console.log(lastRandom)
  // check if the random num is same as last num
  var i = lastRandom.length - 2
  console.log("last:" + lastRandom[i])
  if (random == lastRandom[i]) {
    shuffleQuotes()
  } else {
    document.getElementById("quoteOutput").innerHTML = quotes[random].quote
    document.getElementById("author").innerHTML = quotes[random].author
  }
  // deleting unused elements from th array
  lastRandom.splice(0, i)
}
