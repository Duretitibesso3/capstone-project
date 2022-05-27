const hamburger = document.querySelector('#bar');
const close = document.querySelector('#close');
const navigation = document.querySelector('.barlist');
const About = document.querySelector('.nav-link-1');
const program = document.querySelector('.nav-link-2');
const join = document.querySelector('.nav-link-3');
const sponsor = document.querySelector('.nav-link-4');
const news = document.querySelector('.nav-link-5');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
  About.classList.add('menu-text');
  program.classList.add('menu-text');
  join.classList.add('menu-text');
  sponsor.classList.add('menu-text');
  news.classList.add('menu-text');
});

close.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navigation.classList.remove('show');
});

About.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});
program.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

join.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

sponsor.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

news.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

// Speakers

const speakers = [
  {
    name: 'Paulina Megase',
    title: 'Founder, EIM Learning and Development Consult',
    image: '../images/pawlina.jpg',
    bio: 'Paulina currently is the CEO of EIM Learning and Development Consult, an agency assisting young individuals to become a better version of themselves through professional guidance and links to opportunities.',
  },

  {
    name: 'Adle Ibrahim',
    title: 'Social Activist and Entrepreneur',
    image: '../images/Adle.jpg',
    bio: 'Adle Ibrahim Muhammad is a Ghanaian social activist, entrepreneur and a member of the Liman Mwaa—Kali family from the Upper West Region',
  },
  {
    name: 'Reynold Owuor',
    title: 'Talent Consultant & Co-Founder & Partner, KaziTalks',
    image: '../images/Reynold.jpg',
    bio: 'Reynold Owuor is a seasoned talent acquisition specialist with a passion for recruitment, career coaching and youth leadership.',
  },
  {
    name: 'Kenny Agyapong',
    title: 'Co-Founder, AfroChella & Director, Net2 TV',
    image: '../images/Speaker.png',
    bio: 'Kenny Agyapong is a Ghanaian-American Entrepreneur and a Philanthropist. He moved to Ghana in 2014 to work as the Director of Net2TV ',
  },
];

const speakersPlaceHolder = document.querySelector('.persons');
speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
  <div class="person-graphic">
      <img src=".images/${speaker.image}" alt="speaker" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// show more speakers by clicking on more button
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelectorAll('.mobile-hide').forEach((el) => {
    el.classList.toggle('mobile-hide');
  });
  moreSpeakerButton.style.display = 'none';
});
