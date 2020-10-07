$(document).ready(function(){

    var key = 'AIzaSyDQXP5brbh7L8XTkr24aZBqD-IV5njV0jA';
    var playlistID = 'PLE3poZDTxyBGqh7T2hLL3WkQZqTQYYLl5';
    var url = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part:'snippet',
        key: key,
        maxresults: 20,
        playlistID: playlistID
    }

    loadviv();

    function loadviv(){
        $getJSON(url, options, function(data){
            console.log(data);
            var id = data
            mainvid();
        })
    }

    function mainvid(){
        $('#video').html(

        );
    }
});