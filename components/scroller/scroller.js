// import wheelHandler from './wheelHandler'
// import EventSystem from './event-system/event'

function Handler(domElem, timeout) {
  this.addEventListener = function (eventName, callback) {
    wheelEvent(domElem, timeout, callback);
    touchEvent(domElem, callback);
  }
}

//-------------------------- TOUCH ----------------------
let touchStartY = 0;
let touchStartX = 0;

let touchEvent = function (domElem, callback) {
  domElem.addEventListener("touchstart", () => {
    touchStartY = event.changedTouches[0].clientY;
    touchStartX = event.changedTouches[0].clientX;
  }, {
    passive: true
  });
  domElem.addEventListener("touchend", event => {
    let directionY = touchStartY - event.changedTouches[0].clientY;
    let directionX = touchStartX - event.changedTouches[0].clientX;
    let direction = (Math.abs(directionY) > Math.abs(directionX)) ? directionY : directionX;
    //if there has been scrolled very little, its probably a touch
    if (direction > -3 && direction < 3) {
      return
    }
    callback(direction);
  }, {
    passive: true
  });
};

//-------------------------- WHEEL ---------------------------
let lastTimeScrolled = 0;

let wheelEvent = function (domElem, timeout, callback) {
  domElem.addEventListener('wheel', (e) => {
    let newTime = new Date();
    let timeDiff = newTime - lastTimeScrolled;
    lastTimeScrolled = newTime;
    if (timeDiff > timeout) {
      callback(e.deltaY);
    }
  }, {
    passive: true
  })
}

export default Handler;
