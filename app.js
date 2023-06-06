
const print = () => {

  window.print();
};



  document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault()
  
    var gender = document.getElementById('gender').value;
    var name = document.getElementById("name").value;
    var words = name.split(" ");
    var capitalized = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    var capitalizedName = capitalized.join(" ");
  
    var designation = document.getElementById('designation').value;
    var current_station = document.getElementById('current_station').value;
    var words = current_station.split(" ");
    var capitalized = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    var currentSchool = capitalized.join(" ");

    var to_station = document.getElementById('to_station').value;
    var words = to_station.split(" ");
    var capitalized = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    var newSchool = capitalized.join(" ");

    var remarks = document.getElementById('remarks').value;
    var words = remarks.split(" ");
    var capitalized = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    var capitalizedRemarks = capitalized.join(" ");


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
    nameCell.innerHTML = gender +" "+capitalizedName  +","+" "+ designation
    current_stationCell.innerHTML = old_station +" "+currentSchool;
    to_stationCell.innerHTML = new_station +" "+newSchool;
    remarksCell.innerHTML = capitalizedRemarks;

    document.getElementById('myForm').reset();
  
  });
