// Elemet
const output = document.querySelector('.output');
const input = document.querySelector('input[type="number"]');
const title = document.querySelector('.title');
const select = document.querySelector('select');

// Listeners
input.addEventListener('input', getFact);
select.addEventListener('change', () => {
  title.innerHTML = `${select.value.charAt(0).toUpperCase() + select.value.substring(1, select.value.length)} Facts!`;
});

// Functions
async function getFact() {
  if (input.value === '') {
    output.innerHTML = '';
    return;
  }
  const res = await fetch(`http://numbersapi.com/${input.value}/${select.value === 'number' ? '' : select.value}`);
  const data = await res.text();
  const titleCap = select.value.charAt(0).toUpperCase() + select.value.substring(1, select.value.length);
  output.innerHTML = `
  ${titleCap} fact:
  <span class="h6 font-weight-normal d-block mt-1 ">${data}</span>`;
}
