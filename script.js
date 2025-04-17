const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Sabia que lo harias, niñita! 😘";
  gif.src =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW1yYzA5YXd4azR5c2dvYjd1aG5zc3c0MWJwMGZ0YWJqZHZyMzlubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcyi4YxcZp8dWZq/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


document.addEventListener('click', () => {
    const audio = document.getElementById('myAudio');
    if (audio.muted) {
      audio.muted = false; // Desactiva el silencio
    audio.play();
    }
});
