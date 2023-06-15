// Scroll ID
var anchorTags = document.querySelectorAll('a[href^="#"]');


for (var i = 0; i < anchorTags.length; i++) {
  anchorTags[i].addEventListener('click', function (event) {
    event.preventDefault(); 
    var targetId = this.getAttribute('href');

    var targetPosition = document.querySelector(targetId).offsetTop;

    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    } else {
        scrollToSmoothly(targetPosition, 500); 
      }
  });
}

function scrollToSmoothly(to, duration) {
    if (duration <= 0) return;
    var difference = to - window.pageYOffset;
    var perTick = (difference / duration) * 10;

    setTimeout(function () {
        window.scroll(0, window.pageYOffset + perTick);
        if (window.pageYOffset === to) return;
        scrollToSmoothly(to, duration - 10);
    }, 10);
}

function scrollToSmoothly(to, duration) {
  if (duration <= 0) return;
  var difference = to - window.pageYOffset;
  var perTick = (difference / duration) * 10;

  setTimeout(() => {
    window.scroll(0, window.pageXOffset + perTick);
    if (window.pageYOffset === to) return;
    scrollToSmoothly(to, duration - 10);
  }, 10);
}

// POPUP
function closePopup(popupId) {
  document.getElementById(popupId).setAttribute('data-popup-state', 'hidden');
}

function getCookie(name) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  document.cookie = name + '=' + value + '; expires=' + expirationDate.toUTCString() + '; path=/;';
}

// function initPopup() {
//   var popup1Cookie = getCookie('popup1');
//   if (popup1Cookie === 'hidden') {
//     document.getElementById('popup1').setAttribute('data-popup-state', 'hidden');
//   }

//   document.getElementById('hide1dayBtn1').addEventListener('click', function() {
//     setCookie('popup1', 'hidden', 1);

//     closePopup('popup1');
//   });

//   document.getElementById('closeBtn1').addEventListener('click', function() {
//     closePopup('popup1');
//   });

//   var popup2Cookie = getCookie('popup2');
//   if (popup2Cookie === 'hidden') {
//     document.getElementById('popup2').setAttribute('data-popup-state', 'hidden');
//   }


//   document.getElementById('hide1dayBtn2').addEventListener('click', function() {
//     setCookie('popup2', 'hidden', 1);

//     closePopup('popup2');
//   });

//   document.getElementById('closeBtn2').addEventListener('click', function() {
//     closePopup('popup2');
//   });
// }

// window.addEventListener('load', function() {
//   initPopup();
// });


// SCROLL TOP BTN
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.2) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


function checkMobile() {
  var vUA = navigator.userAgent.toLowerCase();
  
  if ( vUA.indexOf("android") > -1 ) {
    return "android";
  } else if ( vUA.indexOf("iphone") > -1 || vUA.indexOf("ipad") > -1 || vUA.indexOf("ipod") > -1 ) {
    return "ios";
  } else {
    return "other";
  }
}


// MESSAGE BTN
const messageBtn = document.querySelector('.messageBtn');

messageBtn.addEventListener('click', () => {
  checkM(checkMobile());
});

function checkM(m) {
  location.href = 'sms:' + '01055487737' + (m == 'ios' ? '&' : '?') + 'body=' + encodeURIComponent("아산 아르니퍼스트 분양 정보 문의합니다.")
}


// MODAL
var openModalBtn = document.getElementById('openModalBtn');
var openModalBtn2 = document.getElementById('openModalBtn2');

var modal = document.getElementById('modal');
var closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', function() {
  showModal();
});

openModalBtn2.addEventListener('click', () => {
  showModal();
})

closeModalBtn.addEventListener('click', () => {
  closeModal();
})


function showModal() {
  modal.style.display = 'block';
};

function closeModal() {
  modal.style.display = 'none';
};

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


// MODAL ON CLICK OF ADD POPUP
// var openPModal1 = document.getElementById('openModalBtn1');
// var openPModal2 = document.getElementById('openModalBtn2');
