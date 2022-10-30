const btnMobile = document.getElementById('btn-mobile');

function abreMenu(event){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  
  
  if (active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  }else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
  
}

btnMobile.addEventListener('click', abreMenu);
