(function($){

  function Fireworks(el,options){

    options = options || {};
    this.container = el;
    this.options = $.extend({
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
    },options);

    this.startShow(el);

    return el;
  }

  Fireworks.prototype = {

    cloneTemplate: function(){
      this.firework_list = [];
      var that = this;
      var $firework = $(this.options.fireworkTemplate);

      for(var i = 0;i<this.options.totalFireworks;i++){
        var copy = $firework.clone();
        copy.css('position','absolute').addClass('a_firework');
        this.firework_list.push(copy);
        copy.appendTo(that.container);
      }


    },

    setup: function(){
      var that = this;
      var maxW = this.options.widthMax;

      $.each(that.firework_list,function(i,k){
         var start = Math.floor(Math.random()*maxW);
         k.css('top','101%');
         k.css('left',start + 'px');
      });
    },

    getAscendHeight: function(){
      var that = this;
      return Math.floor(Math.random() * that.options.heightMax);
    },
    getAscendLeft: function(f){
      var that = this,
          x = $(f).css('left') + that.options.offsetMax,
          o = Math.floor(Math.random() * x);
      return (x > that.options.widthMax / 2) ? o * -1 : o;
    },
    getAscendTime: function(){
      var that = this;
      return Math.floor(Math.random() * that.options.timeMax + that.options.timeMin);
    },
    getExplodeTime: function(){
      return Math.random() * this.options.explodeTimeMax + this.options.explodeTimeMin;
    },
    getExplodeRadius: function(){
      return Math.random() * this.options.explodeRadiusMax + this.options.explodeRadiusMin;
    },
    getColor: function(){
       var that = this;
       var i    = Math.floor(Math.random()* that.options.colors.length);
       return this.options.colors[i];
    },
    getStartingLeft: function(){
      var that = this;
      return Math.floor(Math.random() * that.options.widthMax);
    },
    _reset: function(f){
      $(f).css({
        'transform': 'scale(1)',
        'top': '101%',
        'opacity': 1
      });

    },

    doFireworks: function(){
        var that = this;

        console.log(this);

      $.each(that.firework_list, function(i,f){
          f.css('color',that.getColor());
          f.transition({
            'left': that.getAscendLeft(),
            'top' : that.getAscendHeight()
          },that.getAscendTime(),'out',function(){
              $(this).transition({
                'scale': that.getExplodeRadius(),
                'opacity': 0
              },that.getExplodeTime(),'out',function(){
                  that._reset(f);
              });
          });
      });

    },
    startShow: function(){
      var that = this;
      this.cloneTemplate();
      $(that.container).css('position','relative').css('overflow-y','hidden');
      this.setup();

      var totalTime = this.options.timeMax + this.options.explodeTimeMax;

      setInterval(function() {
        that.doFireworks();
      } ,totalTime);
    }




  };



  $.fn.fireworks = function(options){
    return new Fireworks(this,options);
  };

})(jQuery);




