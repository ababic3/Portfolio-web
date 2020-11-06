function addVat(sum, vat) {
  const vatPercentage = vat / 100;
  return sum * (1 + vatPercentage);
}

function subtractVat(sum, vat) {
  const vatPercentage = vat / 100;
  return sum / (1 + vatPercentage);
}


function getError(sum, vat) {
  if (!sum || !vat) {
    return 'Please enter both sum and VAT.';
  }

  return '';
} 


function calculateVat(operation) {
  const total = document.getElementById('total');
  const error = document.getElementById('error');
  const sum = document.getElementById('sum').value;
  const vat = document.getElementById('vat').value;

  
  error.innerHTML = '';
  total.innerHTML = '';

 
  const errorMessage = getError(sum, vat);
  if (errorMessage) {
    error.innerHTML = errorMessage;
    return;
  }


  if (operation === 'vat_add') {
    total.innerHTML = addVat(sum, vat).toFixed(2);
  } else {
    total.innerHTML = subtractVat(sum, vat).toFixed(2);
  }
}


const vatAddButton = document.getElementById('vat_add');
vatAddButton.addEventListener('click', function(e) {
  e.preventDefault();
  calculateVat(e.target.id);
});

const vatSubtractButton = document.getElementById('vat_subtract');
vatSubtractButton.addEventListener('click', function(e) {
  e.preventDefault();
  calculateVat(e.target.id);
});

const vatClearButton = document.getElementById('vat_clear');
vatClearButton.addEventListener('click', function(e) {
  e.preventDefault();
  const total = document.getElementById('total');
  total.innerHTML = '';

  const error = document.getElementById('error');
  error.innerHTML = '';

  document.getElementById('sum').value = '';
  document.getElementById('vat').value = '';
});
