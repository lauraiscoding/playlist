let song1 = {
    name: "Hiding",
    artist: "Florence + The Machine",
    duration: "2:33",
    link: "https://youtu.be/d7OoIquEdsM"
};
let song2 = {
    name: "Choir",
    artist: "Florence + The Machine",
    duration: "2:33",
    link: "https://www.youtube.com/watch?v=AexrAvyJjJY"
};






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
    $(".column").append(music.name + music.artist + music.duration + music.link + music.rating);
})



let Song = [];
let Artists = [];

let Duration = [];

let imageAlbum = [];

let Links = [];

$("#add").click(function () {

    Song.push($("#song").val());
    Song.forEach(function (Name) {

        $("#songs").append(Name);
    });


    Artists.push($("#artist").val());
    Artists.forEach(function (Singer) {

        $("#artists").append(Singer);
    });

    Duration.push($("#lengths").val());
    Duration.forEach(function (length) {

        $("#lengths").append(length);
    });


    imageAlbum.push($("#images").val());
    imageAlbum.forEach(function (image) {

        $("#images").append("<img src =" + image + ">");
    });


    Links.push($("#links").val());
    Links.forEach(function (link) {

        $("#links").append("<a href=" + link + ">" + "Link" + "</a>");
    });





});
