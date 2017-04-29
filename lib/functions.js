$(function () {
 var tableData;  
 var firstName;
 var lastName;
      chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (key in changes) {
        if(key == "buffer2"){
            chrome.storage.local.get("buffer1", function (obj) {
                tableData = fixData(obj.buffer1, changes[key].newValue)
                writeTable(tableData);             
            });
        }
        }
      });
    
$(document).on('click','.link',function() {
    var row = tableData[this.getAttribute("value")];
    var output = row[0] + "|" + row[1] + ' ' + row[2] + " " + firstName + " " + lastName + " " + row[3];
    copyToClipboard(output);
});   
    
$( "#search" ).click(function() {
             firstName = $("#name").val().split(" ")[0]; 
             lastName = $("#name").val().split(" ")[1]; 
            var email = $("#email").val();
            
            if(firstName){
                var parm1 = "pv0="+firstName + "&";
            } else {
                var parm1 = "pv0=-1&";
            }
            
            if(lastName){
                var parm2 = "pv1="+lastName + "&";
            } else {
                var parm2 = "pv1=-1&";
            }
            
            
            if(email){
                var parm3 = "pv2="+email;
            } else {
                var parm3 = "pv2=-1";
            }
            
            if(parm1 == "pv0=-1&" && parm2 == "pv1=-1&" && parm3 == "pv2=-1" ){

            } else {
                var url = "https://dealertrack-production.my.salesforce.com/00O32000004pn8f?" + parm1 + parm2 + parm3;
                window.open(url);
            }
        });

$(".input").keypress(function (e) {
    if (e.which == 13) {
        $( "#search" ).click();
    }
});
    
function fixData(array1, array2) {
    var i, j;
    for(i = 0; i < array1.length; i++){
        for(j = 0; j < array2.length; j++){
            if(array1[i][2] == array2[j][0]){
                array1[i][2] = array2[j][1];
                break;
            }
        }
        if(j == array2.length){
           array1[i][2] = "-"; 
        }
    }
    
    return multiDimensionalUnique(array1);
}
    
function multiDimensionalUnique(arr) {
    var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}

    
function writeTable(array) {
        $('#result').empty();
        var tbody = $('#result');
            tbody.append('<tr><th id="accountName">Account Name</th><th id="dtid">DTID</th><th id="service">Service Account</th><th id="emailtable">Email</th><th>Copy Data</th></tr>');
        for (var i = 0; i < array.length; i++) {
            var tr = $('<tr/>').appendTo(tbody);
            for (var j = 0; j < 4; j++) {
                tr.append('<td>' + array[i][j] + '</td>');
            }
            tr.append('<td class="link" value ="'+i+'"><img src="lib\\images\\clipboard.png" alt=""></img></td>');
        }
        $( "#accountName" ).click(function() {
            sortTable(0);
        });
        $( "#dtid" ).click(function() {
            sortTable(1);
        });
        $( "#service" ).click(function() {
            sortTable(2);
        });
        $( "#emailtable" ).click(function() {
            sortTable(3);
        });
}

function copyToClipboard(val){ 
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    dummy.setAttribute("value", val);
 //   dummy.focus();
    dummy.select();
    document.execCommand("copy");
    dummy.remove(); 
    $("#alert").empty();
    $("#alert").append("<div class=\"ui-widget\"> <div class=\"ui-state-highlight ui-corner-all elementToFadeInAndOut\" style=\"margin-top: 20px; padding: 0 .7em;\"><p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin-right: .3em;\"></span><strong>Data Copied!</strong></p></div></div>");
    $("#email").focus();
}
    
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("result");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
    
})