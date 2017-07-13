/* global $ _ opspark */
$(function(){
    $.getJSON('data/product.json', function (data){
        
        $('<h1>').attr('id', 'header').text('Product Project').appendTo('nav');
        $('<section>').attr('id', 'section-wishlist').appendTo('main');
            var input = document.createElement('input');
        $('<input>').attr('id', 'input-search').appendTo('h1');
        $('<button>').attr('id', 'btn-search').text('Search').appendTo('h1');
        $('h1').append($('<select>').attr('id', 'dropdown'));
            $('select').append($('<option>').text('all'));
            $('select').append($('<option>').text('phone'));
            $('select').append($('<option>').text('case'));
            
            
        // var $searchBar = $('<div>').addClass('search').attr('id', 'input-search').appendTo('h1');
        // $('<input>').attr('id', 'input-search').appendTo($searchBar);
        // $('<button>').attr('id', 'btn-search').text('Search').appendTo($searchBar);
       var productList = function(data){
        var products = data.map(function(product, i){
            var $listItem = $('<li>').addClass(product.type).attr('id', product.id).css('list-style-type', 'none');
            var $listItem2 = $('<li>').addClass('list row').attr('id', i).css('list-style-type', 'none');
            var $img = $('<img>').addClass('dynamic col-md-6').css({'height': '100px', 'width': '125px', 'border-radius': '10px 35px'});
            var $img2 = $('<img>').addClass('dynamic col-md-2').css({'height': '50px', 'width': '75px', 'border-radius': '10px 25px'});
            var $productPhotos = $img.attr('src', product.image).attr('id', 'product-photo');
            var $productPhotos2 = $img2.attr('src', product.image).attr('id', 'product-photo2');
            var $id = $('<div>').attr('id', i).addClass('id');
            var $type = $('<div>').text(product.type, i).addClass('type').attr('id', product.type);
            var $title = $('<div>').text(product.desc, i).addClass('title col-md-8');
            var $title2 = $('<div>').text(product.desc, i).addClass('title2 col-md-4');
            var $price = $('<div>').text('$' + product.price, i).addClass('price');
            var $price2 = $('<div>').text('$' + product.price, i).addClass('price2 col-md-1');
            var $color = $('<div>').text(product.color, i).addClass('color col-md-2');
            var $availableColors = $('<ul>').text(product.availableColors, i).addClass('availableColors col-md-4');
            var $specs = $('<header>').text(product.specs, i).addClass('specs col-md-6');
            var $stock = $('<div>').text('Left in stock ' + product.stock, i).addClass('stock');
            // var wishList = function(array){
            //     var inputText = $('#input-search')[0].value.toString().toLowerCase();
            //     var searched = search(array, inputText).map(function(data, i, a){
            //         var searchedResult = $('<div>').append($img3, $productPhotos3, $title3, $price3);
            //         return searchedResult;
            //     });
            //     return searched;
            // }
            // var $modal = $('<div>').addClass('modal').attr('id','modal-box' + i).css('display', 'none').append($('<button>')
            //         .addClass('close').attr('id', 'modal-close').text('close'));
            //     $modal.append($listItem2);
                $listItem.append($img, $productPhotos, $title, $price, $stock, $type);
                $listItem2.append($id, $img2, $productPhotos2, $title2, $availableColors, $price2, $specs);
                $('#section-wishlist').append($listItem);
                //  $('li').click(function(event){
                //      console.log(event.currentTarget.id);
                //         var modal = $('<div>').addClass('modal').attr('id', 'popup').appendTo('#section-wishlist');
                //                 var modalClose = $('<button>').addClass('close').attr('id', 'exit').text('Close')
                //                     .appendTo('.modal');
                //                     modal.append($listItem2);
                //         $('.modal' + event.currentTarget.id);    
                // $('.close').click(function(event){
                // $('.modal').remove();
                //  });
                //  });
                    });
       }
    $('#section-wishlist').append(productList(data));
    $('li').click(function(event){
        var modal = $('<div>').addClass('modal').attr('id', 'popup').appendTo('#section-wishlist');
            // $('.modal' + productList(event.currentTarget.id));
        var modalSection = $('<div>').addClass('modal-div').appendTo('.modal');
        var specificModal = data.filter(function(product, i){
                    return product.id === event.currentTarget.id;
                });
                console.log(specificModal);
        var modalProduct = function(data){
            var products = data.map(function(product, i){
            var $listItem2 = $('<li>').addClass('list row').attr('id', i).css('list-style-type', 'none');
            var $img2 = $('<img>').addClass('dynamic col-md-2').css({'height': '50px', 'width': '75px', 'border-radius': '10px 25px'});
            var $productPhotos2 = $img2.attr('src', product.image).attr('id', 'product-photo2');
            var $id = $('<div>').attr('id', i).addClass('id');
            var $type = $('<div>').text(product.type, i).addClass('type').attr('id', product.type);
            var $title2 = $('<div>').text(product.desc, i).addClass('title2 col-md-4');
            var $price2 = $('<div>').text('$' + product.price, i).addClass('price2 col-md-1');
            var $color = $('<div>').text(product.color, i).addClass('color col-md-2');
            var $availableColors = $('<ul>').text(product.availableColors, i).addClass('availableColors col-md-4');
            var $specs = $('<header>').text(product.specs, i).addClass('specs col-md-6');
            var $stock = $('<div>').text('Left in stock ' + product.stock, i).addClass('stock');
                $listItem2.append($img2, $productPhotos2, $title2, $availableColors, $price2, $specs);
                console.log($listItem2);
            $('.modal-div').append($listItem2);
        });
        
        }
        // console.log(modalProduct(data));
        modalProduct(data);
        var modalClose = $('<button>').addClass('close').attr('id', 'exit').text('Close')
                .prependTo('.modal');
                // modal.append(listItem2);
                $('.close').click(function(event){
                $('.modal').remove();
            });
            return $('#popup' + event.currentTarget.id);
    });
    // $('li').click(function(event){
    //     console.log(event.currentTarget.data);
    //     var productModal = data.map(function(product, i){
    //         var listItem2 = $('<li>').addClass('list row').attr('id', i).css('list-style-type', 'none');
    //         var img2 = $('<img>').addClass('dynamic col-md-2').css({'height': '50px', 'width': '75px', 'border-radius': '10px 25px'});
    //         var productPhotos2 = img2.attr('src', product.image).attr('id', 'product-photo2');
    //         var id = $('<div>').attr('id', i).addClass('id');
    //         var type = $('<div>').text(product.type, i).addClass('type');
    //         var title2 = $('<div>').text(product.desc, i).addClass('title2 col-md-4');
    //         var price2 = $('<div>').text('$' + product.price, i).addClass('price2 col-md-1');
    //         var color = $('<div>').text(product.color, i).addClass('color col-md-2');
    //         var availableColors = $('<ul>').text(product.availableColors, i).addClass('availableColors col-md-4');
    //         var specs = $('<header>').text(product.specs, i).addClass('specs col-md-6');
    //         var stock = $('<div>').text('Left in stock ' + product.stock, i).addClass('stock');
    //             listItem2.append(img2, productPhotos2, title2, price2, color, availableColors, specs, id);
    //     $('#section-wishlist').append(listItem2);
        
    //     var modal = $('<div>').addClass('modal').attr('id', 'popup').appendTo('#section-wishlist');
    //     var modalClose = $('<button>').addClass('close').attr('id', 'exit').text('Close')
    //             .appendTo('.modal');
    //             modal.append(listItem2);
    //         $('.close').click(function(event){
    //             $('.modal').remove();
    //         });
    //     });
    //     $('.modal' + event.currentTarget.id).css({'display': 'block', 'height': '1000px', 'width': '1000px', 'color': '#000000'});
    // });
        // $('.close').click(function(event){
        //     console.log('hello');
        //     $('.modal').remove();
        // });
       

    // function reducedList(collection){
   
   
    //search feature
        $('#btn-search').click(function(event){
            $('li').remove();
            var inputText = $('#input-search')[0].value.toString().toLowerCase();
              return productList(search(data, inputText));
        });
        
        var search = function(collection, term){
        var output = [];
        term = term.toLowerCase();
        _.each(collection, (function(value){
            if(isCollection(value)){
               if (search(value, term).length){
                    output.push(value);
               }
            } else {
                if (typeof value === 'string'){
                    if (value.toLowerCase().indexOf(term) > -1) {
                        output.push(value);
                    }
                }
            }
            }));
            return output;
    }
    
    function isCollection(value){
        if (value === null || value instanceof Date) return false;
        if (typeof value === 'object') return true;
        return false;
    };
        
        // var searchSamsung = function(product){
        //     var filteredSamsung = [];
        //     _.map(function(value){
        //         filteredSamsung.push(product[value]);
        //     });
        //     return filteredSamsung;
        // };
        // var searchApple = function(product){
        //     var filteredApple = [];
        //     _.map(function(value){
        //         filteredApple.push(product[value]);
        //     });
        //     return filteredApple;
        // };
        // $('#input-search').append(searchSamsung, searchApple);
        
        //dropdown filter
    var productCopy = data.slice();
    $('#dropdown').on('change', function(event){
    
    $('li').hide();
    
      if(event.currentTarget.value === 'all'){
        $('#dropdown').attr('value', 'all');
        $('li').show();
      } else {
        $('#dropdown').attr('value', event.currentTarget.value);
        console.log($('.' + event.currentTarget.value));
        $('.' + event.currentTarget.value).show();
      }
    
  });
    
        // $('<button>').addClass('close').text('X').appendTo('#modal-box');
        //     $('.close').css({'background': '#F5F5F5', 'color': '#696969', 'padding': '10px', 'border-radius': '10px 35px'});
        // $('button').click(function(event){
        //     $('.modal').css('display', 'none');
        // });
        // $('li').click(function(event){
        //     $('.modal').css({'height': '600px', 'width': '600px', 'background': '#F5F5F5', 'border-radius': '10px 35px', 'left': '30%', 'top': '30%'});
        //     });
            
        // $('<div>').addClass('modal-content').attr('id', 'modal-content').appendTo('.modal');
            
    
  

    $('<div>').addClass('container-fluid').attr('id', 'grid').appendTo('main');
        $('<div>').addClass('row').appendTo('li');
            $('<div>').addClass('col-xs-12 col-md-8');
    
    $('li').css({'list-style-type': 'none', 'border-radius': '15px 50px', 'margin-bottom': '10px', 'background-color': '#F5F5F5', 'padding': '5px'});
    
    
    });
    $('select').css({'background': 'black', 'border-radius': '15px 50px'});

    
    
});