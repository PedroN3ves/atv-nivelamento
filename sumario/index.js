const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    backgroundColor: "--light-red-100",
    color: " --light-red",
    box: "box-reaction",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    backgroundColor: "--orangey-yellow-100",
    color: "--orangey-yellow",
    box: "box-memory",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    backgroundColor: "--green-teal-100",
    color: "--green-teal",
    box: "box-verbal",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    backgroundColor: "--cobalt-blue-100",
    color: "--cobalt-blue",
    box: "box-visual",
  },
];

const summaryBox = document.querySelector('.summary-box')


// use window for being working with a web window
window.addEventListener('DOMContentLoaded', ()=>{
  // console.log(data[2].score)
  let displaySummary = data.map( (item)=>{
    return `
    <style>
      .${item.box}{
        background-color: var(${item.backgroundColor});
        color: var(${item.color})
      }
    </style>
      <div class="summary-box ${item.box}">
        <article class="summary-info">
          <img src=${item.icon} alt="">
          <p>${item.category}</p>
        </article>
          <h5 class="summary-calc"><span>${item.score}</span> / 100</h5>
      </div>
    `
  } )

  displaySummary = displaySummary.join("")
  console.log(displaySummary)

  summaryBox.innerHTML = displaySummary
})