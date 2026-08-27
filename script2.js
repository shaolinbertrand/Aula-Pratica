/**
 * Script acessível para controle de exibição de conteúdo complementar
 * Utiliza o atributo aria-expanded para comunicar o estado aos leitores de tela
 */
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('btn-segredo');
  const painel = document.getElementById('mensagem-secreta');

  if (!botao || !painel) return;

  botao.addEventListener('click', () => {
    // 1. Obtém o estado booleano atual do ARIA
    const estaExpandido = botao.getAttribute('aria-expanded') === 'true';

    // 2. Inverte o atributo aria-expanded (notifica tecnologias assistivas)
    botao.setAttribute('aria-expanded', String(!estaExpandido));

    // 3. Altera a visibilidade usando o atributo nativo 'hidden' do HTML5
    painel.hidden = estaExpandido;

    // 4. Fornece feedback textual claro no botão (Usabilidade / Nielsen)
    botao.textContent = estaExpandido ? 'Descobrir frase do dia' : 'Ocultar frase do dia';
  });
});