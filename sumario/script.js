const summary = [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg"
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg"
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg"
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg"
    }
  ]

  const SummaryView = document.querySelector('.summary-view');


  window.addEventListener("DOMContentLoaded" , () => {
    displaySummary(summary)
  });

  function displaySummary(SummaryView){
    let showSummary = SummaryView.map((value) => {
    return `
    <div class="content">
        <div class="summary-icon">
          <img src="${value.icon}" alt="">
        </div>

        <div class="summary-info">
          <p>${value.category}</p>
        </div>

        <div class="summary-score">
          <p>${value.score}/100</p>
        </div>

      </div>
        `
    });

    showSummary = showSummary.join("");
    SummaryView.innerHTML = SummaryView;
  }