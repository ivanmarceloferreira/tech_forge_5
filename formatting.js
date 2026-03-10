function processUsers(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
      console.log(users[i].name);
    }
  }
}

// function processUsers(users) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].active) {
//             console.log(users[i].name);
//         }
//     }
// }
