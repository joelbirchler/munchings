$(function() {
  var $food = $('#food'), $nav = $('#nav');
    
  $food.empty();
  for (var crunch in crunchings) {
    $food.append("<li class='" + (crunchings[crunch] ? 'legal' : 'illegal') + "'>" + crunch + "</li>");
  }
  
  var select = function(el) {
    var $el = $(el);
    $el.parent().find(".selected").removeClass("selected");
    $el.addClass("selected");
  }
  
  $nav.children('.all').on('click', function(event) {
    select(event.target);
    $food.find('li').show();
  });
  
  $nav.children('.legal').on('click', function(event) {
    select(event.target);
    $food.find('li.legal').show();
    $food.find('li.illegal').hide();
  });
  
  $nav.children('.illegal').on('click', function(event) {
    select(event.target);
    $food.find('li.legal').hide();
    $food.find('li.illegal').show();
  });
});