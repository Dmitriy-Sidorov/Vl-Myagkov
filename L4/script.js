$(document).ready(function(){
  $('nav.menu').on('click', 'a:not(.active)', function(){
    $(this).addClass('active').siblings().removeClass('active')
    .closest('div.main').find('div.block').removeClass('active')
    .eq($(this).index()).addClass('active');
  });
});