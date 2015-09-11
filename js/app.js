$(".button-collapse").sideNav();
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
      $('.slider').slider({full_width: true});
  });




window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            header = document.querySelector("header"),
            nav = document.querySelector("nav"),
            logo = document.querySelector(".head_logo");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
            classie.add(nav, "smaller");
            classie.add(logo,"small");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
                setTimeout(function(){
                    classie.remove(nav,"smaller");
               classie.remove(logo, "small");
                }, 1);
            }
        }
    });
