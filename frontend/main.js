import './assets/css/style.css';
import './assets/css/nav.css';
import './assets/css/modal.css';
import './assets/css/form.css';

// adicionar
const switchModal = () => {
  const modal = document.querySelector('.modal');
  const actualStyle = modal.style.display;
  modal.style.display = 'block';

  // botao fechar
  document.querySelector('.btn-fechar').addEventListener('click', (e) => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  });

  return;

  // if (actualStyle == 'block') {
  //   modal.style.display = 'none';
  // } else {
  //   modal.style.display = 'block';
  // }
};

const btnAdicionar = document.querySelector('.adicionar');
btnAdicionar.addEventListener('click', switchModal);

window.onclick = function (event) {
  const modal = document.querySelector('.modal');
  if (event.target == modal) {
    switchModal();
  }
};

