import '../sass/main.scss';

// =================== TASK 3 ====================
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = ({ id }) => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve({ id, delay });
      }
      reject({ id });
    }, delay);
  });
};

const logSuccess = ({ id, delay }) => {
  console.log(`%c Transaction ${id} processed in ${delay}ms`, 'color: green; font-size: 14px;');
};

const logError = ({ id }) => {
  console.warn(
    `%c Error processing transaction ${id}. Please try again later.`,
    'color: red; font-size: 14px;',
  );
};

// Check for working:
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
