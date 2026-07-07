const whispers = [
  "There are 4 people listening somewhere.",
  "Someone in Brazil forked this song.",
  "This repository is alive.",
  "A robot tried to enter and became sad.",
  "The guestbook remembers you.",
  "One song has escaped containment.",
  "Best viewed by candlelight and mild rebellion."
];

const whisper = document.getElementById("random-whisper");
if (whisper) {
  whisper.textContent = whispers[Math.floor(Math.random() * whispers.length)];
}

const compiledDate = document.getElementById("compiled-date");
if (compiledDate) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  compiledDate.textContent = yesterday.toLocaleDateString("en-GB");
}
