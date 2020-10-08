$(function(){
  
  //class="img_button"の要素をクリックした時、その要素の兄弟要素のclass="content"がスライドトグル表示/非表示される
  $(".img_button").on("click",function(){
    $(this).siblings(".content").slideToggle();
  })

  document.addEventListener("DOMContentLoaded",() => {
    let button = new ExplosiveButton("button");
  });
  
 

});