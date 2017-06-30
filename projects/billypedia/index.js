/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        $('#section-quotes').prependTo('#sections');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        $('.quote').css('color', 'white');
        $('#section-quotes').css('background-color', 'purple').css('border-radius', '10px');
        $('#section-bio p:last-child').remove();
        $('#section-bio').css('background-color', 'green').css('border-radius', '10px');
        $('h3').css('color', 'white').css('padding-left', '10px');
        $('.bio').css('color', 'white').css('padding-left', '10px').css('padding-right', '10px');
        $('.bio').css('padding-bottom', '10px').css('padding-top', '10px');
        let $section = $('<section>').attr('id', 'section-rider');
            $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
        $('#section').append('<section id="section-recordings">');
        
        $('#section-praise').css('background-color', 'purple');
        $('#section-praise').css('border-radius', '10px').css('color', 'white');
        $('#section-praise').css('padding-left', '10px').css('padding-right', '10px');
        $('#section-praise').css('padding-bottom', '10px').css('padding-left', '10px');
        
        $('#section-rider').css('background-color', 'green');
        $('#section-rider').css('border-radius', '10px').css('color', 'white');
        $('#section-rider').css('padding-left', '10px').css('padding-right', '10px');
        $('#section-rider').css('padding-top', '10px').css('padding-bottom', '10px');
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        $('ul').css('list-style-type', 'none');
        $('li').css('list-style-type', 'none');
        
        //Top Rated
        var topRated = data.discography.topRated;
            
        var topRateListItems = _.map(topRated, function(recording){
            var $listItem = $('<li>').addClass('top-rated').attr('src', recording.art);
            var $title = $('<div>').text(recording.title).addClass('title');
                $listItem.append($title)
            $('#list-top-rated').append($listItem);
        });
        
        $('#list-top-rated').append(topRateListItems);

        $('<section>').attr('id', 'list-recordings').append($('<h3>').text('Recordings')).appendTo($('#sidebar'));
        $('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
       
        //Recordings   
        var recordings = data.discography.recordings;
        
        _.map(recordings, function(recording){
            var $listItem = $('<li>').addClass('recording').attr('src', recording.art);
            var $title = $('<div>').text('Title: ' + recording.title).addClass('title');
            var $artist = $('<div>').text('Artist: ' + recording.artist).addClass('artist');
            var $release = $('<div>').text('Release: ' + recording.release).addClass('release');
            var $year = $('<div>').text('Year: ' + recording.year).addClass('year');
                $listItem.append($title, $artist, $release, $year)
            $('#list-recordings').append($listItem);
        });
      
        $('ul').css('list-style-type', 'none');
        $('li').css('list-style-type', 'none');
        var billyImages = data.images.billy;
        
        $('#image-billy').click(function(event){
            var billyPic = $('#image-billy').attr('src');
            var billyIndex = _.indexOf(billyImages, billyPic);
            
            if(billyIndex < billyImages.length - 1){
                billyPic = billyImages[billyIndex + 1];
            } else {
                billyPic = billyImages[0];
            }
            $('#image-billy').fadeOut(0);
            $('#image-billy').attr('src', billyPic);
            $('#image-billy').fadeIn(1);
        });
        //TODO 8
        $('li').click(function(event){
            var currentImg = $(event.currentTarget);
            var newImg = currentImg.attr('src');
            if (currentImg.attr('class') === 'recording'){
               $('#recordings-image').attr('src', newImg);
            } else {
               $('#top-rated-image').attr('src', newImg);
            }
        });
        //Todo 9
        var createTable = function(riderData){
            var createRow = function(rider){
                var $row = $('<tr>');
                var $type = $('<td>').text(rider.type);
                var $desc = $('<td>').text(rider.desc);
            $row.append($type);
            $row.append($desc);
                return $row;
            }
            var $table = $('<table>');
            var $rows = riderData.map(createRow);
            $table.append($rows);
            return $table;
            
        };
        var riderData = data.rider;
        createTable(riderData).appendTo('#section-rider');
        $('td').css('border', 'gold solid 2px');
        
        $('#section-top-rated').prepend($('<img>').attr('id', 'top-rated-image').attr('src', topRated[0].art));
        $('#top-rated-image').css('border-radius', '10px');
        $('#list-recordings').prepend($('<img>').attr('id', 'recordings-image').attr('src', recordings[0].art));
        $('#recordings-image').css('border-radius', '10px');
        
        $('.title').css({"background-color": "purple", 'font-size': '15px', 'color': 'white', "border-radius": "10px", "text-align": "center", "font-style": "italic", "font-weight": "bold"});
        $('.artist').css({"background-color": "green", 'font-size': '15px', 'color': 'white', "border-radius": "10px", "text-align": "center"});
        $('.release').css({"background-color": "purple", 'font-size': '15px', 'color': 'white', "border-radius": "10px", "text-align": "center"});
        $('.year').css({"background-color": "green", 'font-size': '15px', 'color': 'white', "border-radius": "10px", "text-align": "center"});
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


