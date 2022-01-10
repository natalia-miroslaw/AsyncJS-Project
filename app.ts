const table = document.getElementById('table');

interface CompanyType {
  name: string;
  uri: string;
}

interface UserType {
  name: string;
  uris: {
    company: string
  };
}

const getUsers = async (): Promise<UserType[]> => {
  const responseUsers = await fetch('http://localhost:3000/users');
  return await responseUsers.json();
};

const getCompanies = async (): Promise<CompanyType[]> => {
  const responseCompanies = await fetch('http://localhost:3000/companies');
  return await responseCompanies.json();
};

const showData = async () => {
  if (table === null) {
    return;
  }
  const companies = await getCompanies();   //await, bo muszę poczekać, aż getCompanies w całości się wykona
  const users = await getUsers();

  for (let i = 0; i < companies.length; i++) {
    const companyName: string = companies[i].name;
    const newCompanyDiv = document.createElement('div');
    newCompanyDiv.classList.add('companies');
    newCompanyDiv.innerText = companyName;
    table.appendChild(newCompanyDiv);

    const newUserDiv = document.createElement('div');
    newUserDiv.classList.add('users');

    const filterFunction = (user: UserType) => {
      return user.uris.company === companies[i].uri;
    }

    newUserDiv.innerText = users.filter(filterFunction).map(user => user.name).toString();
    table.appendChild(newUserDiv);
    console.log('done');
  }
}

showData();
