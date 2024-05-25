// =====================Typing animation =======================
// var typed = new Typed(".typing", {
//     strings:["Designer Web", "Graphic Designer", "Youtuber","Developpeur Web", "Maintenacier","Développeur Reseau", "Informaticien ."],
//     TypeSpeed:100,
//     BackSpeed:60,
//     loop: false,
// })

// ======================= Aside ===================================
const nav = document.querySelector('.aside .nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;
const hireMe = document.querySelector(".hire")



hireMe.addEventListener('click', function() {
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
      for (let j=0; j<totalNavList; j++) {
          if (navList[j].querySelector('a').classList.contains("active")) {
                allSection[j].classList.add("back-section")
          }
          navList[j].querySelector("a").classList.remove('active');
      }
      this.classList.add("active")
      showSection(this);
})


      for(let i=0; i<totalNavList; i++) {
          const a = navList[i].querySelector('a');
          a.addEventListener("click", function() {
            for(let i=0; i<totalSection; i++) {
                allSection[i].classList.remove("back-section");
            }
              for (let j=0; j<totalNavList; j++) {
                  if (navList[j].querySelector('a').classList.contains("active")) {
                        allSection[j].classList.add("back-section")
                  }
                  navList[j].querySelector("a").classList.remove('active');
              }
              this.classList.add("active")
              showSection(this);

              if (window.innerWidth < 1200) {
                  asideSectionToggleBtn();
              }
          })
      }
      function showSection(element) {
          for(let i=0; i<totalSection; i++) {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split('#')[1];
          document.querySelector("#" + target).classList.add('active');
      }

// ======================Nav Toggle===============

const navToggleBtn = document.querySelector(".nav-toggle"),
      aside = document.querySelector('.aside'),
      homeInfo = document.querySelector('.home-info');
const toggleIcon = document.querySelector('.show');
      
navToggleBtn.addEventListener('click', () => {
    asideSectionToggleBtn();
    // if (ToggleIcon.classList[1] == "fa fa-bars") {
    //     ToggleIcon.classList.remove("fa-bars");
    //     ToggleIcon.classList.add("fa-times");
    //     console.log(ToggleIcon);
    // }
    console.log(toggleIcon);
})

function asideSectionToggleBtn() {
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    homeInfo.classList.toggle('open');

    for (i=0; i<totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// ==========================================
// const select = document.querySelector(".select");
// const selectPla = select.querySelector(".placeholder");
// select.addEventListener('click', function() {
//     selectPla.classList.add("select-up");
// })

// =============================================
const showPasswordBtn = document.querySelector('.show-now'),
      showPassword = document.querySelector('input[type=password]');

showPasswordBtn.addEventListener('mousedown', function() {
    if (showPasswordBtn.classList[2] == "fa-eye-slash") {
        showPasswordBtn.classList.remove("fa-eye-slash");
        showPasswordBtn.classList.add("fa-eye");
        showPassword.type = "text";
    }
})

showPasswordBtn.addEventListener('mouseup', function() {
    if (showPasswordBtn.classList[2] == "fa-eye") {
        showPasswordBtn.classList.remove("fa-eye");
        showPasswordBtn.classList.add("fa-eye-slash");
        showPassword.type = "password";
    }
})