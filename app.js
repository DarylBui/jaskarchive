d3.csv("data.csv").then(function (data) {
    var albums = data;
    for (var i = 0; i < albums.length; i++) {
        d3.select("tbody").insert("tr").html(
            "<td>" + [i+1] + "</td>" +
            "<td>" + (albums[i]['Score'])+"</td>" + 
            "<td>" + (albums[i]['Album'])+"</a>"+"</td>" +
            "<td>" + (albums[i]['Artist'])+"</a>"+"</td>" + 
            "<td>" + (albums[i]['Release Date'])+"</td>" +
            "<td>" + (albums[i]['Notes (release)'])+"</td>" +
            "<td>" + (albums[i]['Notes (revisit)'])+"</td>" +
            "<td>" + (albums[i]['Year'])+"</td>" +
            "<td>" + (albums[i]['Tiebreaker'])+"</td" 
        ) 
    }
});