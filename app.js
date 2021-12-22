const getUsers = async () => {
  const responseUsers = await fetch('http://localhost:3000/users');
  return await responseUsers.json();
};

const getCompanies = async () => {
  const responseCompanies = await fetch('http://localhost:3000/companies');
  return await responseCompanies.json();
};

const showData = async () => {
  const companies = await getCompanies();   //await, bo muszę poczekać, aż getCompanies w całości się wykona
  const users = await getUsers();
  const table = document.getElementById('table');

  for (let i = 0; i < companies.length; i++) {
    const companyName = companies[i].name;
    const newCompanyDiv = document.createElement('div');
    newCompanyDiv.classList.add('companies');
    newCompanyDiv.innerText = companyName;
    table.appendChild(newCompanyDiv);

    const newUserDiv = document.createElement('div');
    newUserDiv.classList.add('users');
    table.appendChild(newUserDiv);

    for (let j=0; j < users.length; j++) {
      if (companies[i].uri === users[j].uris.company) {
        const userName = users[j].name;
        newUserDiv.innerText += userName + "; ";
        console.log('done');
      }
    }
  }
}

showData();
