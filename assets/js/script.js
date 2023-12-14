/**
* Skills Icon Tabs
*/

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("all").style.display = "block";
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("skills-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    var iconContainer = document.getElementById(tabName);
    iconContainer.innerHTML = ""; // Clear existing content
    
    var iconsAndLabels = getIconsAndLabelsForTab(tabName);
    
    var ul = document.createElement("ul");
    ul.classList.add("skills-icon-list");
    
    iconsAndLabels.forEach(function (item, index) {
        var li = document.createElement("li");
        li.classList.add("skills-icon-item");
        
        var img = document.createElement("img");
        img.classList.add("skills-icon-img");
        img.src = item.iconSrc;
        img.alt = item.altText;
        
        var label = document.createElement("p");
        label.classList.add("skills-icon-label");
        label.innerText = item.label;
        
        li.appendChild(img);
        li.appendChild(label);
        
        ul.appendChild(li);
    });
    
    // Append the unordered list to the iconContainer
    iconContainer.appendChild(ul);
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}


// Customize this function to return an array of icon sources, labels, and alt text for each tab
const tabData = {
    programming: [
        { iconSrc: "assets/img/skills/css.svg", label: "CSS", altText: "CSS" },
        { iconSrc: "assets/img/skills/html.svg", label: "HTML", altText: "HTML" },
        { iconSrc: "assets/img/skills/js.svg", label: "JS", altText: "JS" },
        { iconSrc: "assets/img/skills/ts.svg", label: "TS", altText: "TS" },
        { iconSrc: "assets/img/skills/java.svg", label: "Java", altText: "Java" },
        { iconSrc: "assets/img/skills/csharp.svg", label: "C#", altText: "C#" },
        { iconSrc: "assets/img/skills/python.svg", label: "Python", altText: "Python" }
    ],
    web: [
        { iconSrc: "path/to/web-icon1.png", label: "Web Technology 1", altText: "Web Technology 1" },
        { iconSrc: "path/to/web-icon2.png", label: "Web Technology 2", altText: "Web Technology 2" }
    ],
    tools: [
        { iconSrc: "path/to/tools-icon1.png", label: "Tool 1", altText: "Tool 1" },
        { iconSrc: "path/to/tools-icon2.png", label: "Tool 2", altText: "Tool 2" }
    ],
    "data-analytics": [
        { iconSrc: "path/to/tools-icon1.png", label: "Data Analytics 1", altText: "Data Analytics 1" },
        { iconSrc: "path/to/tools-icon2.png", label: "Data Analytics 2", altText: "Data Analytics 2" }
    ],
};

function getIconsAndLabelsForTab(tabName) {
    return tabData[tabName] || [];
}
