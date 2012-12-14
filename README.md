CSS3-Fireworks
==============

Add easy fireworks to your site using jquery, jquery.transit.js, and CSS3.


  $(element).fireworks(options);

Available/Default options
-----------------

    {
          'colors': ["#ea4648","#f5871e","#de1c85","#f9c031","#004b77","#00b2e9"],
          'totalFireworks' : 10,
          'offsetMax': 100,
          'fireworkTemplate': '<div>&bull;</div>',
          'timeMax' : 1200,
          'timeMin' : 400,
          'explodeRadiusMax': 20,
          'explodeRadiusMin': 10,
          'explodeTimeMax': 800,
          'explodeTimeMin': 400,
          'heightMax': $(el).outerHeight(),
          'widthMax' : $(el).outerWidth()
        }


TODO
------------

* Fix container dimension detect
* remove jquery.transit.js dependency