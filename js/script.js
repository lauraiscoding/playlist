let Song =["Hiding"];

let Artists = ["Florence"];

let Duration = ["2:33"];

let imageAlbum = ["https://images-na.ssl-images-amazon.com/images/I/71tp8YpD02L._SL1428_.jpg"];

let Links = ["https://youtu.be/d7OoIquEdsM"];

    $("#add").click(function(){
    
        Song.push($("#song").val());
    Song.forEach(function(Name){

  $("#songs").append(  Name );
    });

    
       Artists.push($("#artist").val());
    Artists.forEach(function(Singer){

  $("#artists").append( Singer );
    });

    Duration.push($("#lengths").val());
    Duration.forEach(function(length){

  $("#lengths").append( length );
    });

    
    imageAlbum.push($("#images").val());
    imageAlbum.forEach(function(image){

  $("#images").append("<img src" + image + ">" );
    });

    
    Links.push($("#links").val());
    Links.forEach(function(link){

  $("#links").append("<a href=" + link + ">" + "Link" + "</a>" );
    });
  

    
    
    
    });
