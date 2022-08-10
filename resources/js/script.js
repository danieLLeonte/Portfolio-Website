// Contact Button
document.getElementById("contact-bt").onclick = function () {
  location.href = "./contact.html";
};

// Git Show Code Button
document.getElementsByClassName('github-bt')[0].onclick = function () {
  window.open('https://github.com/danieLLeonte/Codecademy-Mixed-Messages');
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
