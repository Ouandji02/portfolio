export default function toggleTheme() {
  const checkbox = document.querySelector("#checkbox");
  const html = document.querySelector("html");
  const toggle = () => {
    var darkMode = window.localStorage.getItem("darkMode");
    darkMode === "true"
      ? html.classList.add("dark")
      : html.classList.remove("dark");
    console.log("tooooooogle", darkMode);
  };
  var darkMode = window.localStorage.getItem("darkMode");
  darkMode === "true"
    ? (html.classList.add("dark"), (checkbox.checked = true))
    : (html.classList.remove("dark"), (checkbox.checked = false));
  console.log("tooooooogle", darkMode);
  const toggleDarkMode = function () {
    window.localStorage.setItem("darkMode", checkbox.checked);
    toggle();
    console.log("darkmodeeeeeetoggle", darkMode);
  };

  //calling the function directly

  checkbox.addEventListener("click", toggleDarkMode);
}
