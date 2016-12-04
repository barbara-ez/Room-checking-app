
window.onload = function(){


var rooms = [

   {

       roomId: 1,
       
       roomNo: '1212',

       roomType: 'Meeting',

       availability: true


   },

   {
       roomId: 2,

       roomNo: '1210',

       roomType: 'Quiet time',

       availability: false

   },

   {
       roomId: 3,

       roomNo: '1210',

       roomType: 'Game',

       availability: true

   },

   {
       roomId: 4,

       roomNo: '1212',

       roomType: 'Learning',

       availability: false

   },

   {
       roomId: 5,

       roomNo: '1212',

       roomType: 'Working',

       availability: true

   }

];



var url = window.location.href;

id = extractId(url);

var currentRooms = [];

for (var i=0; i<rooms.length; i++){

   if (rooms[i].roomId == id) {

       currentRooms.push(rooms[i])

   }

}

//var currentTitle = "meeting Room";

//document.getElementById('room-category').innerHTML(currentTitle)

var roomhtml="";

for (var i=0; i<currentRooms.length; i++) {

   roomhtml += "<td><h1>" + currentRooms[i].roomType + "</h1></td>"+"<td>Room No: " + currentRooms[i].roomNo + "</td>";

   if(currentRooms[i].availability == true) {

       roomhtml += "<br/><td>Status: Available</td>"

   } else {

       roomhtml += "<br/><td>Status: Not available</td>"

   }

}

document.getElementById('list-rooms').innerHTML = roomhtml



function extractId(url){

   return url.substring(url.indexOf('=') + 1)

};

}