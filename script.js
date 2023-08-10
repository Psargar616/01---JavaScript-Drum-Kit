// function to play audio files
function playDrum(e) {
  // console.log(e.keyCode);

  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  // to stop the function when their is no audio associated with the key
  if (!audio) return;
  // to rewind audio file to start when we hit the same key again and again
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

// function to remove playing class fron classlist when transition is done
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //to skip
  // this refers to current object that is 'key' which is calling the function
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
// 'transitionend' is an event like 'click'
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playDrum);
