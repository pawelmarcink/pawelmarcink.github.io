/* encoding="UTF-8" */
$(function() {
  $("#registrationForm").submit(function (event) {
    var errors = [];
    $("div.errors", this).remove();

    if (!$(this.name).val()) {
      errors.push("<li>Podanie imienia jest wymagane.</li>");
      $(this.name).parents("div.required").addClass("error");
      event.preventDefault();
    }
    else{
    $(this.name).parents("div.required.error").removeClass("error");
    }

    if (!$(this.mail).val()) {
      errors.push("<li>Podanie adresu e-mailowego jest konieczne.</li>");
      $(this.mail).parents("div.required").addClass("error");
      event.preventDefault();
    }
    else{
    $(this.mail).parents("div.required.error").removeClass("error");
    }

    if (errors.length > 0) {
      $(this).prepend("<div class='errors'>Musisz "
        + "poprawić wymienione poniżej błędy:<ul>"
        + errors.join("") + "</ul></div>");
    }
  });
});
