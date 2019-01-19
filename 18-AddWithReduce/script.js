
//get times from video data
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
//get h1 element to insert total time into
const time = document.querySelector('.head');
//get total seconds of all videos
const seconds = timeNodes
  .map(timeNode => timeNode.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds); // total seconds 17938

//convert seconds into hours, and seconds
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); // user `Math.floor` to remove decimal point
secondsLeft = secondsLeft % 3600;
//convert remaining seconds to minutes and seconds
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
//insert the total time into the header
time.innerHTML = `Total time ${hours}:${mins}:${secondsLeft}`;
