// Alternância de Tema
// Seleciona o botão de alternância
const themeIcon = document.getElementById('themeIcon');

// Verifica a preferência do tema salva no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.textContent = '☀️'; // Ícone de sol para modo claro
}

// Adiciona o evento de clique no botão
themeIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Atualiza o ícone de acordo com o tema
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.textContent = '☀️'; // Ícone de sol para modo claro
    localStorage.setItem('theme', 'dark'); // Salva a preferência
  } else {
    themeIcon.textContent = '🌙'; // Ícone de lua para modo escuro
    localStorage.setItem('theme', 'light'); // Salva a preferência
  }
});


// Função para abrir detalhes de personagens
function abrirDetalhes(personagem) {
  localStorage.setItem('personagem', personagem);
  window.location.href = 'detalhes.html';
}

// Preenchimento dinâmico da página de detalhes
if (window.location.pathname.includes('detalhes.html')) {
  const detalhesSection = document.getElementById('detalhes-personagem');
  const personagem = localStorage.getItem('personagem');

  const personagens = {
    naruto: {
      nome: 'Naruto Uzumaki',
      imagem: 'assets/images/naruto.jpg',
      descricao: 'Naruto é o ninja mais determinado e sonha em ser Hokage.',
    },
    sasuke: {
      nome: 'Sasuke Uchiha',
      imagem: 'assets/images/sasuke.jpg',
      descricao: 'Sasuke é um prodígio do clã Uchiha em busca de vingança.',
    },
    sakura: {
      nome: 'Sakura Haruno',
      imagem: 'assets/images/sakura.jpg',
      descricao: 'Sakura é uma ninja médica habilidosa com força avassaladora.',
    },
  };

  const dados = personagens[personagem];
  if (dados) {
    detalhesSection.innerHTML = `
      <img src="${dados.imagem}" alt="${dados.nome}">
      <h2>${dados.nome}</h2>
      <p>${dados.descricao}</p>
    `;
  }
}

// Validação de formulário de contato
// Seleciona o formulário e o campo de resposta
const form = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

// Adiciona o evento de envio ao formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Validação básica
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formResponse.style.color = "red";
    formResponse.textContent = "Por favor, preencha todos os campos.";
    formResponse.style.display = "block";
    return;
  }

  // Exibe mensagem de sucesso
  formResponse.style.color = "#28a745";
  formResponse.textContent = "Mensagem enviada com sucesso! Obrigado por entrar em contato.";
  formResponse.style.display = "block";

  // Limpa o formulário
  form.reset();
});


