$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// code to add class for changing the language

// $('button').on('click', function(){

//     var lang = $(this).data('lang');

//     $('html').prop('lang', lang);

//   });

// up  btn
document.addEventListener("DOMContentLoaded", function () {
  const scrollUpBtn = document.getElementById("scrollUpBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  });

  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Email
function sendMessage(event) {
  event.preventDefault();

  emailjs
    .sendForm(
      "service_vq308py",
      "template_28wf14e",
      document.getElementById("contact-form")
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
        document.getElementById("contact-form").reset(); // Reset the form after submission
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send your message. Please try again later.");
      }
    );
}

document.addEventListener("contextmenu", function(event) {
    // Prevent the default right-click behavior
    event.preventDefault();
});



/*===== MIXITUP FILTER PORTFOLIO =====*/ 
var containerEl = document.querySelector('.portfolio__container');
if (containerEl){
const mixer = mixitup('.portfolio__container', {
  selectors: {
      target: '.portfolio__content'
  },
  animation: {
      duration: 400
  }
});
}
/* Link active portfolio */ 
var numberButtons = document.querySelectorAll(".portfolio__item")
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", changeButton.bind(null, i));
}

function changeButton(selected, e) {
  var oldActive = document.getElementsByClassName("active--portfolio");
  for (var i = 0; i < oldActive.length; i++) {
    oldActive[i].classList.remove("active--portfolio");
  }
  e.target.classList.add("active--portfolio");
}


  
  
  
  /*===== MIXITUP FILTER PORTFOLIO =====*/ 
  var containerEl = document.querySelector('.portfolio__container');
  if (containerEl){
  const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
  });
  }
  /* Link active portfolio */ 
  var numberButtons = document.querySelectorAll(".portfolio__item")
  for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", changeButton.bind(null, i));
  }
  
  function changeButton(selected, e) {
    var oldActive = document.getElementsByClassName("active--portfolio");
    for (var i = 0; i < oldActive.length; i++) {
      oldActive[i].classList.remove("active--portfolio");
    }
    e.target.classList.add("active--portfolio");
  }