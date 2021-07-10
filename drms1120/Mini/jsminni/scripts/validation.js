
document.addEventListener('DOMContentLoaded', function () {
  Promise.all([createCountry(),
  createState(),
  createCity(),
  createSkills(),
  createEducation()
  ]).then(() => {
    bindSkill(),
      bindEducation(),
      bindCountry(),
      printC()
  })

//   $('body').on('click', '.single-checkbox', function (evt) {
//     debugger;
//     console.log(evt.target);
//     console.log($(this).siblings(':checked').length);
//     if ($(this).siblings(':checked').length >= 3) {
//       //  this.checked = false;
//     }
// })
  
});

function printC(){
  debugger;
  //console.log($('body').find('.single-checkbox'));
}

function createEducation() {
  const educations = ['10', '12', 'Degree', 'Masters'];

  localStorage.setItem('Education', JSON.stringify(educations));
}

function bindEducation() {
  var list = JSON.parse(localStorage.getItem('Education'));
  // console.log(list);
  for (var value of list) {
    $("#checkbox").append(`<input class="edu-checkbox" type = "checkbox" id= "ed${value}"  
    name= "education" value = "${value}" > `)
      .append(`<label for = "${value}">${value}</label></div>`)
      .append(`<br>`);

  }
};


function createSkills() {
  const skills = ['html', 'css', 'js', 'c#', 'sql', 'mvc'];

  localStorage.setItem('Skill', JSON.stringify(skills));
}

function bindSkill() {
  var list = JSON.parse(localStorage.getItem('Skill'));
  // console.log(list);
  for (var value of list) {
    $("#checkboxSkill").append(`<input class="single-checkbox" type ="checkbox" id= "${value}"  
    name= "skill"  value = "${value}"> `)
      .append(`<label for = "${value}">${value}</label> </div>`)
      .append(`<br>`);
  }

};



function createCountry() {
  localStorage.removeItem('Country');

  const countries = [
    {
      "id": 1,
      "name": "USA"
    },
    {
      "id": 2,
      "name": "India"
    }
  ];
  localStorage.setItem('Country', JSON.stringify(countries));
}


function createState() {
  localStorage.removeItem('State');

  const states = [
    {
      "id": 1,
      "name": "CA",
      "countryId": 1
    },
    {
      "id": 2,
      "name": "NJ",
      "countryId": 1
    },
    {
      "id": 3,
      "name": "UK",
      "countryId": 2
    },
    {
      "id": 4,
      "name": "UP",
      "countryId": 2
    }
  ];

  localStorage.setItem('State', JSON.stringify(states));
}

function createCity() {
  localStorage.removeItem('City');

  const cities = [
    {
      "id": 1,
      "name": "San diego",
      "stateId": 1
    },
    {
      "id": 2,
      "name": "San jose",
      "stateId": 1
    },
    {
      "id": 3,
      "name": "Newyark",
      "stateId": 2
    },
    {
      "id": 4,
      "name": "Jersey city",
      "stateId": 2
    },
    {
      "id": 5,
      "name": "Ram nagar",
      "stateId": 3
    },
    {
      "id": 6,
      "name": "Nanital",
      "stateId": 3
    },
    {
      "id": 7,
      "name": "Lucknow",
      "stateId": 4
    },
    {
      "id": 8,
      "name": "Kanpur",
      "stateId": 4
    }
  ];

  localStorage.setItem('City', JSON.stringify(cities));
}

function bindCountry() {
  var countries = JSON.parse(localStorage.getItem('Country'));
  countries.forEach(element => {
    $("#countries").append(new Option(element.name, element.id));

  });
};



function fillStates() {
  let e = document.getElementById('countries');
  let states = JSON.parse(localStorage.getItem('State'));
  if (e.value === '-1') {
    clearOptions("states");
    clearOptions("cities");

    return;
  }
  let getStates = states.filter(item => {
    return item.countryId == e.value;
  })
  clearOptions("states");
  appendAllStates(getStates); // add all states in DOM
}


// remove previous options
function clearOptions(whichId) {
  $('#' + whichId).find('option').remove();
}

function appendAllStates(states) {
  $("#states").append(new Option('Select state', '-1'));
  states.forEach(element => {
    //create new instance of <option>
    $("#states").append(new Option(element.name, element.id));
  });
}


// fill cities in DOM
function fillCities() {
  let e = document.getElementById('states');

  let cities = JSON.parse(localStorage.getItem('City'));

  let getcities = cities.filter(item => {

    return item.stateId == e.value;

  })

  clearOptions('cities');
  appendAllCities(getcities);
}

function appendAllCities(cities) {
  $("#cities").append(new Option('Select city', '-1'));
  cities.forEach(element => {
    $("#cities").append(new Option(element.name, element.id));
  });
}


function countryName(myId) {
  // console.log(myId)
  const countries = JSON.parse(localStorage.getItem('Country'));
  let getcountries = countries.filter(item => {
    // console.log("---" , item.id, myId);
    return item.id == myId;

  });
  //  console.log("--", getcountries)
  return getcountries[0].name;
}

function stateName(myId) {
  const states = JSON.parse(localStorage.getItem('State'));
  let getstates = states.filter(item => {
    return item.id == myId;

  });
  // console.log(getstates);
  return getstates[0].name;
}



function cityName(myId) {
  const cities = JSON.parse(localStorage.getItem('City'));
  let getcities = cities.filter(item => {
    return item.id == myId;

  });
  // console.log(getcities);
  return getcities[0].name;
}

function clearValidationMessages() {
  if (document.querySelector("#spn1")) {
    var elm1 = document.querySelector("#spn1");
    elm1.parentNode.removeChild(elm1);

  }


  if (document.querySelector("#spn2")) {
    var elm2 = document.querySelector("#spn2");
    elm2.parentNode.removeChild(elm2);

  }
  if (document.querySelector("#spn3")) {
    var elm3 = document.querySelector("#spn3");
    elm3.parentNode.removeChild(elm3);

  }
  if (document.querySelector("#spn8")) {
    var elm8 = document.querySelector("#spn8");
    elm8.parentNode.removeChild(elm8);

  }
  if (document.querySelector("#spn4")) {
    var elm4 = document.querySelector("#spn4");
    elm4.parentNode.removeChild(elm4);

  }
  if (document.querySelector("#spn5")) {
    var elm5 = document.querySelector("#spn5");
    elm5.parentNode.removeChild(elm5);

  }
  if (document.querySelector("#spn6")) {
    var elm6 = document.querySelector("#spn6");
    elm6.parentNode.removeChild(elm6);

  }
  if (document.querySelector("#spn7")) {
    var elm7 = document.querySelector("#spn7");
    elm7.parentNode.removeChild(elm7);

  }
  if (document.querySelector("#spn9")) {
    var elm9 = document.querySelector("#spn9");
    elm9.parentNode.removeChild(elm9);

  }
  if (document.querySelector("#spn10")) {
    var elm10 = document.querySelector("#spn10");
    elm10.parentNode.removeChild(elm10);

  }
  if (document.querySelector("#spn11")) {
    var elm11 = document.querySelector("#spn11");
    elm11.parentNode.removeChild(elm11);

  }
  if (document.querySelector("#spn12")) {
    var elm12 = document.querySelector("#spn12");
    elm9.parentNode.removeChild(elm12);

  }
}
function validation() {
  var fname = document.querySelector("#first").value;
  var lname = document.querySelector("#last").value;
  var eid = document.querySelector("#eml").value;
  var country = document.querySelector("#countries").value;
  var state = document.querySelector("#states").value;
  var city = document.querySelector("#cities").value;
  var zips = document.querySelector("#zip").value;
  var jobTitles = document.querySelector("#jobTitle").value;
  var jobStart = document.querySelector("#jobStartDate").value;
  var mobileTel = document.querySelector("#mobile").value;
  var allEducation = document.querySelector(".edu-checkbox").value;
  var allSkill = document.querySelector(".single-checkbox").value;

  //Move all code to a function to maintAIN CODE READABILITY
  clearValidationMessages();

  // Validation start
  //conditions started 
  let validation = true;
  if (fname == "") {
    document.querySelector("#first").insertAdjacentHTML('afterend', '<span id="spn1" style="color:red;padding-left:5px">cannot leave this empty</span>');
    validation = false;
  }
  if (fname.match(/^\d/)) {
    flag = false;
    document.querySelector("#first").insertAdjacentHTML('afterend', '<span id="spn5" style="color:red;padding-left:5px">Name cant start with number</span>');
    validation = false;
  }
  if (fname.match(/[^a-zA-Z\d]/g)) {
    flag = false;
    document.querySelector("#first").insertAdjacentHTML('afterend', '<span id="spn6" style="color:red;padding-left:5px">Name cant start with special character</span>');
    validation = false;
  }

  //Notes: not needed per share requirements

  // if (lname == "") {
  //   document.querySelector("#last").insertAdjacentHTML('afterend', '<span id="spn2" style="color:red;padding-left:5px">cannot leave this empty</span>');
  //   validation = false;
  // }



  if (eid == "") {
    document.querySelector("#eml").insertAdjacentHTML('afterend', '<span  id="spn3" style="color:red;padding-left:5px">cannot leave this empty</span>');
    validation = false;
  }
  else if (!(eid.match(/^(.+)@(.+)\.(.+)$/))) {
    document.querySelector("#eml").insertAdjacentHTML('afterend', '<span id="spn8"style="color:red">invalid email address </span>');
    validation = false;
  }

  if (zips.length < 5) {
    document.querySelector("#zip").insertAdjacentHTML('afterend', '<span id="spn7"style="color:red">It should be more than 5 number </span>');
    validation = false;
  }
  if (zips.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)) {
    document.querySelector("#zip").insertAdjacentHTML('afterend', '<span id="spn9"style="color:red">Invalid Zipcode  </span>');
    validation = false;
  }

  if (mobileTel.length < 10) {
    document.querySelector("#mobile").insertAdjacentHTML('afterend', '<span id="spn10"style="color:red">Mobile Number should be of 10 digit </span>');
    validation = false;
  }

  if (mobileTel.match(/(\d)\1{9}/g)) {
    document.querySelector("#mobile").insertAdjacentHTML('afterend', '<span id="spn11"style="color:red"> All digits cant be zero </span>');
    validation = false;
  }

  if (jobStart.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/)) {
    document.querySelector("#mobile").insertAdjacentHTML('afterend', '<span id="spn12"style="color:red"> Start Date must be in format: DD-MM-YYYY </span>');
    validation = false;
  }


  if (validation === true) {
    //console.log(localStorage.details);
    if (localStorage.details != undefined) {
      var users = JSON.parse(localStorage.details);
    }
    else {
      var users = [];
    }

    var allEducation = []
    var checkboxes = document.querySelectorAll('input[class="edu-checkbox"]:checked')

    for (var i = 0; i < checkboxes.length; i++) {

      allEducation.push(checkboxes[i].value)
    }
    var allSkill = []
    var checkboxes = document.querySelectorAll('input[class="single-checkbox"]:checked')

    for (var i = 0; i < checkboxes.length; i++) {

      allSkill.push(checkboxes[i].value)
    }


    var obj = {
      FirstName: fname,
      LastName: lname,
      Email: eid,
      MobileTel: mobileTel,
      Country: countryName(country),
      State: stateName(state),
      City: cityName(city),
      Zip: zips,
      JobTitle: jobTitles,
      JobStart: jobStart,
      Educations: allEducation,
      Skills: allSkill

    };

    users.push(obj);
    document.forms[0].reset();


    localStorage.details = JSON.stringify(users);

   

    reset();
    //Notes Moved below code to table page js i.e. emp.js and no use of this here  
    // var resp = JSON.parse(localStorage.details),
    //   len = resp.length,
    //   html = '';

    // html = '<table border="1" style="border-collapse:collapse;">';
    // html += '<tr><td>Name </td>';
    // html += '<td>Address</td>';
    // html += '<td>Contact</td>';
    // html += '<td>JobTitle</td>';
    // html += '<td>JobStart</td>';
    // html += '<td>Skills</td>';
    // html += '<td>Educations</td></tr>';



    // for (var i = 0; i < len; i++) {
    //   html += '<tr>';
    //   html += '<td>' + resp[i].FirstName + " " + resp[i].LastName + '</td>';
    //   html += '<td>' + resp[i].Country + "," + resp[i].State + ", " + resp[i].City + ", " + resp[i].Zip + '</td>';
    //   html += '<td>' + resp[i].Email + " " + resp[i].MobileTel + '</td>';
    //   html += '<td>' + resp[i].JobTitle + '</td>';
    //   html += '<td>' + resp[i].JobStart + '</td>';
    //   html += '<td>' + resp[i].Skills + '</td>';
    //   html += '<td>' + resp[i].Educations + '</td>';
    //   html += '</tr>';
    // }

    // document.querySelector("#cntr").innerHTML = html;

  //True block end here
  }

  

  //Note moved this section to a new function for 
  //#1 better code read 
  //#2 separation of concerns as thos part have specific job to do i.e. reset form control values to default 
  //#3 Also moved this inside if block where form is validated as we only reset form values when user submission is done

  // document.getElementById("first").value = "";
  // document.getElementById("last").value = "";
  // document.getElementById("eml").value = "";
  // document.getElementById("mobile").value = "";
  // document.getElementById("countries").value = "";
  // document.getElementById("states").value = "";
  // document.getElementById("cities").value = "";
  // document.getElementById("zip").value = "";
  // document.getElementById("jobTitle").value = "";
  // document.getElementById("jobStartDate").value = "";
  // document.getElementById("ed10").value = "";
  // document.getElementById("ed12").value = "";
  // document.getElementById("edDegree").value = "";
  // document.getElementById("edMasters").value = "";
  // document.getElementById("html").value = "";
  // document.getElementById("css").value = "";
  // document.getElementById("js").value = "";
  // document.getElementById("c#").value = "";
  // document.getElementById("sql").value = "";
  // document.getElementById("mvc").value = "";


}

function reset() {
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("eml").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("countries").value = "";
  document.getElementById("states").value = "";
  document.getElementById("cities").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("jobTitle").value = "";
  document.getElementById("jobStartDate").value = "";
  document.getElementById("ed10").value = "";
  document.getElementById("ed12").value = "";
  document.getElementById("edDegree").value = "";
  document.getElementById("edMasters").value = "";
  document.getElementById("html").value = "";
  document.getElementById("css").value = "";
  document.getElementById("js").value = "";
  document.getElementById("c#").value = "";
  document.getElementById("sql").value = "";
  document.getElementById("mvc").value = "";
}
//Moved this to emp.js 
// function display() {
//   if (localStorage.details == undefined || localStorage.details == '')
//     return false;
//   var resp = JSON.parse(localStorage.details),
//     len = resp.length,
//     html = '';

//   html = '<table border="1" style="border-collapse:collapse;">';
//   html += '<tr><td>Name </td>';
//   html += '<td>Address</td>';
//   html += '<td>Contact</td>';
//   html += '<td>JobTitle</td>';
//   html += '<td>JobStart</td>';
//   html += '<td>Skills</td>';
//   html += '<td>Educations</td></tr>';


//   for (var i = 0; i < len; i++) {
//     html += '<tr>';
//     html += '<td>' + resp[i].FirstName + " " + resp[i].LastName + '</td>';
//     html += '<td>' + resp[i].Country + " ," + resp[i].State + " ," + resp[i].City + ", " + resp[i].Zip + '</td>';
//     html += '<td>' + resp[i].Email + " " + resp[i].MobileTel + '</td>';
//     html += '<td>' + resp[i].JobTitle + '</td>';
//     html += '<td>' + resp[i].JobStart + '</td>';
//     html += '<td>' + resp[i].Skills + '</td>';
//     html += '<td>' + resp[i].Educations + '</td>';
//     html += '</tr>';

//     html += '</tr>';
//   }

//   document.querySelector("#cntr").innerHTML = html;

// } 