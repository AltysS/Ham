"use strict"

// Tabs
const listenerTabLink = document.querySelector(".ourServiceTabsTitle");
let currentActiveTabTitle = document.querySelector(".tabBoxActive");
let currentActiveTabContent = document.querySelector(`.ourServiceTabData[data-content=${currentActiveTabTitle.dataset.servicetitle}]`);

const changeTabTitle = (event, activeTab) => {
    activeTab.classList.replace("tabBoxActive", "tabBox")
    activeTab = event.target.closest("div");
    activeTab.classList.add("tabBoxActive");
    return currentActiveTabTitle = activeTab;
}
const changeTabContent = (prevActiveTab) => {
    prevActiveTab.classList.add("display-none");
    currentActiveTabContent = document.querySelector(`.ourServiceTabData[data-content=${currentActiveTabTitle.dataset.servicetitle}]`)
    currentActiveTabContent.classList.remove("display-none")
}


listenerTabLink.addEventListener("click", (e) => {
    e.preventDefault();
    changeTabTitle(e, currentActiveTabTitle);
    changeTabContent(currentActiveTabContent);
})



// Our Amazing Work filter by category
const ourProjectFilterBtnListener = document.querySelector(".ourProjectFilter");
let currentActiveFilterBtn = document.querySelector(".ourProjectFilterTextActive");
let allImgCollection = document.querySelectorAll(`.realativeContainer`);

const showAllItems = (array) => {
    array.forEach(element => {
        element.classList.remove("display-none");
    });
}

const filterImgContent = (array) => {
    let currentDataToShow = document.querySelector(".ourProjectFilterTextActive").dataset.filter
    if (currentDataToShow === "All") {
        return showAllItems(array);
    }
    array.forEach(element => {
        if (element.dataset.imgtype === currentDataToShow) {
            return element.classList.remove("display-none");
        }
        return element.classList.add("display-none");
    })
}


const changeActiveFilterText = (currentTab, nextActiveTab) => {
    currentTab.classList.remove("ourProjectFilterTextActive");
    currentTab = nextActiveTab;
    nextActiveTab.classList.add("ourProjectFilterTextActive");
    return currentActiveFilterBtn = currentTab;
}


ourProjectFilterBtnListener.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
        allImgCollection = document.querySelectorAll(`.realativeContainer`);
        changeActiveFilterText(currentActiveFilterBtn, e.target);
        filterImgContent(allImgCollection);
    }
})

// dynamically adding HTML IMG and Hover Blocks

let portfolioImgCounter = 0;

const portfolioHoverBlock = {
    WebDesign:     `<div class="ourProjectHoverInfo">
    <div class="ourProjectHoverCircleWrapper">
        <div class="ourProjectHoverCircleChain">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                </svg>
        </div>
        <div class="ourProjectHoverCircleStop">
            <div class="ourProjectHoverCircleStopSymbol"></div>
        </div>
    </div>
    <h3 class="ourProjectHoverInfoTitle">creative design</h3>
    <p class="ourProjectHoverInfoDataSet">
    WebDesign
    </p>
</div>`,
GraphicDesign: `    <div class="ourProjectHoverInfo">
<div class="ourProjectHoverCircleWrapper">
    <div class="ourProjectHoverCircleChain">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
            </svg>
    </div>
    <div class="ourProjectHoverCircleStop">
        <div class="ourProjectHoverCircleStopSymbol"></div>
    </div>
</div>
<h3 class="ourProjectHoverInfoTitle">creative design</h3>
<p class="ourProjectHoverInfoDataSet">
GraphicDesign
</p>
</div>`,
LandingPages: `    <div class="ourProjectHoverInfo">
<div class="ourProjectHoverCircleWrapper">
    <div class="ourProjectHoverCircleChain">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
            </svg>
    </div>
    <div class="ourProjectHoverCircleStop">
        <div class="ourProjectHoverCircleStopSymbol"></div>
    </div>
</div>
<h3 class="ourProjectHoverInfoTitle">creative design</h3>
<p class="ourProjectHoverInfoDataSet">
Landing Pages
</p>
</div>`,
Wordpress: `    <div class="ourProjectHoverInfo">
<div class="ourProjectHoverCircleWrapper">
    <div class="ourProjectHoverCircleChain">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
            </svg>
    </div>
    <div class="ourProjectHoverCircleStop">
        <div class="ourProjectHoverCircleStopSymbol"></div>
    </div>
</div>
<h3 class="ourProjectHoverInfoTitle">creative design</h3>
<p class="ourProjectHoverInfoDataSet">
    WordPress
</p>
</div>`,
}
const portfolioImgContainer = document.querySelector(".ourProjectImgs");


const addPortolioImg = (counter) => {for (let i = portfolioImgCounter; i < (portfolioImgCounter + 3); i++) {
    portfolioImgContainer.insertAdjacentHTML("beforeend", 
    `<div data-imgType="WebDesign" class="realativeContainer">
    <img src="./IMG/main/portfolio/webDesign/web-design${i+1}.jpg" alt="#"> 
    ${portfolioHoverBlock.WebDesign}
    </div>`);
    portfolioImgContainer.insertAdjacentHTML("beforeend", 
    `<div data-imgType="GraphicDesign" class="realativeContainer">
    <img src="./IMG/main/portfolio/GraphicDesign/graphic-design${i+1}.jpg" alt="#"> 
    ${portfolioHoverBlock.GraphicDesign}
    </div>`);
    portfolioImgContainer.insertAdjacentHTML("beforeend", 
    `<div data-imgType="LandingPages" class="realativeContainer">
    <img src="./IMG/main/portfolio/landingPage/landing-page${i+1}.jpg" alt="#"> 
    ${portfolioHoverBlock.LandingPages}
    </div>`);
    portfolioImgContainer.insertAdjacentHTML("beforeend", 
    `<div data-imgType="Wordpress" class="realativeContainer">
    <img src="./IMG/main/portfolio/wordpress/Wordpress${i+1}.jpg" alt="#"> 
    ${portfolioHoverBlock.Wordpress}
    </div>`);
}
 return portfolioImgCounter += 3;
}



// Portfolio Load More Button
const portfolioLoadMoreBtn = document.querySelector(".centerLoadBtn");
const btnAddMore = document.querySelector(".ourProjectLoadMoreBtn");
const crossSymbol = document.querySelector(".сrossDiv");
const portfolioLoader = document.querySelector(".loading");


portfolioLoadMoreBtn.addEventListener("click", (e) => {
    if (e.target.closest("button") && (portfolioImgCounter <= 9) || e.target.closest(".сrossDiv")) {
        portfolioLoader.classList.remove("loadingSwitcher");
        setTimeout(()=> {
            addPortolioImg(portfolioImgCounter);
            allImgCollection = document.querySelectorAll(".realativeContainer");
            filterImgContent(allImgCollection);
            if(portfolioImgCounter >= 9) {
                btnAddMore.classList.add("display-none");
                crossSymbol.classList.add("display-none");
            }
            portfolioLoader.classList.add("loadingSwitcher");
        }, 4000);
    }
})

// Slider tabs

const specialistsData = {
    "HASAN ALI": {
        about: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
        specialization: "UX Designer",
        photo: `./IMG/main/aboutHam/specialists/specialist1.png`
    },
    "JANNET PINK": {
        about: "ser experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function.",
        specialization: "BACKEND DEVELOPER",
        photo: "./IMG/main/aboutHam/specialists/specialist2.png"
    },
    "FIBO HUGA": {
        about: "“No product is an island. A product is more than the product. It is a cohesive, integrated set of experiences. Think through all of the stages of a product or service – from initial intentions through final reflections, from first usage to help, service, and maintenance. Make them all work together seamlessly.”",
        specialization: "FRONTEND DEVELOPER",
        photo: "./IMG/main/aboutHam/specialists/specialist4.png",
    },
    "MARRET BRANTEN": {
        about: "These tasks can vary greatly from one organization to the next, but they always demand designers to be the users’ advocate and keep the users’ needs at the center of all design and development efforts. That’s also why most UX designers work in some form of user-centered work process, and keep channeling their best-informed efforts until they address all of the relevant issues and user needs optimally.",
        specialization: "UI DESIGNER",
        photo: "./IMG/main/aboutHam/specialists/specialist3.png",
    },
};


let currentSpecialistDiv = document.querySelector(".activeSpecialistInformation");
const specialistDataText = document.querySelector(".aboutTheHamSpecialistData");
const specialistName = document.querySelector(".aboutTheHamSpecialistName");
const specialistPosition = document.querySelector(".aboutTheHamSpecialistPosition");
const bigPictureCircle = document.querySelector(".aboutTheHamCircle");
const bigSpecialistPicture = document.querySelector(".aboutTheHamCircle > img");
const sliderTabListener = document.querySelector(".aboutTheHamspecialistPhotoSlider");



const animate = (text, name, photo, position, circle, timer) => {
    setTimeout(() => {
        text.classList.add("animateTextDisplayNew");
        name.classList.add("animateTextDisplayNew");
        photo.classList.add("animateTextDisplayNew");
        position.classList.add("animateTextDisplayNew");
        circle.classList.add("animateTextDisplayNew");
    },timer);
}

const deleteAnimationClassAtClick = () => {
    bigPictureCircle.classList.remove?.("animateTextDisplayNew");
    specialistDataText.classList.remove?.("animateTextDisplayNew");
    specialistName.classList.remove?.("animateTextDisplayNew");
    specialistPosition.classList.remove?.("animateTextDisplayNew");
    bigSpecialistPicture.classList.remove?.("animateTextDisplayNew");
}

const changeActiveSpecialist = (specialistObjInfo, eventTarget) => {
    // deleting animation class once click recieved
    deleteAnimationClassAtClick();
    currentSpecialistDiv.classList.remove("activeSpecialistInformation");
    currentSpecialistDiv = eventTarget;
    currentSpecialistDiv.classList.add("activeSpecialistInformation");
    // add animation class to elements
    animate(specialistDataText, specialistName, specialistPosition, bigSpecialistPicture, bigPictureCircle, 0);
    // set timeout as the elements are coming from JS object data.
    // animation duration time apprx 1.5s (both ways), so initialazing timout of data change - 0.7 seconds
    setTimeout(() => {
            // find and change dataset attr name 
        let currentSpecialistImg = document.querySelector(".activeSpecialistInformation > img").dataset.name;
        specialistDataText.innerText = `${specialistObjInfo[currentSpecialistImg].about}`;
        specialistName.innerText = `${currentSpecialistImg}`;
        specialistPosition.innerText = `${specialistObjInfo[currentSpecialistImg].specialization}`;
        bigSpecialistPicture.setAttribute("src", `${specialistObjInfo[currentSpecialistImg].photo}`);
    },700);
}

sliderTabListener.addEventListener("click", (e) => {
    if(e.target.closest(".aboutTheHamspecialistPhotoCircle") !== currentSpecialistDiv && e.target.closest(".aboutTheHamspecialistPhotoCircle")) {
            changeActiveSpecialist(specialistsData, e.target.closest("div"));
    }
})


// Add first 12 img to section portfolio upon pageload amd first Tabs in slider section and add first specialist data at What People Say About theHam section.
document.addEventListener("DOMContentLoaded", () => {
    addPortolioImg(portfolioImgCounter);
    changeActiveSpecialist(specialistsData, document.querySelector(".activeSpecialistInformation"));
})


// slider 

// find next element dataset name according to action(left, right)
const getNextElement = (objectData, event) => {
    const currentElementDataKey = currentSpecialistDiv.children[0].dataset.name;
    const ObjKey = Object.keys(objectData);
    const maxLength = ObjKey.length - 1;    
    if (event === "slideRight") {
        let nextElement = ObjKey.indexOf(`${currentElementDataKey}`) + 1;
        if (nextElement > maxLength) {
            nextElement = 0;
            return ObjKey[nextElement];
        }
        return ObjKey[nextElement];
    }
    let prevElement = ObjKey.indexOf(`${currentElementDataKey}`) - 1;
    if (prevElement < 0) {
       prevElement = maxLength;
       return ObjKey[prevElement];
    }
    return ObjKey[prevElement];
}


// Find and rewrite prev and next visible info globally 
const sliderParentDiv = (nextElement) => {
    Array.from(document.querySelectorAll(`.aboutTheHamspecialistPhotoCircle > img`)).find(element => {
        if (element.dataset.name === nextElement) {
            currentSpecialistDiv = element.parentNode;
        }
    })
}



// slider listener

sliderTabListener.addEventListener("click", (e) => {
    e.preventDefault();
    // deleting animation class once click recieved
    deleteAnimationClassAtClick();
    if (e.target.closest(".swipeSlider")) {
    let action = e.target.closest("div.swipeSlider").classList[1];
    currentSpecialistDiv.classList.remove("activeSpecialistInformation");
    const nextElement = getNextElement(specialistsData, action);
    sliderParentDiv(nextElement);
    currentSpecialistDiv.classList.add("activeSpecialistInformation");
    let currentSpecialistImg = document.querySelector(".activeSpecialistInformation > img").dataset.name;
    animate(specialistDataText, specialistName, specialistPosition, bigSpecialistPicture, bigPictureCircle, 0);
    setTimeout(() => {
        specialistDataText.innerText = `${specialistsData[currentSpecialistImg].about}`;
        specialistName.innerText = `${currentSpecialistImg}`;
        specialistPosition.innerText = `${specialistsData[currentSpecialistImg].specialization}`;
        bigSpecialistPicture.setAttribute("src", `${specialistsData[currentSpecialistImg].photo}`);  
    }, 700);
    }
});