function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/igu-light.png")
    alt.setAttribute("alt", "lalafel de igus marine usando oculos escuros")
  } else {
    img.setAttribute("src", "./assets/assets/avatar igu.png")
    alt.setAttribute("alt", "lalafel de igus marine com olhos fechados")
  }
}
