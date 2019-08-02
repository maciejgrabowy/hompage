console.log('siema');

const name = 'Maciek';
const age = 33;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lata`);

const about = document.querySelector('.about__paragraph--js');
about.innerHTML = `Nazywam się ${name} i mam ${age} lata`;



// const about = document.querySelector('.about__paragraph--js');

// console.log(about.innerHTML);

// about.innerHTML = 'Pozdro JS!';

// const paragraphs = document.querySelectorAll('p');

// console.log(paragraphs);
// console.log(paragraphs[0]);

// if ('javascript' != 'java')

if (age < 20) {
  console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {
  console.log('jesteś między 20 a 30');
} else {
  console.log('jesteś stary');
}

switch (age) {
  case 20:
    console.log('masz 20 lat')
    break;
  case 30:
    console.log('masz 30 lat')
    break;
  default:
    console.log(`masz ${age} lat`);
    break;
}

const amIOld = (age > 50) ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
  x = x + 3;
  console.log(x);
  return x * 7;
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);


const button = document.querySelector('.header__button--js');
console.log(button)

function handleClick() {
  console.log(e);
  console.log('halo');
}

button.addEventListener('click', (e) => {
  const header = document.querySelector('.header__title--js');
  header.innerHTML = 'klik klik';
  header.classList.toggle('header__title--red');
});

const navigationSwitcher = document.querySelector ('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  navigationList.classList.toggle('navigation__list--visible')
})