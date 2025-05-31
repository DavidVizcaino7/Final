function contarPalabras() {
    const texto = document.getElementById('texto').value.trim();
    const resultado = document.getElementById('resultadoPalabras');

    if (texto.length === 0) {
      resultado.textContent = "No escribiste ninguna palabra.";
      return;
    }

    // Dividir el texto por espacios y filtrar elementos vacíos
    const palabras = texto.split(/\s+/).filter(p => p.length > 0);
    resultado.textContent = `Número de palabras: ${palabras.length}`;
  }