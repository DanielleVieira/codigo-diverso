const $btn = document.querySelector("button");
const $html = document.querySelector("html");

$btn.addEventListener("click", () => {
  $html.classList.toggle("dark-mode"); //toggle adicionar e remove a classe na lista de classes do elemento
                                        // mesmo que classList.add e classList.remove
});
