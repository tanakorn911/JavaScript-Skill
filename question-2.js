fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const newUsers = data.map(user => user.name);
    console.log(newUsers);

    const longName = newUsers.filter(name => name.length > 17);
    console.log(longName);
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
