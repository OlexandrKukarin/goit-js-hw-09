const promiseBtn = document.querySelector('button[type="submit"]');
const formEl = document.querySelector('.form');

promiseBtn.addEventListener('click', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  let delay = Number(formEl.delay.value);
  let step = Number(formEl.step.value);
  let amount = Number(formEl.amount.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  }
  // e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, rejected) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        rejected({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
