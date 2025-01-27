// import { sort } from './functions.js';

d3.csv("data.csv").then(function (data) {
    var albums = data;
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i]['Album'];
        var cleaned_album = album.replace(/[\/\\#,+()~%.:*?<>{}]/g, '');
        d3.select("#alllist").insert("li").attr("class", "album-info").html(
            "<div class=\"cover\">" + "<img src=\"" + "covers/" + cleaned_album + " " + albums[i]['Artist'] + "/Image_1.jpg\"" +">"+"</a>"+"</div>" +
            "<div class=\"album\">" + (albums[i]['Album'])+"</a>"+"</div>" +
            "<div class=\"artist\">" + (albums[i]['Artist'])+"</a>"+"</div>" +
            "<div class=\"score\">" + (albums[i]['Score'])+"</a>"+"</div>"
        )
        if (albums[i]['Year'] == "2024") {
            d3.select("#alist").append("li").attr("class", "album-info").html(
                "<div class=\"cover\">" + "<img src=\"" + "covers/" + cleaned_album + " " + albums[i]['Artist'] + "/Image_1.jpg\"" +">"+"</a>"+"</div>" +
                "<div class=\"album\">" + (albums[i]['Album'])+"</a>"+"</div>" +
                "<div class=\"artist\">" + (albums[i]['Artist'])+"</a>"+"</div>" +
                "<div class=\"score\">" + (albums[i]['Score'])+"</a>"+"</div>"
            )
        }
        if (albums[i]['Year'] == "2023") {
            d3.select("#blist").insert("li").attr("class", "album-info").html(
                "<div class=\"cover\">" + "<img src=\"" + "covers/" + cleaned_album + " " + albums[i]['Artist'] + "/Image_1.jpg\"" +">"+"</a>"+"</div>" +
                "<div class=\"album\">" + (albums[i]['Album'])+"</a>"+"</div>" +
                "<div class=\"artist\">" + (albums[i]['Artist'])+"</a>"+"</div>" +
                "<div class=\"score\">" + (albums[i]['Score'])+"</a>"+"</div>"
            )
        }
    }
    sort("alist");
    sort("blist");
    sort("alllist");
});