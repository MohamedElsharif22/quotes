// 1- onclick on button --> start function
// array of quotes
const quotes = [
  {
    author: "– Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    author: "– أودري هيبورن",
    quote: "لا شيء مستحيل، الكلمة نفسها تقول 'أنا ممكن'!",
  },
  {
    author: "– Albert Schweitzer",
    quote: "Success is not the key to happiness. Happiness is the key to success.",
  },
  {
    author: "– أنيس منصور",
    quote: "النجاح لا يأتي من أول محاولة، بل من المثابرة.",
  },
  {
    author: "– Steve Jobs",
    quote: "Your time is limited, so don't waste it living someone else's life.",
  },
  {
    author: "– جورج برنارد شو",
    quote: "التغيير هو القانون الوحيد للحياة، ومن لا يتغير لن يكون مستعداً للمستقبل.",
  },
  {
    author: "– Thomas Jefferson",
    quote: "I find that the harder I work, the more luck I seem to have.",
  },
  {
    author: "– والت ديزني",
    quote: "إذا كنت تستطيع أن تحلم به، يمكنك تحقيقه.",
  },
  {
    author: "– Henry David Thoreau",
    quote: "Success usually comes to those who are too busy to be looking for it.",
  },
  {
    author: "– جلال الدين الرومي",
    quote: "الحياة قصيرة، عش كل لحظة وكأنها الأخيرة.",
  },
  {
    author: "– John D. Rockefeller",
    quote: "Don't be afraid to give up the good to go for the great.",
  },
  {
    author: "– كونفوشيوس",
    quote: "السعادة لا تأتي بالصدفة، بل من خلال العمل الشاق.",
  },
  {
    author: "– Vidal Sassoon",
    quote: "The only place where success comes before work is in the dictionary.",
  },
  {
    author: "– ونستون تشرشل",
    quote: "النجاح ليس نهاية الطريق، الفشل ليس قاتلاً، الشجاعة على الاستمرار هي الأهم.",
  },
  {
    author: "– Chris Grosser",
    quote: "Opportunities don't happen. You create them.",
  },
  {
    author: "– جوشوا مارين",
    quote: "التحديات هي ما تجعل الحياة مثيرة، والتغلب عليها هو ما يجعل الحياة ذات معنى.",
  },
  {
    author: "– Sam Levenson",
    quote: "Don't watch the clock; do what it does. Keep going.",
  },
  {
    author: "– كونفوشيوس",
    quote: "العظمة لا تكون في الاستمرار أبداً، بل في القدرة على النهوض بعد السقوط.",
  },
  {
    author: "– Roy T. Bennett",
    quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
  },
  {
    author: "– نيلسون مانديلا",
    quote: "الفشل هو بداية الطريق إلى النجاح.",
  },
  {
    author: "– Tim Notke",
    quote: "Hard work beats talent when talent doesn't work hard.",
  },
  {
    author: "– فيكتور هوجو",
    quote: "لا تنتظر اللحظة المناسبة، اصنعها.",
  },
  {
    author: "– Eleanor Roosevelt",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    author: "– بنجامين فرانكلين",
    quote: "الأفعال تتحدث بصوت أعلى من الكلمات.",
  },
  {
    author: "– Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    author: "– غاندي",
    quote: "القوة لا تأتي من القدرة الجسدية، بل تأتي من الإرادة التي لا تقهر.",
  },
  {
    author: "– Alan Kay",
    quote: "The best way to predict the future is to invent it.",
  },
  {
    author: "– إدوارد دي بونو",
    quote: "الإبداع هو أن ترى ما لا يراه الآخرون.",
  },
  {
    author: "– Theodore Roosevelt",
    quote: "Believe you can and you're halfway there.",
  },
  {
    author: "– ويل روجرز",
    quote: "لا تدع الأمس يستهلك الكثير من اليوم.",
  },
];

var quotesLength = quotes.length;
// 2- function shuffleQuote
var lastRandom = [];
function shuffleQuotes() {
  // creat a random num
  var random = Math.floor(Math.random() * quotesLength + 1) % quotesLength;
  console.log(random);
  // push random num in arr
  lastRandom.push(random);
  console.log(lastRandom);
  // check if the random num is same as last num
  var i = lastRandom.length - 2;
  console.log("last:" + lastRandom[i]);
  if (random == lastRandom[i]) {
    shuffleQuotes();
  } else {
    document.getElementById("quoteOutput").innerHTML = quotes[random].quote;
    document.getElementById("author").innerHTML = quotes[random].author;
  }
  // deleting unused elements from th array
  lastRandom.splice(0, i);
}
