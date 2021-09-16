const Chutar = () => {
  const input = document.getElementById("valor");
  const inputValue = Number(input.value);
  if (inputValue > 10 || inputValue < 0) return;
  const aleatory = Math.floor(Math.random() * (10 - 0)) + 0;
  const result = document.getElementById("resultado");
  if (inputValue === aleatory) {
    return (result.innerHTML = `Você advinhou !!`);
  } else {
    return (result.innerHTML = `Você errou , o número que o pc pensou é ${aleatory}`);
  }
};