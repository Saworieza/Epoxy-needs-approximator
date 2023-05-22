const lengthInput = document.getElementById('lengthInput');
    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const mainResult = document.getElementById('mainResult');
    const resultElement = document.getElementById('result');
    const epoxyResult = document.getElementById('epoxyResult');

    const calculateResult = () => {
      const length = parseFloat(lengthInput.value);
      const width = parseFloat(widthInput.value);
      const height = parseFloat(heightInput.value);

      const volume = length * width * height;
      const volumeWithExtra = volume * 1.1;
      const epoxyExtra = volumeWithExtra * 1.1;

      mainResult.textContent = 'The volume is: ' + (volume / 1000).toFixed(2) + ' Kg';
      resultElement.textContent = 'The volume 10% extra is: ' + (volumeWithExtra / 1000).toFixed(2) + ' Kg';
      epoxyResult.textContent = 'The Needed weight for the Epoxy Mix is: ' + (epoxyExtra / 1000).toFixed(2) + ' Kg';
    };

    lengthInput.addEventListener('input', calculateResult);
    widthInput.addEventListener('input', calculateResult);
    heightInput.addEventListener('input', calculateResult);


// Calculate Ratio of weight mix
const weightInput = document.getElementById('weightInput');
const resinRatioInput = document.getElementById('resinRatioInput');
const hardenerRatioInput = document.getElementById('hardenerRatioInput');
const resultElementRatio = document.getElementById('ratioResult');

const calculateResultRatio = () => {
  const weight = parseFloat(weightInput.value);
  const resinRatio = parseFloat(resinRatioInput.value);
  const hardenerRatio = parseFloat(hardenerRatioInput.value);

  const resinAmount = (weight * resinRatio) / (resinRatio + hardenerRatio);
  const hardenerAmount = (weight * hardenerRatio) / (resinRatio + hardenerRatio);

  resultElementRatio.innerHTML = `
    <p>Resin Weight: ${resinAmount.toFixed(2)} Kg</p>
    <p>Hardener Weight: ${hardenerAmount.toFixed(2)} Kg</p>
  `;
};

weightInput.addEventListener('input', calculateResultRatio);
resinRatioInput.addEventListener('input', calculateResultRatio);
hardenerRatioInput.addEventListener('input', calculateResultRatio);