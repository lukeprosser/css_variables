// Grab all inputs
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // console.log(this.value);
  const suffix = this.dataset.sizing || ''; // Fallback to nothing if dataset not found
  // Grab root element of document and set value to the name attribute and add suffix
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listen for the change event on each input
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// Listen for mousemove event on each input
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));