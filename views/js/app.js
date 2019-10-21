
$(".guess").on("click", () => {
  let guess = $("input").val()
  $("input").val("")
  $.ajax({
    method: "POST",
    url: "/number",
    data: JSON.stringify({ number: guess }),
    contentType: "application/json"
  }).done(data => {
    if (data.win) {
      alert("Ganaste")
    } else {
      alert("Siguelo intentando amigo")
    }
  }).fail(() => {
    alert("Se acabo el tiempo")
  })
})