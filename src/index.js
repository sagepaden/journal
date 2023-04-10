// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './business.js';

//User Interface Logic

document.addEventListener('submit', function(event) {
  event.preventDefault();
  const userTitle = document.querySelector('#journal-title').value;
  const userBody = document.querySelector('#journal-body').value;
  const entry1 = new Entry(userTitle, userBody);
  console.log(entry1);
  console.log(entry1.wordCount());
  document.getElementById("entry-results").innerText = "Your entry has " + entry1.wordCount(userBody) + " words in it!";
  document.getElementById("journal-title-output").innerText = userTitle;
  document.getElementById("journal-body-output").innerText = userBody;
  document.getElementById("vowel-results").innerText = "Your entry has " + entry1.vowelCount(userBody) + " vowels in it!";
})

