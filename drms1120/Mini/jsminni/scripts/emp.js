 document.addEventListener('DOMContentLoaded', function () {
    display();

});
 
  
function display() {
    if (localStorage.details == undefined || localStorage.details == '')
        return false;
    var resp = JSON.parse(localStorage.details),
        len = resp.length,
        html = '';

    html = '<table border="1" id ="myTable" style="border-collapse:collapse;">';
    html += '<tr><td>Name </td>';
    html += '<td>Address</td>';
    html += '<td>Contact</td>';
    html += '<td>JobTitle</td>';
    html += '<td>JobStart</td>';
    html += '<td>Skills</td>';
    html += '<td>Educations</td></tr>';


    for (var i = 0; i < len; i++) {
        html += '<tr>';
        html += '<td>' + resp[i].FirstName + " " + resp[i].LastName + '</td>';
        html += '<td>' + resp[i].Country + " ," + resp[i].State + " ," + resp[i].City + ", " + resp[i].Zip + '</td>';
        html += '<td>' + resp[i].Email + " " + resp[i].MobileTel + '</td>';
        html += '<td>' + resp[i].JobTitle + '</td>';
        html += '<td>' + resp[i].JobStart + '</td>';
        html += '<td>' + resp[i].Skills + '</td>';
        html += '<td>' + resp[i].Educations + '</td>';
        html += '</tr>';

        html += '</tr>';
    }

    document.querySelector("#cntr").innerHTML = html;
    
    
    var searchInput = document.getElementById("search");
    var rows = document.querySelectorAll("tbody tr");
    console.log(rows);
    searchInput.addEventListener("keyup", function (event) {
      var q = event.target.value.toLowerCase();
      rows.forEach((row) => {
        row.querySelector("td").textContent.toLowerCase().startsWith(q)
          ? (row.style.display = "table-row")
          : (row.style.display = "none");
      });
    });
    
   $("#Jtitles").on("change", function () {
            var title = $('#Jtitles').find("option:selected").val();
          
            SearchData(title)
        });

 

    function SearchData(title) {
        if (title.toUpperCase() == 'ALL') {
            $('#myTable tbody tr').show();
        } else {
            $('#myTable tbody tr:has(td)').each(function () {
                var rowtitles = $.trim($(this).find('td:eq(3)').text());
                
                if (title.toUpperCase() != 'ALL') {
                    if (rowtitles.toUpperCase() == title.toUpperCase()) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                } else if ($(this).find('td:eq(3)').text() != '' || $(this).find('td:eq(3)').text() != '') {
                    if (title != 'all') {
                        if (rowtitles.toUpperCase() == title.toUpperCase()) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    }
                   
                }
 
            });
        }
    }
 
    

     
}

 
 