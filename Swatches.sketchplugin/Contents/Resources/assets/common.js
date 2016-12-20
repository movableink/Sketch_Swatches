
// for (var i = 0; i < swatches.length; i++) {
//     loadScript(swatches[i].script);
// }

$(document).ready(function() {
    // Load Menu
    var menu = $('<ul class="menulist"></ul>');
    for (var i = 0; i < swatches.length; i++) {
        var title = swatches[i].title;
        var handler = swatches[i].handler;
        var liCode = '<li><button onclick="' + handler + '(\'' + title + '\');window.location.hash=\'' + handler + '\'">' + title + '</button></li>';
        menu.append(liCode);
    }
    $("#menu").append(menu);

    // Menu
    $("#menuToggle").click(function() {
        $("#menu").css("display", "block");
        $("#menu").animate({
            "height" : $("body").height()
        }, 200);
    });
    $("#menuToggle-close").click(function(){
        $("#menu").animate({
            "height" : "0"
        }, 200);
    });
    $(".menulist button").click(function() {
        $("#menu").animate({
            "height" : "0"
        }, 200);
    });
});

function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function removeSwatches() {
    $("#swatches").empty();
}

function initSwatches(title) {
    $("#title").text(title);
    // init
    $("#swatches button").eq(0).addClass("focus");
    updateInterface($("#swatches button").eq(0).text(), $("#swatches button").eq(0).attr("title"));
    $("#swatches button").each(function(){
        $(this).click(function(){
            $("#swatches button.focus").each(function(){
                $(this).removeClass("focus");
            });
            $(this).addClass("focus");
            updateInterface($(this).text(), $(this).attr("title"));
        });
    });
    function updateInterface(hex, name) {
        $("#colorPreview").css("backgroundColor", "#" + hex);
        $("#colorName").text(name);
        $("#colorHex").text("#" + hex);
        $("#icon_fill").attr("onclick", 'window.location.hash="' + hex +'-fill"');
        $("#icon_stroke").attr("onclick", 'window.location.hash="' + hex +'-stroke"');
        $("#icon_add").attr("onclick", 'window.location.hash="' + hex +'-add"');
        $("#icon_copy").attr("onclick", 'window.location.hash="' + hex +'-copy"');
    }
}
