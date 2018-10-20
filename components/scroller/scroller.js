// import wheelHandler from './wheelHandler'
// import EventSystem from './event-system/event'

function Handler(domElem, timeout) {
  this.addEventListener = function (eventName, callback) {
    wheelEvent(domElem, timeout, callback);
    touchEvent(domElem, callback);
  }
}

//-------------------------- TOUCH ----------------------
let touchStart = 0;

let touchEvent = function (domElem, callback) {
  domElem.addEventListener("touchstart", () => touchStart = event.changedTouches[0].clientY, { passive: true });
  domElem.addEventListener("touchend", event => {
    let direction = touchStart - event.changedTouches[0].clientY;
    if (direction === 0) {
      return
    }
    callback(direction);
  }, { passive: true });
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
  }, { passive: true })
}

export default Handler;
