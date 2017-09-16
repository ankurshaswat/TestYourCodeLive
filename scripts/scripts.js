var windowheight = $(window).height();
var t2 = $("#topbar").height();
var h=windowheight-t2;
$(".codecontainer").height(h+"px");
$(".toggle").click(function(){
    $(this).toggleClass("selected");
    var id = $(this).attr("id")+"c";
    $("#"+id).toggle();
    var showingdiv=$(".codecontainer").filter(function(){
      return($(this).css("display")!="none");
    }).length;
    var len=100/showingdiv;
    $(".codecontainer").width(len+"%");

});
$("#runbutton").click(function(){
    $("iframe").contents().find("html").html('<style>'+$("#csscode").val()+'</style>'+$("#htmlcode").val());
    
});
