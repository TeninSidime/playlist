/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Secret","Breakdown","No strings","Swerin"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ["https://i.ytimg.com/vi/zg4e3GZeJSw/maxresdefault.jpg","https://i.ytimg.com/vi/aoUgBCjXBs8/maxresdefault.jpg","https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ff1239274c9118233ed6de5c68b806942.960x960x1.jpg","https://i.ytimg.com/vi/c_y6CTVqXkY/maxresdefault.jpg"];
var artists = ["Ann Marie ft YK Osiris","Armon and Trey ","Armon and Trey ft. Queen","A Boogie Wit Da Hoodie "];
var song_lengths= ["3:08","3:32","3:34","3:09"];
var links  = ["https://www.youtube.com/watch?v=qYY2-hisuXQ","https://www.youtube.com/watch?v=pQIOpuMyZ4I","No strings","Swerin"];



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    
    songs.forEach(function(title){
        $("#songs").append("<h1>" + title  + "</h1>");
    });
     artists.forEach(function(artist){ 
      $("#artists").append("<h1>" + artist + "</h1>");
    });
     lengths.forEach(function(lenght){
      $("#lengths").append("<h1>" + lenght + "</h1>");
    });
    images.forEach(function(image){
      $("#images").append( "img src =" + images_links + ">");
    });
    links.forEach(function(link){
      $("#link").append("<a href= "links">"  link "</a>");
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
$(#add).click(function(){
    songs.push($("#song").val());
    images_links.push($("#image").val());
    artists.push($("#artist").val());
    song_lenghts.push($("#lenght").val());
    links.push($("#link").val());
}
}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();

