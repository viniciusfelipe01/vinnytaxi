function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")
  
  // substituir a imagem
  if(html.classList.contains('light')) {
    // se estiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    Text.setAttribute(
      "alt",
      "Foto de Myke Brito sorrindo e usando oculos com fundo azul e com blusa preta"
    )
  }
  else{
     // se tiver sem light mode, manter a imgem normal
    img.setAttribute('src', './assets/avatar.png')
    Text.setAttribute(
      "alt",
      "Foto de Myke Brito sorrindo e usando oculos de sol com fundo azul e com blusa preta"
    )
  }

}

