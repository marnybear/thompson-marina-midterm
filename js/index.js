
function preloader() {
    const imagesPaths = [
        "./img/head.png",
        "./img/reduce.jpg",
        "./img/car.jpg",
        "./img/recycle.jpg"

    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);


const buttons = document.querySelectorAll(".port-button p");


const resources = [
    {
        heading: "REDUCE",
        imagePath: "./img/reduce.jpg",
        imageAlt: "Exponetial decline graph",
        body: "Minimalism is the way of the future!  Before purchasing ask yourself 'do I really need this?' If the answer is yes, think of the most economically and environmentally friendly way possible of obtaining these goods."
    },
    {
        heading: "REUSE",
        imagePath: "./img/car.jpg",
        imageAlt: "Clouds",
        body: "In our consumer society, we over spend and trash so much stuff over the years.  Where possible, try to buy used rather than brand new, like cars!"
    },
    {
        heading: "RECYCLE",
        imagePath: "./img/recycle.jpg",
        imageAlt: "Bundles of paper",
        body: "Recycle your plastic, glass, and paper goods!  All of these can be transfered into new sources of energy and goods.  You can recycle your goods too!  Donate your clothes to a second hand store."
    }
];



const currentContent = document.querySelector(".current-content");



currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                <h2>${resources[0].heading}</h2>
                                <p>
                                    ${resources[0].body}
                                </p>
                            </div>
                            <div class="col-md-4 row justify-content-center">
                                <img class="align-self-end jumbo-img" alt="${resources[0].imageAlt}" src="${resources[0].imagePath}">
                            </div> `;


function contentLoader(ev){
    let eventTarget = ev.target.textContent;
    console.log(eventTarget);



    for (let btn of buttons) {
        if(btn.id) {
            btn.removeAttribute("id");
           }
    }
    
    
    ev.target.setAttribute("id", "button-active");


        if (eventTarget === "REDUCE") {
        currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                        <h2>${resources[0].heading}</h2>
                                        <p>
                                            ${resources[0].body}
                                        </p>
                                    </div>
                                    <div class="col-md-4 row justify-content-center">
                                        <img class="align-self-end jumbo-img" alt="${resources[0].imageAlt}" src="${resources[0].imagePath}">
                                    </div> `;

    } else if (eventTarget === "REUSE") {
        currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                        <h2>${resources[1].heading}</h2>
                                        <p>
                                            ${resources[1].body}
                                        </p>
                                    </div>
                                    <div class="col-md-4 row justify-content-center">
                                        <img class="align-self-end jumbo-img" alt="${resources[1].imageAlt}" src="${resources[1].imagePath}">
                                    </div> `;
            
    } else {
        currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                        <h2>${resources[2].heading}</h2>
                                        <p>
                                            ${resources[2].body}
                                        </p>
                                    </div>
                                    <div class="col-md-4 row justify-content-center">
                                        <img class="align-self-end jumbo-img" alt="${resources[2].imageAlt}" src="${resources[2].imagePath}">
                                    </div> `;
    }
    
}

buttons[0].addEventListener("click", contentLoader);
buttons[1].addEventListener("click", contentLoader);
buttons[2].addEventListener("click", contentLoader);
