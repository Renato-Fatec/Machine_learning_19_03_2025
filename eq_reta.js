// Função que calcula a equação da reta e r² a partir de um conjunto de pontos
function calcularRetaComR2(pontos) {
    const n = pontos.length;
  
    // Somar as coordenadas x e y
    let somaX = 0, somaY = 0, somaXY = 0, somaX2 = 0;
    for (let i = 0; i < n; i++) {
      somaX += pontos[i][0];
      somaY += pontos[i][1];
      somaXY += pontos[i][0] * pontos[i][1];
      somaX2 += pontos[i][0] * pontos[i][0];
    }
  
    // Calcular o coeficiente angular (m) e o coeficiente linear (b)
    const m = (n * somaXY - somaX * somaY) / (n * somaX2 - somaX * somaX);
    const b = (somaY - m * somaX) / n;
  
    // Calcular a soma dos quadrados totais (SST) e a soma dos quadrados dos resíduos (SSE)
    let sst = 0, sse = 0;
    for (let i = 0; i < n; i++) {
      const yPredito = m * pontos[i][0] + b;
      sst += Math.pow(pontos[i][1] - (somaY / n), 2); // SST = Σ(y_i - y_média)²
      sse += Math.pow(pontos[i][1] - yPredito, 2); // SSE = Σ(y_i - y_ajustado)²
    }
  
    // Calcular o coeficiente de determinação (r²)
    const r2 = 1 - (sse / sst);
  
    // Retornar a equação da reta e o valor de r²
    return {
      equacao: `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`,
      r2: r2.toFixed(4)
    };
  }
  
  // Exemplo de uso:
  const pontos = [
    [1, 3],
    [2, 5],
    [3, 7],
    [4, 9],
    [5, 11]
  ];
  
  const resultado = calcularRetaComR2(pontos);
  console.log("Equação da reta:", resultado.equacao);
  console.log("Valor de r²:", resultado.r2);