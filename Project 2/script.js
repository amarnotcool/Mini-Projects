const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const range = document.querySelector('#range')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height!";
    range.innerHTML = "";
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight!";
    range.innerHTML = "";
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi < 18.6){
      range.innerHTML = "You are Under Weight";
    }else if(bmi >= 18.6 && bmi <= 24.9){
      range.innerHTML = "Your weight is in Normal range";
    }else{
      range.innerHTML = "You are Over Weight";
    }
  }
});
