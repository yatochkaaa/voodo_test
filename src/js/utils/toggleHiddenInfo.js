// Получаем ссылки на элементы
const toggleInfoButton = document.getElementById("toggleInfo");
const additionalInfo = document.getElementById("hiddenInfo");
const betaInfo = document.getElementById("beta-info");

// Функция для обработки нажатия на иконку
function toggleHiddenInfo() {
  if (additionalInfo.style.display === "none") {
    additionalInfo.style.display = "block";
    betaInfo.style.borderBottomRightRadius = "0px";
    betaInfo.style.borderBottomLeftRadius = "0px";
  } else {
    additionalInfo.style.display = "none";
    betaInfo.style.borderBottomRightRadius = "4px";
    betaInfo.style.borderBottomLeftRadius = "4px";
  }

  toggleInfoButton.classList.toggle("rotate");
}

// Добавляем обработчик события на клик по иконке
toggleInfoButton.addEventListener("click", toggleHiddenInfo);
