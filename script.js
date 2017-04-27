$(document).ready(function(){

//Click function to make reservation
$(".makeRez").click(function(){
  //or slideToggle depending on what we want
  $("#myModal").slideDown("slow");
});
//add an if else later? like if the seat is reservered, on hover it will
//show their info. else fadeTo? butts.

//Hover changes opacity
$('.seat').hover(function(){
    $(this).fadeTo(100, '.35');
  },
  function(){
    $(this).fadeTo(100, '1');
  }
);

//Click function to toggle and add class
$('.seat').click(function(){
  $(this).toggleClass('seatSelected');

  });

$(".seat .reserved").append(".people");

$('.reserveIt').click(function() {
  var first = $("#firstName").val();
  var last = $("#lastName").val();
  var email = $("#email").val();
  var phone = $("#phone").val()
  var data = {
    // rows: [{
      First: first,
      Last: last,
      Email: email,
      Phone: phone
    // }]
  }
  var dataDisplay = data.First + ' ' + data.Last;
  console.log(data);
// switches classes from selected to reserved
  $(".seatSelected").replaceWith('<div class="seat reserved col-xs-2"><p>'+dataDisplay+'<div id="a1"></div></div>)')
                    // .addClass('reserved')
                    .removeClass('seatSelected')
                    .off('click');
  $('.reserved p').css('visibility','hidden');
  $('.reserved').hover(function(){
      $('.reserved p').css('visibility', 'visible');
    },
    function(){
      $('.reserved p').css('visibility', 'hidden');
    }
  );
  // $('.reserved p').css('visibility','hidden');
});

// hover to show reserved seat names


//Jumbotron button toggle
$('.hideHeader').click(function(){
  $('.jumbotron').slideToggle();
  var $this = $(this);
    $this.toggleClass('.btn');
    if($this.hasClass('.btn')){
        $this.text('Show more');
    } else {
      $this.text('Show less');
    }
});

//document.ready END
});
