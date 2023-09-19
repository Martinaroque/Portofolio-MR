let noesis = document.querySelector("#noesis");
let edp = document.querySelector("#edp");
let k2g = document.querySelector("#k2g");

function showNoesis(event) {
  event.preventDefault();
  let date = document.querySelector("#date");
  date.innerHTML = "June 2022 - Present";
  let description = document.querySelector("#description");
  description.innerHTML =
    "Currently, I am engaged in the NOS project. My daily responsibilities include the maintenance of existing dashboards and, when deemed necessary, the creation of new ones. Furthermore, I am actively engaged in the development and maintenance of workflows within Power Automate,aimed at automating processes on a daily and monthly basis. In pursuit of data analysis objectives,I adeptly employ Oracle SQL to construct tables and views, as well as to extract essential data.";
  let tecnologiesUsed = document.querySelector("#tecnologiesUsed");
  tecnologiesUsed.innerHTML =
    " Tecnologies used : PowerBI | Power Atomate | Oracle SQL";
  let mainActivities = document.querySelector("#mainActivities");
  mainActivities.innerHTML =
    " Main Activities : ->Analyze data ->Develop/maintenance dashboards ->Develop/maintain flows to automate processes";
}

noesis.addEventListener("click", showNoesis);

function showEdp(event) {
  event.preventDefault();
  let date = document.querySelector("#date");
  date.innerHTML = "August 2021 - May 2022";
  let description = document.querySelector("#description");
  description.innerHTML =
    "During my internship at EDP, I undertook the development of dashboards, composed queries to extract data for analytical purposes, and orchestrated process automation through UiPath robots.";
  let tecnologiesUsed = document.querySelector("#tecnologiesUsed");
  tecnologiesUsed.innerHTML =
    " Tecnologies used : MySQL | PowerBI | UIPath Robots | Bigquery";
  let mainActivities = document.querySelector("#mainActivities");
  mainActivities.innerHTML =
    " Main Activities : ->Learn to do dashboard ->Learn to work with MySQL, PowerBI and UIPath Robots ->Extract and analyze data";
}

edp.addEventListener("click", showEdp);

function showk2g(event) {
  event.preventDefault();
  let date = document.querySelector("#date");
  date.innerHTML = "September 2019 - August 2021";
  let description = document.querySelector("#description");
  description.innerHTML =
    "While employed at K2G Accounting Firm in the local accommodation department, my primary responsibilities encompassed managing client accounts, submitting invoices through the Portuguese finance system, handling their IRS and VAT requirements, and conducting regular meetings with them.";
  let tecnologiesUsed = document.querySelector("#tecnologiesUsed");
  tecnologiesUsed.innerHTML = " Tecnologies used : Excel | CentralGest | CRM ";
  let mainActivities = document.querySelector("#mainActivities");
  mainActivities.innerHTML = " Main Activities : ->Managing clients finances";
}

k2g.addEventListener("click", showk2g);

let toggleButton = document.getElementsByClassName("toggle-button")[0];
let navBarLinks = document.getElementsByClassName("navBar-links")[0];

function showNavBar() {
  navBarLinks.classList.toggle("active");
}

toggleButton.addEventListener("click", showNavBar);
