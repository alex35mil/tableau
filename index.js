const backgroundImageContainer = document.getElementById('BackgroundImage');
const timeContainer = document.getElementById('Time');
const dayContainer = document.getElementById('Day');
const monthContainer = document.getElementById('Month');

// --- Utils
const pad = number => (number >= 10 ? number : `0${number}`);
const monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' });

// --- Actions
const setBackgroundImage = () => {
  const imageRegExp = /\.(jpe?g|png|gif|webp)$/i;
  const images = window.IMAGES.filter(image => imageRegExp.test(image));
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const imageUrl = `./backgrounds/${images[randomImageIndex]}`;
  backgroundImageContainer.style.cssText = `background-image: url('${imageUrl}');`;
};

const setTime = () => {
  const now = new Date();
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  timeContainer.innerHTML = `${hours}:${minutes}`;
};

const setDate = () => {
  const now = new Date();
  const day = pad(now.getDate());
  const month = monthFormatter.format(now);
  dayContainer.innerHTML = day;
  monthContainer.innerHTML = month;
};

// --- Init
setBackgroundImage();
setTime();
setDate();

// Stay up-to-date
setInterval(() => {
  setTime();
  setDate();
}, 5000);
