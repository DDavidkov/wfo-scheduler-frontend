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
