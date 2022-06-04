function imagens() {
  const imgs = document.querySelectorAll(".js-tabmenu li");
  const desc = document.querySelectorAll(".js-desc section");

  if (imgs.length && desc.length) {
    function ativa(index) {
      desc.forEach((item) => {
        item.classList.remove("ativo");
      });
      desc[index].classList.add("ativo");
    }
    ativa(0);

    imgs.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativa(index);
      });
    });
  }
}
imagens();

// Accordion List
function Accordion() {
  const btn = document.querySelectorAll(".js-faq-lista dt");
  console.log(btn);
  btn[0].classList.add("ativo");
  btn[0].nextElementSibling.classList.add("ativo");

  if (btn.length) {
    btn.forEach((item) => {
      item.addEventListener("click", (e) => {
        const dd = e.currentTarget.nextElementSibling;
        const at = dd.classList.contains("ativo");
        if (at) {
          e.currentTarget.classList.remove("ativo");
          dd.classList.remove("ativo");
        } else {
          e.currentTarget.classList.add("ativo");
          dd.classList.add("ativo");
        }
      });
    });
  }
}

Accordion();

function anima() {
  const section = document.querySelectorAll(".js-scroll");
  section[0].classList.add("ativo");

  const tela = window.innerHeight * 0.6;

  function animaScroll() {
    section.forEach((item) => {
      const secTop = item.getBoundingClientRect().top;
      if (secTop < tela) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
anima();
