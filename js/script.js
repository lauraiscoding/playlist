$("#add").click(function(){
    let songNames =[""];
        songNames.push($("#song").val());
    songNames.foreach(function(Name){

  $("#songs").append("<li>" + Name + "</li>");
    });

    let Artists = [];
       Artists.push($("#artist").val());
    Artists.foreach(function(Singer){

  $("#artists").append("<li>" + Singer + "</li>");
    });

    let Duration = [];

    Duration.foreach(function(length){

  $("#lengths").append("<li>" + length + "</li>");
    });

    let imageAlbum = [];

    imageAlbum.foreach(function(image){

  $("#images").append("<li>" + image + "</li>");
    });

    let Links = [];

    Links.foreach(function(link){

  $("#links").append("<li>" + link + "</li>");
    });

});
