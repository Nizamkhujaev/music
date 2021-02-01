var audioPlayer = document.querySelector("#audio-player");
var playBtn = document.querySelector(".play-btn");
var pauseBtn = document.querySelector(".pause-btn");
var nextBtn = document.querySelector(".next-btn");
var prevBtn = document.querySelector(".prev-btn");
var rangeInput = document.querySelector(".player-range");
var volumeInput = document.querySelector('#volume-input');
var volumeIcon = document.querySelector('.volume-icon');
var currentAudioTime = document.querySelector('.current-time');
var fullTime = document.querySelector('.full-time');

var musicPlaylist = [
  {
    id: 0,
    author: `Santiz`,
    src: `./audios/Rastafari   Santiz.mp3`
  },
  {
    id: 1,
    author: `Santiz`,
    src: `./audios/Santiz-Музе.mp3`
  },
  {
    id: 2,
    author: `Santiz`,
    src: `./audios/Все-тот-же_Santiz.mp3`
  },
  {
    id: 3,
    author: `Santiz`,
    src: `./audios/Далеко за закатами   Santiz.mp3`
  },
  {
    id: 4,
    author: `Santiz`,
    src: `./audios/Я убит на кайфах    Santiz.mp3`
  },
  {
    id: 5,
    author: `Santiz`,
    src: `./audios/Santiz - Забытый-бала.mp3`
  }
]

var i;
var musicTime = 0;

window.addEventListener('load', function() {
  rangeInput.value = 0;
  volumeInput.value = 100;
})

rangeInput.addEventListener('change', function() {
  audioPlayer.currentTime = (rangeInput.value*musicTime)/100;
})



playBtn.addEventListener('click', function() {

  playBtn.style.display = "none";
    pauseBtn.style.display = "block";


  audioPlayer.src = musicPlaylist[0].src;
  i = musicPlaylist[0].id;
  audioPlayer.play();
  setTimeout(function() {
    musicTime = audioPlayer.duration;
  }, 300)

  Math.floor(audioCurrentPosition());
  // secundToMinute();
});

pauseBtn.addEventListener('click', function() {
  audioPlayer.pause();

  playBtn.style.display = "block";
    pauseBtn.style.display = "none";
});

nextBtn.addEventListener('click', function() {
  i++;
  audioPlayer.src = musicPlaylist[i].src;
  setTimeout(function() {
    musicTime = audioPlayer.duration;
  }, 300)
  audioPlayer.play();
});

prevBtn.addEventListener('click', function() {
  i--;
  audioPlayer.src = musicPlaylist[i].src;
  setTimeout(function() {
    musicTime = audioPlayer.duration;
  }, 300)
  audioPlayer.play();
});

function volumeIconSwitcher(volumePercent) {
  switch (true) {
      case volumePercent > 80:
          volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-1.svg")
          break;
      case (volumePercent < 80) && (volumePercent > 50):
          volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-2.svg")
          break;
      case (volumePercent < 50) && (volumePercent > 20):
          volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-3.svg")
          break;
      case (volumePercent < 20):
          volumeIcon.setAttribute('src', "./images/volume-up-interface-symbol-4.svg")
          break;
      default:
  }
}

// function secundToMinute() {
//   Math.round(fullTime.textContent = Math.floor(audioPlayer.duration) / 60);
// }

function audioCurrentPosition() {
  Math.round(currentAudioTime.textContent = (Math.floor(audioPlayer.currentTime) / 100));
  // rangeInput.value = (audioPlayer.currentTime * 100) / audioPlayer.duration;
}

volumeInput.addEventListener('change', function() {
  audioPlayer.volume = volumeInput.value / 100

  volumeIconSwitcher(volumeInput.value)
})

setInterval(function () {
  audioCurrentPosition();
}, 1000)

// rangeInput.addEventListener('change', function() {

//   audioPlayer.currentTime = (rangeInput.value * audioPlayer.duration) / 100;
// })