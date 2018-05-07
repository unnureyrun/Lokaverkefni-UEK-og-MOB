    var getMonth = [
  'Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Julí', 'Ágúst', 'September', 'Október', 'Nóvember', 'Desember'
]
var villa = function() {
  $("#fela").hide();
  $("#error").show();
  $("#error").html("<h4 class='otengt'>Ekki næst samband við vefþjón, komdu aftur seinna að skoða tónleika í þínu nágreni.</h4>");
};
$.ajax({
  'url': 'https://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json', 
  'error': villa,
  'success': function(response) {
   

    
    for (var x = 0; x < response.results.length; x++){
       var concert = response.results[x];
       var concertDate = new Date(concert.dateOfShow);
    var nuna = new Date();
      nuna.setHours(23);
      nuna.setMinutes(59);
    
   
    var event = concert.eventDateName;
    var name = concert.name;
    var date = concert.dateOfShow;
    var userGroup = concert.userGroupName;
    var hall = concert.eventHallName;
    var img = concert.imageSource; 
      
    
    
  var event= $("<div class='event'></div>");   
event.append("<div class='name'>"+concert.eventDateName+"</div>");
event.append("<div class='date'>"+concertDate.getDate()+"."+getMonth[concertDate.getMonth()]+" "+concertDate.getFullYear()+" Kl: "+concertDate.getHours()+":"+(concertDate.getMinutes() <10?'0'+concertDate.getMinutes():concertDate.getMinutes())+"</div>");
event.append("<div class='nafn'>"+concert.name+"</div>");
event.append("<div class='hall'>"+concert.eventHallName+"</div>");
event.append("<div class='userGroup'>"+concert.userGroupName+"</div>");
event.append("<img class='img'src='"+concert.imageSource+"' alt='Mynd viðburðar'>");
      
    console.log(response);
    if(concertDate<=nuna){
   $("#IDag").append(event);
    }
      else{
      $("#Seinna").append(event);
    }
      
            
   
    }
     var size = $("#idag .event").length;
     if(size<1){ $("#idag").text("Engir tónleikar í        dag, fyrir neðan má sjá seinni tónleika.");
               }
  
  }
 
});
$(document).ready(function(){
  $(".menu-icon").click(function(){
    $("#navbar").toggleClass("menu-open");
    
  });
  
});