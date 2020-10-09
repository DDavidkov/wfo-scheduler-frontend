export const TABLE_DATA = [
  {
    id: 1,
    description: "WFO request 28.09.2020",
    team: "Marvel",
    date: new Date(2020, 9, 28),
    approved: true
  },
  {
    id: 2,
    description: "WFO request 30.09.2020",
    team: "Marvel",
    date: new Date(2020, 9, 30),
    approved: true
  },
  {
    id: 3,
    description: "WFO request 1.10.2020",
    team: "Marvel",
    date: new Date(2020, 10, 1),
    approved: false
  },
  {
    id: 4,
    description: "WFO request 2.10.2020",
    team: "Marvel",
    date: new Date(2020, 10, 2),
    approved: true
  },
  {
    id: 5,
    description: "WFO request 6.10.2020",
    team: "Marvel",
    date: new Date(2020, 10, 6),
    approved: false
  }
];

export const TABLE_COLUMNS = [
  { header: "Description", field: "description" },
  { header: "Team", field: "team" },
  { header: "Date", field: "date", type: "date" },
  { header: "Approved", field: "approved", type: "bool" }
];

export const EMPLOYEE_INFO = {
  first_name: "Spider",
  last_name: "Man",
  role: "Employee",
  team: {
    name: "Marvel"
  },
  manager: {
    first_name: "Bruce",
    last_name: "'The Hulk' Banner"
  }
};
//  const columns = [
//    { header: "Description", field: "description" },
//    { header: "Employee", field: "employee" },
//    { header: "Date", field: "date" },
//    { header: "Approved", field: "approved" }
//  ];

export const TEAM_REQUESTS = [
  {
    id: 1,
    description: "WFO request for today",
    employee: "Spider man",
    date: new Date(),
    approved: false
  },
  {
    id: 2,
    description: "WFO request for today",
    employee: "Iron man",
    date: new Date(),
    approved: false
  },
  {
    id: 3,
    description: "WFO request for today",
    employee: "Black Widow",
    date: new Date(),
    approved: true
  },
  {
    id: 4,
    description: "WFO request for today",
    employee: "Hulk",
    date: new Date(),
    approved: true
  },
  {
    id: 5,
    description: "WFO request for today",
    employee: "Captain Marvel",
    date: new Date(),
    approved: false
  }
];
