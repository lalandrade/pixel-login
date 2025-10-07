// Seleciona o container principal
const container = document.getElementById("container");

// Seleciona os botões de alternância
const botaoCadastrar = document.getElementById("register");
const botaoEntrar = document.getElementById("login");

// Ao clicar em "Cadastrar", ativa a animação do formulário de cadastro
botaoCadastrar.addEventListener("click", () => {
  container.classList.add("active");
});

// Ao clicar em "Entrar", volta para o formulário de login
botaoEntrar.addEventListener("click", () => {
  container.classList.remove("active");
});
