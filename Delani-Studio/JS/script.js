$
//what we do section
$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").hide()
    $("#design-image").slideDown().hide()
    $("#design").show();
  });
  $("#design").click(function(){
    $("#design").hide();
    $("#design-image").show();
    $("#design").slideUp();
    $("#design-image").slideDown();
  });
   $("#development-image").click(function(){
    $("#development-image").hide()
    $("#development-image").slideDown().hide()
    $("#development").show();
  });
  $("#development").click(function(){
    $("#development").hide();
    $("#development-image").show();
    $("#development").slideUp();
    $("#development-image").slideDown();
  });
    $("#product-image").click(function(){
    $("#product-image").hide()
    $("#product-image").slideDown().hide()
    $("#product").show();
  });
  $("#product").click(function(){
    $("#product").hide();
    $("#product-image").show();
    $("#product").slideUp();
    $("#product-image").slideDown();
  });
});
// poertfolio text overlay images
$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
$("#work1").mouseover(function(){
  $("#overlay").show();
}).mouseout(function(){
  $("#overlay").hide();
});
$("#work2").mouseover(function(){
  $("#overlay2").show();
}).mouseout(function(){
  $("#overlay2").hide();
});
$("#work3").mouseover(function(){
  $("#overlay3").show();
}).mouseout(function(){
  $("#overlay3").hide();
});
$("#work4").mouseover(function(){
  $("#overlay4").show();
}).mouseout(function(){
  $("#overlay4").hide();
});
$("#work5").mouseover(function(){
  $("#overlay5").show();
}).mouseout(function(){
  $("#overlay5").hide();
});
$("#work6").mouseover(function(){
  $("#overlay6").show();
}).mouseout(function(){
  $("#overlay6").hide();
});
$("#work7").mouseover(function(){
  $("#overlay7").show();
}).mouseout(function(){
  $("#overlay7").hide();
});
$("#work8").mouseover(function(){
  $("#overlay8").show();
}).mouseout(function(){
  $("#overlay8").hide();
});
});
//form input validation
$(document).ready(function(){
$("form#formValidity").submit(function(event){
  // event.preventDefault();
  var name = $("input#MERGE1").val();
  var email = $("input#MERGE0").val();
  var message = $("textarea#comment").val();
  if (name && email){
    alert (name + ", Massage recived. Thank you for reaching out to us.");
  }
  else {
    alert("Please enter your name and email!");
  }
});
});