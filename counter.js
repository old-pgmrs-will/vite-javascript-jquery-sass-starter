import $ from 'jquery'

const setupCounter = (counterElementID) => {
  let counter = 0

  const setCounter = (count) => {
    counter = count
    $(counterElementID).html(`count is <span class='counter_value'>${counter}</span>`);
  }

  $(counterElementID).on('click', () => {
    setCounter(counter + 1);
    console.log(`counter = ${counter}`);
  });

  setCounter(0)
};

export  {setupCounter};
