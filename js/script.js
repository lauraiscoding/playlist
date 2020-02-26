
let songs = [{
    name: "Hiding",
    artist: "Florence + The Machine",
    duration: "2:33",
    link: "https://youtu.be/d7OoIquEdsM",
    rating: 4
}, {
    name: "Choir",
    artist: "Florence + The Machine",
    duration: "2:33",
    link: "https://www.youtube.com/watch?v=AexrAvyJjJY",
    rating: 5
},];

songs.forEach(function (music) {
    $(".column").append("<li> <div>" + music.name + "</div> <div>" + music.artist +"</div> <div>"+ music.duration + "</div> <div>"+ music.link +"</div> <div>" + music.rating + "</div> </li>");
})



$("#add").click(function () {

   songs.forEach(function (music) {
    $(".column").append("<li>" + music.name + music.artist + music.duration + music.link + music.rating + "</li>");
})


});
