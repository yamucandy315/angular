function myFunction(){
    
    // var tbl = document.getElementById("myTable");  
    // alert(tbl);
    // var row = tbl.insertRow();
    // var cell1 = row.insertCell();
    // var cell2 = row.insertCell();
    // var cell3 = row.insertCell();
    // var cell4 = row.insertCell();
    // cell1.innerHTML = document.getElementById("pid").value;
    // cell2.innerHTML = document.getElementById("pDesc").value;
    // cell3.innerHTML = document.getElementById("pQuantity").value;
    // cell4.innerHTML = document.getElementById("pDate").value;
  }
  
  function test(){
    fetch('https://api.spacexdata.com/v4/launches').then(res => res.json())
      .then(resp => {
         console.log(' fetch resp', resp);
  
         resp.forEach((res) => {
          let tbl = document.getElementById("myTable");  
          let row = document.createElement("tr")
          tbl.appendChild(row);
          let cell1 = document.createElement("td")
          row.appendChild(cell1);
          let cell2 = document.createElement("td")
          row.appendChild(cell2);
          let cell3 = document.createElement("td")
          row.appendChild(cell3);
          let cell4 = document.createElement("td")
          row.appendChild(cell4);
          // cell1.innerHTML = res.date_local;
          // cell2.innerHTML = res.details;
          // cell3.innerHTML = res.name;
          // cell4.innerHTML = res.static_fire_date_unix;
         })
     }).catch(err => console.log('err', err));
  }