
const print = () => {

  window.print();
};



  document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault()
  
    var gender = document.getElementById('gender').value;
    var name = document.getElementById('name').value;
    var designation = document.getElementById('designation').value;
    var current_station = document.getElementById('current_station').value;
    var to_station = document.getElementById('to_station').value;
    var remarks = document.getElementById('remarks').value;
   

    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var rowIndex = table.rows.length + 1; // Get the new rowIndex
    var newRow = table.insertRow();
    

  

    var serialCell = newRow.insertCell(0)
    var nameCell = newRow.insertCell(1);
    var current_stationCell = newRow.insertCell(2);
    var to_stationCell = newRow.insertCell(2);
    var remarksCell = newRow.insertCell(4);

    serialCell.innerHTML = rowIndex
    nameCell.innerHTML = gender +" "+name  +","+" "+ designation
    current_stationCell.innerHTML = current_station;
    to_stationCell.innerHTML = to_station;
    remarksCell.innerHTML = remarks;

    document.getElementById('myForm').reset();
  
  });
