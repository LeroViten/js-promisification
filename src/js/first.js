import '../sass/main.scss';

// ================== TASK 1 =====================
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms);
  });
};

console.log(`%c TASK 1 results here:`, 'color: green; font-size: 20px;');
const consoleLogger = time => console.log(`Resolved after ${time}ms`);

// check for working
delay(2000).then(consoleLogger); // Resolved after 2000ms
delay(1000).then(consoleLogger); // Resolved after 1000ms
delay(1500).then(consoleLogger); // Resolved after 1500ms
