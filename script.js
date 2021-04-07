

var card=document.querySelector(".card1");
var card2=document.querySelector(".card2");
var card3=document.querySelector(".card3");

var route=document.querySelector(".name13");
var route2=document.querySelector(".name23");
var route3=document.querySelector(".name33");


card.addEventListener("mouseover",() => {
    route.innerHTML="Discover more &nbsp;→"
});
card.addEventListener("mouseleave",() => {
    route.innerHTML=""
});

card2.addEventListener("mouseover",() => {
    route2.innerHTML="Discover more &nbsp;→"
});
card2.addEventListener("mouseleave",() => {
    route2.innerHTML=""
});

card3.addEventListener("mouseover",() => {
    route3.innerHTML="Discover more &nbsp;→"
});
card3.addEventListener("mouseleave",() => {
    route3.innerHTML=""
});


//nav bar scroll effect---------------------------------------------------------------------------------------------------

window.addEventListener("scroll",function(){
    var nav=document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY>0);
});

//end of nav bar scroll effect=======================================================================================


//This below code enables nav bar effect-----------------------------------------------------------------------------------

var lastId,
 topMenu = $(".items"),
 topMenuHeight = topMenu.outerHeight()+1,
 menuItems = topMenu.find("a"),
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });


menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 250);
  e.preventDefault();
});


$(window).scroll(function(){
   
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});

//end of nav bar effect===============================================================================================