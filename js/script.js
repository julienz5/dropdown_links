$( document ).ready(function() {

    $("#links_list li").each(function() {
        // Get source from web according to value
        $content =  $(this).text();
        $content = $content.replace('.fr','.com');
        $(this).children('img').attr('src',"https://" + $content + "/favicon.ico");
    });

    $("img").bind("error",function(){
        // Hide image source if not found
        $(this).attr("src","images/noimage.png");
        $(this).hide();
    });

});