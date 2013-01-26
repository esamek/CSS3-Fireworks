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
* Remove jquery.transit.js dependency
* Add methods for stopping, starting, etc
* Maybe remove reuse of fireworks


License
-------------
The MIT License (MIT) or TOTALLY FREE
Copyright (c) 2012 Evan Samek

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

