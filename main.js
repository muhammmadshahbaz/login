let todayarray = [];
function creare() {
  todayarray.unshift(document.getElementById("text").value);
  showtodo();
}

function showtodo(){
  for (let i = 0; i < todayarray.length; i++) 
  alert(todayarray[i]);
}
