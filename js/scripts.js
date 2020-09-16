//Reserve button jquery code

$(function () {

    // Adding a Button click event listener 
   $("#reserveButton").click(function(){
        // showing Modal
        $("#reserveModal").modal("show");
   });
});


// Login Modal Jquery code

$(function () {

    // Adding a Button click event listener 
   $("#loginButton").click(function(){
        // showing Modal
        $("#loginModal").modal("show");
   });
});
    
    
    
    
    
    $(function() {
        $(".carousel").carousel( { interval: 2000 } );
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
            } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause"); 
            }
        });
    });



        //Button ID's reserveButton | loginButton
      



    /* Workshop code theory

        //html

        <!-- Update the code below this comment -->
                <button class="btn btn-warning" id="btnShowBanana">Show Banana</button>
                <button class="btn btn-success"id="btnShowMonkey">Show Monkey</button>
                <button class="btn btn-warning" id="btnHideBanana">Hide Banana</button>
                <button class="btn btn-success" id="btnHideMonkey">Hide Monkey</button>
                <div>
                <img  class='collapse'  src="https://i.ibb.co/82WT957/banana.png" id='banana' />
                <img class='collapse'  src="https://i.ibb.co/VJDfnxN/monkey-w-banana.png" id='monkey' />
                </div>
                <!-- Update the code above this comment -->
                <hr />
                <p>This Code Challenge is intended to give you more practice with using jQuery to manipulate Bootstrap components.</p>
                <p>
        //End html

    $(document).ready(function(){
        $("#btnShowBanana").click(function(){
          $('#banana').show();
         });
      });
     
     $(document).ready(function(){
        $("#btnShowMonkey").click(function(){
          $('#monkey').show();
         });
      });
     
     $(document).ready(function(){
       $("#btnHideBanana").click(function(){
         $('#banana').hide();
       });
     });
     
     $(document).ready(function(){
       $("#btnHideMonkey").click(function(){
         $('#monkey').hide();
       });
     });
     */