const persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

persons.map(getFullName);

function getFullName(item) {
  console.log([item.firstname, item.lastname].join(' '));
}
