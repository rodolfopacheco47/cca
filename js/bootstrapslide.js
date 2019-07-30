$(function(){
   $('#l1').click(function(){
       $('#i1').show();
       $('#i2').hide();
       $('#i3').hide();
   });
   $('#l2').click(function(){
       $('#i1').hide();
       $('#i2').show();
       $('#i3').hide();
   });
      $('#l3').click(function(){
       $('#i1').hide();
       $('#i2').hide();
       $('#i3').show();
   });
});

$(document).ready(function(){
    var speed = 4000;
    var run = setInterval('rotate()',speed);
    
    var item_width= $('#itens li').outerWidth(); //outerWidth pega valor da largura
    var left_valei = $item_width * (-1);
    
    $('#itens li:first').before($('#itens li:last'));
    
    $('#itens ul').css({'left' : left_value});
    
    $("#prev").click(function(){
        
        var left_intend = parseInt($('#itens ul').css('left')) + item_width;
        
        $('#itens ul').animate({'left':left_intend}, 200, function(){
                               
        $('#itens li:first').before($('#itens li:last'));
        
        $('#itens ul').css({'left' : left_value});
        });
                           
    });
        
               
          
    function rotate(){
        $('#next').click();
    }
                    
    
    
    
    

});