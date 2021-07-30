import '../sass/main.scss';

// =================== TASK 2 ====================
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(updatedUsers);
  }, 2000);
};

console.log(`%c TASK 2 results here:`, 'color: green; font-size: 20px;');
const logger = updatedUsers => console.table(updatedUsers);

// Check for working:
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
