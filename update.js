/* encoding="UTF-8" */

function updateExpandAllLink() {
  var faqList, answers, expandAllLink, switchLink;
  faqList = document.getElementById("part");
  answers = faqList.getElementsByTagName("div");
  expandAllLink = document.getElementById("expandAllLink");
  switchLink = true;

  if (expandAllLink.innerHTML == "Wyświetl wszystkie") {
    for (i = 0; i < answers.length; i++) {
      if (answers[i].style.display == 'none') {
        switchLink = false;
      }
    }

    if (switchLink) {
      expandAllLink.innerHTML = "Ukryj wszystkie";
    }
  }
  else {
    for (i = 0; i < answers.length; i++) {
      if (answers[i].style.display == 'block') {
        switchLink = false;
      }
    }
    if (switchLink) {
      expandAllLink.innerHTML = "Wyświetl wszystkie";
    }
  }
}

