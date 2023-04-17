/* encoding="UTF-8" */
window.onload = addExpandAllLink;
function addExpandAllLink() {
  var expandAllDiv, expandAllLink, faq;

  /*expandAllDiv = document.createElement("div");
  expandAllDiv.setAttribute("id", "expandAll");*/

  expandAllLink = document.createElement("a");
  expandAllLink.setAttribute("href", "#");
  expandAllLink.setAttribute("id", "expandAllLink");
  expandAllLink.appendChild(document.createTextNode("Wyświetl wszystkie"));

  /*expandAllDiv.appendChild(expandAllLink);*/

  expandAllLink.onclick = function() {
    var faqList, answers;    
    faqList = document.getElementById("part");
    answers = faqList.getElementsByTagName("div");

    if (this.innerHTML == "Wyświetl wszystkie") {
    for (i = 0; i < answers.length; i++) {
      answers[i].style.display = 'block';
    }
    this.innerHTML = "Ukryj wszystkie";
    }
    else {
      for (i = 0; i < answers.length; i++) {
        answers[i].style.display = 'none';
      }
      this.innerHTML = "Wyświetl wszystkie";
    }
    return false;
  };

  faq = document.getElementById("part");
  faq.insertBefore(expandAllLink, faq.firstChild);
}
