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
    html += '<tr><th>Name </th>';
    html += '<th>Address</th>';
    html += '<th>Contact</th>';
    html += '<th>JobTitle</th>';

    html += '<th data-column="JobStart" data-order="desc">JobStart</th>';
    html += '<th>Skills</th>';
    html += '<th>Educations</th>';
    html += '<th>Actions</th></tr>';


    for (var i = 0; i < len; i++) {
        html += '<tr>';
        html += '<td>' + resp[i].FirstName + " " + resp[i].LastName + '</td>';
        html += '<td>' + resp[i].Country + " ," + resp[i].State + " ," + resp[i].City + ", " + resp[i].Zip + '</td>';
        html += '<td>' + resp[i].Email + " " + resp[i].MobileTel + '</td>';
        html += '<td>' + resp[i].JobTitle + '</td>';
        html += '<td>' + resp[i].JobStart + '</td>';
        html += '<td>' + resp[i].Skills + '</td>';
        html += '<td>' + resp[i].Educations + '</td>';
        html += '<td> <button class= "btnDel" id = "${i}" > Delete </button </td>';
        html += '</tr>';

        html += '</tr>';
    }

    document.querySelector("#cntr").innerHTML = html;

    
 
    var searchInput = document.getElementById("search");
    var rows = document.querySelectorAll("tbody tr");
    // console.log(rows);
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


//   $('.btnDel').click(function(event) {
//             console.log(event.target);
           
//             // event.target.parentElement.parentElement.remove();
         
  
//     });   
 
 
    $('.btnDel').click(function() {
      var rowId =$(this).closest('td').parent()[0].sectionRowIndex;
        console.log(rowId);
        const details = JSON.parse(localStorage.getItem('details'));
        // console.log(details);
        const filtered = details.filter(item => item.index!==  rowId );
        localStorage.setItem('details', JSON.stringify(filtered));
         }); 
 


        $('th').on('click', function(){
            console.log('clicked');
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
  
   
    makePager = function(page){
        var show_per_page = 2;
                            var number_of_items = $('#myTable tr').size();
                            var number_of_pages = Math.ceil(number_of_items / show_per_page);
                           var number_of_pages_todisplay= Math.ceil(number_of_items /pageSize);
                    var navigation_html = '';
                    var current_page = page;
                    var current_link = (number_of_pages_todisplay >= current_page ? 1 : number_of_pages_todisplay + 1);
                    if (current_page > 1)
                        current_link = current_page;
                    if (current_link != 1) navigation_html += "<a class='nextbutton' href=\"javascript:first();\">« Start&nbsp;</a>&nbsp;<a class='nextbutton' href=\"javascript:previous();\">« Prev&nbsp;</a>&nbsp;";
                    if (current_link == number_of_pages - 1) current_link = current_link - 3;
                    else if (current_link == number_of_pages) current_link = current_link - 4;
                    else if (current_link > 2) current_link = current_link - 2;
                    else current_link = 1;
                    var pages = number_of_pages_todisplay;
                    while (pages != 0) {
                        if (number_of_pages < current_link) { break; }
                        if (current_link >= 1)
                            navigation_html += "<a class='" + ((current_link == current_page) ? "currentPageButton" : "numericButton") + "' href=\"javascript:showPage(" + current_link + ")\" longdesc='" + current_link + "'>" + (current_link) + "</a>&nbsp;";
                        current_link++;
                        pages--;
                    }
                    if (number_of_pages > current_page){
                        navigation_html += "<a class='nextbutton' href=\"javascript:next()\">Next »</a>&nbsp;<a class='nextbutton' href=\"javascript:last(" + number_of_pages + ");\">Last »</a>";
                    }
                            $('#page_navigation').html(navigation_html);
              }
              var pageSize = 5;
              showPage = function (page) {
                    $("#myTable tr").hide();
                    $('#current_page').val(page);
                    $("#myTable tr").each(function (n) {
                        if (n >= pageSize * (page - 1) && n < pageSize * page)
                            $(this).show();
                    });
                makePager(page);
               }
                showPage(1);
               next = function () {
                    new_page = parseInt($('#current_page').val()) + 1;
                    showPage(new_page);
                }
                last = function (number_of_pages) {
                    new_page = number_of_pages;
                    $('#current_page').val(new_page);
                    showPage(new_page);
                }
                first = function () {
                    var new_page = "1";
                    $('#current_page').val(new_page);
                    showPage(new_page);    
              }
                previous = function () {
                    new_page = parseInt($('#current_page').val()) - 1;
                    $('#current_page').val(new_page);
                    showPage(new_page);
                }
 

             $('th').on('click', function(){
                var column = $(this).data('column')
                var order = $(this).data('order')
                console.log(column,order);
          
                var text = $(this).html()
                text = text.substring(0, text.length - 1)
        
                if(order == 'desc'){
                    $(this).data('order', "asc")
                    myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
                    text += '&#9660'
        
                }else{
                    $(this).data('order', "desc")
                    myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
                    text += '&#9650'
        
                }
                $(this).html(text)
         
            })
        
        
          

}
 