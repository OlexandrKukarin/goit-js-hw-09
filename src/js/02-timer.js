import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timerDays: document.querySelector('span[data-days]'),
  timerHours: document.querySelector('span[data-hours]'),
  timerMinuts: document.querySelector('span[data-minutes]'),
  timerSeconds: document.querySelector('span[data-seconds]'),
};
const currentDate = new Date();
elements.btnStart.disabled = true;
let timerId;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - currentDate.getTime() < 0) {
      window.alert('Please choose a date in the future');
    } else {
      elements.btnStart.disabled = false;
    }
  },
};

elements.btnStart.addEventListener('click', timeUpdate);
const funFlat = flatpickr(elements.input, options);
function timeUpdate() {
  elements.btnStart.disabled = true;
  const selectedDate = funFlat.selectedDates[0];
  const timeChose = selectedDate.getTime();
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = timeChose - currentTime;
    if (remainingTime < 0) {
      clearInterval(timerId);
      return;
    }

    elements.timerDays.textContent = addLeadingZero(
      convertMs(remainingTime).days
    );
    elements.timerHours.textContent = addLeadingZero(
      convertMs(remainingTime).hours
    );
    elements.timerMinuts.textContent = addLeadingZero(
      convertMs(remainingTime).minutes
    );
    elements.timerSeconds.textContent = addLeadingZero(
      convertMs(remainingTime).seconds
    );
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
