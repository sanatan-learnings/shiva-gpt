function switchLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  const enNodes = document.querySelectorAll('[data-lang="en"]');
  const hiNodes = document.querySelectorAll('[data-lang="hi"]');
  enNodes.forEach((n) => { n.style.display = lang === "en" ? "" : "none"; });
  hiNodes.forEach((n) => { n.style.display = lang === "hi" ? "" : "none"; });
  localStorage.setItem("site-language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("site-language") || "en";
  const select = document.getElementById("languageSelect");
  if (select) select.value = lang;
  switchLanguage(lang);
});
