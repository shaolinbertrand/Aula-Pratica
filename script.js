// Interatividade básica sem controle de estados para tecnologias assistivas
var botao = document.getElementById('btn-mensagem');
var mensagem = document.getElementById('mensagem-secreta');

botao.onclick = function() {
  if (mensagem.style.display === 'none' || mensagem.style.display === '') {
    mensagem.style.display = 'block';
  } else {
    mensagem.style.display = 'none';
  }
};