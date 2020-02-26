let songList = []
let artistName = []
let songLength = []
let image = []
let link = []
$("#add").click(function(){
    songList.forEach(function(song){
        $("#songs").append(song);
    })

    artistName.push($("#artist").val());
    artistName.forEach(function(artist){
        $("#artists").append(artist);
    })

    songLength.push($("#lengths").val());
    songLength.forEach(function(slength){
        $("#lengths").append(slength);
    })

    image.push($("#images").val());
    image.forEach(function(img){
        $("#images").append(img);
    })

    link.push($("#links").val());
    link.forEach(function(link){
        $("#links").append(link);
    })
})