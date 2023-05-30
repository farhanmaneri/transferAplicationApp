
const print = () => {

  document.addEventListener('click', function() {
    window.print();
  })};



  document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault()
  
    var gender = document.getElementById('gender').value;
    console.log("gender value : ", gender);
    var name = document.getElementById('name').value;
    console.log("name value : ", name);

    var designation = document.getElementById('designation').value;
    console.log("designation value : ", designation);

    var current_station = document.getElementById('current_station').value;
    console.log("current_station value : ", designation);

    var to_station = document.getElementById('to_station').value;
    console.log("designation value : ", designation);
    var remarks = document.getElementById('remarks').value;
    

    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var genderCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var designationCell = newRow.insertCell(2);
    var current_stationCell = newRow.insertCell(3);
    var to_stationCell = newRow.insertCell(4);
    var remarksCell = newRow.insertCell(5);

    genderCell.innerHTML = gender;
    nameCell.innerHTML = name;
    designationCell.innerHTML = designation;
    current_stationCell.innerHTML = current_station;
    to_stationCell.innerHTML = to_station;
    remarksCell.innerHTML = remarks;

    document.getElementById('myForm').reset();
  
  });
