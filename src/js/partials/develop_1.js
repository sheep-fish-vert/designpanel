
/* text block popup */

    function textBlockPopup(){

        $('.text-block p b a').fancybox({
            fitToView:true,
            autoSize:true,
            padding:0
        });

    }

/* /text block popup */

/* contacts map init */

    function contactsMapInit(mapWrap){

        if($('#'+mapWrap).length!=0){

            function initialize() {
                var myLatlng = new google.maps.LatLng(cordX,cordY);

                var myOptions = {
                    zoom: 15,
                    center: myLatlng,
                    draggable: true,
                    zoomControl: true,
                    disableDefaultUI: true, //без управляющих елементов
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControlOptions: {
                       position: google.maps.ControlPosition.LEFT_BOTTOM
                    }
                }
                var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

                var contentString = '<div class="marker-test">'+googleText+'</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    optimized: false,
                    visible: true,
                    flat: true,

                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });

                /*map.set('styles', [
                    {
                      stylers: [
                        { hue: "#ff0000" },
                        { saturation: -100 }
                      ]
                    },{
                      featureType: "road",
                      elementType: "geometry",
                      stylers: [
                       { saturation: 0 },
                        { invert_lightness: false }
                      ]
                    },{
                      featureType: "road",
                      elementType: "labels",
                      stylers: [
                        { visibility: "off" }
                      ]
                    }
                ]);*/

            }
            initialize();

        }

    };

/* /contacts map init */

$(document).ready(function(){

    textBlockPopup();

    contactsMapInit('contacts-map');

});

$(window).load(function(){

});

$(window).resize(function(){

});