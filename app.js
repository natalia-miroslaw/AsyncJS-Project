const getUsers = async () => {
  const responseUsers = await fetch('http://localhost:3000/users');
  const dataUsers = await responseUsers.json();

  const userNameArray = [];

  for (i=0; i < dataUsers.length; i++) {
    if (dataUsers[i].name) {
      userNameArray.push(dataUsers[i].name);
    };
  };

  for (i=0; i < userNameArray.length; i++) {
    const userListElement = document.getElementById('users');
    const liElement = document.createElement('li');
    liElement.innerText = userNameArray[i];
    userListElement.appendChild(liElement);
  };

};

const getCompanies = async () => {
  const responseCompanies = await fetch('http://localhost:3000/companies');
  const dataCompanies = await responseCompanies.json();

  const companyNameArray = [];

  for (i=0; i < dataCompanies.length; i++) {
    if (dataCompanies[i].name) {
      companyNameArray.push(dataCompanies[i].name);
    };
  };

  for (i=0; i < companyNameArray.length; i++) {
    const companyListElement = document.getElementById('companies');
    const liElement = document.createElement('li');
    liElement.innerText = companyNameArray[i];
    companyListElement.appendChild(liElement);
  };

}

getUsers();
getCompanies();