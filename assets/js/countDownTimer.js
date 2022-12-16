const launchDate = 01 
const launchMonth = 02
const launchYear = 2023


var date2 = new Date(launchYear,launchMonth,launchDate);
setInterval(() => {
  var date1 = new Date();
  var diff = new Date(date2.getTime() - date1.getTime());
  const countToDate = new Date().setHours(new Date().getHours() + (2* 24))
  let previousTimeBetweenDates

  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)

  
  flipAllCards(diff.getUTCDate(),diff.getUTCHours(), diff.getUTCMinutes(), diff.getUTCSeconds())
  previousTimeBetweenDates = timeBetweenDates
}, 250)

function flipAllCards(days, hours, minutes, seconds) {
  flip(document.querySelector("[data-days-tens]"), Math.floor( getDays() / 10))
  flip(document.querySelector("[data-days-ones]"), getDays() % 10)
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}


function getDays(){
  var currentdate = new Date();
  var date1 = ''+currentdate.getFullYear()+'-'+(currentdate.getMonth()+1)+'-'+currentdate.getDate();
  var date2 = ''+launchYear+'-'+launchMonth+'-'+launchDate;

  date1 = date1.split('-');
  date2 = date2.split('-');

  date1 = new Date(date1[0], date1[1], date1[2]);
  date2 = new Date(date2[0], date2[1], date2[2]);

  date1_unixtime = parseInt(date1.getTime() / 1000);
  date2_unixtime = parseInt(date2.getTime() / 1000);

  var timeDifference = date2_unixtime - date1_unixtime;

  var timeDifferenceInHours = timeDifference / 60 / 60;

  var timeDifferenceInDays = timeDifferenceInHours  / 24;

  return timeDifferenceInDays;
}