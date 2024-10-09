const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//Adding event listner to the Project previwe 
function project_preview() {

    console.log("Let's start");
    let fixed = document.querySelector(`#fixed-image`);

    document.querySelector(".project").addEventListener("mouseenter", () => {
        fixed.style.display = "block";
    })

    document.querySelector(".project").addEventListener("mouseleave", () => {
        fixed.style.display = "none";
    })

    var project = document.querySelectorAll(".project-name");
    console.log(project)
    project.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            var img = e.getAttribute("data-video");
            fixed.style.backgroundImage = `url(${img})`;
        })
    })
}

//Adding event listner to the block of Desinged Experince tab
function heading() {
    function select(name) {
        name.style.borderLeft = `2px solid #FE340A`;
        name.style.color = `rgb(211 205 197)`;
    }
    function not_select(name) {
        name.style.borderLeft = `2px solid #504a45`;
        name.style.color = `#504a45`;
    }

    select(document.querySelector(".heading"));


    document.querySelector(".d").addEventListener('click', () => {
        select(document.querySelector(".d"));
        not_select(document.querySelector(".e"));
        not_select(document.querySelector(".p"));

        document.querySelector('.heading-content').innerHTML = `Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings`;

        document.querySelector(".dpe-right").innerHTML = ` <img src="https://i.pinimg.com/564x/73/52/4b/73524b16fad4a2ba65c96af556964d72.jpg" alt="image is here">`;
    })

    document.querySelector(".p").addEventListener('click', () => {
        select(document.querySelector(".p"));
        not_select(document.querySelector(".e"));
        not_select(document.querySelector(".d"));

        document.querySelector('.heading-content').innerHTML = `Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`;

        document.querySelector(".dpe-right").innerHTML = ` <img src="https://i.pinimg.com/564x/33/e1/cc/33e1cc97ea4cf9f119e5873def4658a7.jpg" alt="image is here">`;
    })
    document.querySelector(".e").addEventListener('click', () => {
        select(document.querySelector(".e"));
        not_select(document.querySelector(".d"));
        not_select(document.querySelector(".p"));

        document.querySelector('.heading-content').innerHTML = `We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`;

        document.querySelector(".dpe-right").innerHTML = ` <img src="https://i.pinimg.com/564x/85/b2/15/85b215f20d8c7e02640a13dfceb65549.jpg" alt="image is here">`;
    })
}

project_preview();
heading();

//Adding swiper Js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


//Add event listner to the hamburger 
var mobile = 0 ;
document.querySelector(".hamburger").addEventListener('click',()=>{
    if( mobile == 0){
        document.querySelector(".full-menu").style.top = "0%"
        document.querySelector(".full-menu").innerHTML = `        
        <div class="mobile-menu">
            <div><a href="">Work</a></div>
            <div><a href="">Studio</a></div>
            <div><a href="">Contact</a></div>
        </div> `
        document.querySelector('.hamburger').innerHTML = `<img src="close.svg" alt="menu">`

    }
    else[
        document.querySelector('.hamburger').innerHTML = `<img src="hamburger.svg" alt="menu">`
    ]
})


//Adding loader page animation 
function loaderAnimation() {
    var loader = document.querySelector(".loader");
    setTimeout(function () {
        loader.style.top = "-100%";
        loader.style.display = "none";
    }, 4200)
}

loaderAnimation() ;