export default function anima() {
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
