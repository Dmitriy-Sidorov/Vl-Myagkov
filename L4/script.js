$(document).ready(function(){
  $('nav.menu').on('click', 'a:not(.active)', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.block').eq($(this).index()).addClass('active').siblings().removeClass('active');
  });
});