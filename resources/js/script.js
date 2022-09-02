// Contact Button
document.getElementById("contact-bt").onclick = function () {
  location.href = "./contact.html";
};

// Git Show Code Button
document.getElementsByClassName('github-bt')[0].onclick = function () {
  window.open('https://github.com/danieLLeonte/Codecademy-Mixed-Messages');
};

document.getElementsByClassName('github-bt')[1].onclick = function () {
  window.open('https://github.com/danieLLeonte/Find-Your-Hat');
};

document.getElementsByClassName('github-bt')[2].onclick = function () {
  window.open('https://github.com/danieLLeonte/matching-memory');
};

document.getElementsByClassName('github-bt')[3].onclick = function () {
  window.open('https://github.com/danieLLeonte/Expense-Tracker');
};
// const sections = document.querySelectorAll('section');
// sections.forEach(section => {
//   section.addEventListener('mouseenter', (event) => {
//     section.style.fontSize = "30px";

//     setTimeout(() => {
//       section.style.fontSize = "";
//     }, 500);
//   })
// });
