function calcularCollatz() {
  const input = document.getElementById('numberInput');
  const resultList = document.getElementById('result');
  let n = parseInt(input.value);

  // Limpiar lista anterior
  resultList.innerHTML = '';

  if (isNaN(n) || n < 1) {
    const errorItem = document.createElement('li');
    errorItem.textContent = 'Por favor, ingresa un número entero positivo.';
    resultList.appendChild(errorItem);
    return;
  }

  // Mostrar el primer número
  const primerItem = document.createElement('li');
  primerItem.textContent = `Inicio: ${n}`;
  resultList.appendChild(primerItem);

  function siguientePaso() {
    if (n === 1) return;

    setTimeout(() => {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }

      const li = document.createElement('li');
      li.textContent = n;
      resultList.appendChild(li);

      siguientePaso();
    }, 300);
  }

  siguientePaso();
}

document.getElementById('calcularBtn').addEventListener('click', calcularCollatz);
