
const print = () => {

  window.print();
};



  document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault()
  
    var gender = document.getElementById('gender').value;
    var name = document.getElementById('name').value.toUpperCase();
    var designation = document.getElementById('designation').value;
    var current_station = document.getElementById('current_station').value.toUpperCase();
    var to_station = document.getElementById('to_station').value.toUpperCase();
    var remarks = document.getElementById('remarks').value;
    var old_station = document.getElementById('old_station').value;
    var new_station = document.getElementById('new_station').value;
   

    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var rowIndex = table.rows.length + 1; // Get the new rowIndex
    var newRow = table.insertRow();
    

  

    var serialCell = newRow.insertCell(0)
    var nameCell = newRow.insertCell(1);
    var current_stationCell = newRow.insertCell(2);
    var to_stationCell = newRow.insertCell(3);
    var remarksCell = newRow.insertCell(4);

    serialCell.innerHTML = rowIndex
    nameCell.innerHTML = gender +" "+name  +","+" "+ designation
    current_stationCell.innerHTML = old_station +" "+current_station;
    to_stationCell.innerHTML = new_station +" "+to_station;
    remarksCell.innerHTML = remarks;

    document.getElementById('myForm').reset();
  
  });
