const $button = document.getElementById("dark-mode");
const $html = document.querySelector("html");

$button.addEventListener("click", () => {
    $html.classList.toggle("dark-mode");
});
