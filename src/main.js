import Generate from './models/Generate';
import './views/assets/css/style.css';

(function () {
  const generate = new Generate();
  const el = document.querySelector('.btn-generator');
  const divGenarator = document.querySelector('.cpf-generate');
  el.addEventListener('click', () => {
    divGenarator.innerHTML = generate.generator();
  });
})();
