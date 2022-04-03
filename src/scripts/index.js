const inputs = document.querySelectorAll(".input");
const camposObrigatorios = document.querySelectorAll(".obrigatorio");
const form = document.querySelector(".form");

function campoAceito(input, index) {
  camposObrigatorios[index].classList.remove("mostrar");
  input.classList.remove("negado");
  input.classList.add("aceito");
}

function campoNegado(input, index) {
  input.classList.remove("aceito");
  input.classList.add("negado");
  camposObrigatorios[index].classList.add("mostrar");
}

inputs.forEach((input, index) => {
  input.addEventListener("change", (e) => {
    if (e.target.value !== "") {
      campoAceito(input, index);
    } else {
      campoNegado(input, index);
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.nome.value === "") {
    campoNegado(e.target.nome, 0);
  }if (e.target.email.value === "") {
    campoNegado(e.target.email, 1);
  }if (e.target.telefone.value === "") {
    campoNegado(e.target.telefone, 2);
  }
  if (e.target.mensagem.value === "") {
    campoNegado(e.target.mensagem, 3);
  }
  
  if (e.target.nome.value !== '' && e.target.email.value !== '' && e.target.telefone.value !== '' && e.target.mensagem.value !== '') {
    alert(`Parabéns ${e.target.nome.value} sua mensagem foi enviada!`)
  }
});
