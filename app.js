"use strict";
const table = document.getElementById('table');
const getUsers = async () => {
    const responseUsers = await fetch('http://localhost:3000/users');
    return await responseUsers.json();
};
const getCompanies = async () => {
    const responseCompanies = await fetch('http://localhost:3000/companies');
    return await responseCompanies.json();
};
const showData = async () => {
    const companies = await getCompanies();
    const users = await getUsers();
    for (let i = 0; i < companies.length; i++) {
        const companyName = companies[i].name;
        const newCompanyDiv = document.createElement('div');
        newCompanyDiv.classList.add('companies');
        newCompanyDiv.innerText = companyName;
        table.appendChild(newCompanyDiv);
        const newUserDiv = document.createElement('div');
        newUserDiv.classList.add('users');
        const filterFunction = (user) => {
            return user.uris.company === companies[i].uri;
        };
        newUserDiv.innerText = users.filter(filterFunction).map(user => user.name).toString();
        table.appendChild(newUserDiv);
        console.log('done');
    }
};
showData();
