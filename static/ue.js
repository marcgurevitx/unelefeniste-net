var videos = [
    "https://www.youtube.com/embed/76aZCy9ILV4",
    "https://www.youtube.com/embed/fcCHw4eDmJ8",
]

$(function() {
    var idx = Math.floor(Math.random() * videos.length)
    var vid = videos[idx]
    $("#videocon iframe").attr("src", vid)
    $("#videocon").removeClass("hideme")
    
    $('[data-toggle="tooltip"]').tooltip();
})
