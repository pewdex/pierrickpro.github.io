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

document.addEventListener("DOMContentLoaded", function () {
    // Display the "All" tab by default
    openTab({ currentTarget: document.querySelector('.tablinks') }, 'all');
});

// Customize this function to return an array of icon sources, labels, and alt text for each tab
const tabData = {
    all: [
        { iconSrc: "assets/img/skills/js.svg", label: "JavaScript", altText: "JavaScript" },
        { iconSrc: "assets/img/skills/ts.svg", label: "TypeScript", altText: "TypeScript" },
        { iconSrc: "assets/img/skills/java.svg", label: "Java", altText: "Java" },
        { iconSrc: "assets/img/skills/csharp.svg", label: "C#", altText: "C#" },
        { iconSrc: "assets/img/skills/python.svg", label: "Python", altText: "Python" },
        { iconSrc: "assets/img/skills/c.svg", label: "C++", altText: "C++" },
        { iconSrc: "assets/img/skills/css.svg", label: "CSS", altText: "CSS" },
        { iconSrc: "assets/img/skills/html.svg", label: "HTML", altText: "HTML" },
        
        { iconSrc: "assets/img/skills/heroku.svg", label: "Heroku", altText: "Heroku" },
        { iconSrc: "assets/img/skills/spring.svg", label: "Spring", altText: "Spring" },
        { iconSrc: "assets/img/skills/rabbitmq.svg", label: "RabbitMQ", altText: "RabbitMQ" },
        { iconSrc: "assets/img/skills/nodejs.svg", label: "NodeJS", altText: "NodeJS" },
        { iconSrc: "assets/img/skills/flask.svg", label: "Flask", altText: "Flask" },
        { iconSrc: "assets/img/skills/jupyter.svg", label: "Jupyter", altText: "Jupyter" },
        { iconSrc: "assets/img/skills/snowflake.svg", label: "Snowflake", altText: "Snowflake" },
        { iconSrc: "assets/img/skills/dbt.svg", label: "dbt", altText: "dbt" },
        { iconSrc: "assets/img/skills/powerbi.svg", label: "Power BI", altText: "Power BI" },
        { iconSrc: "assets/img/skills/sql-server.svg", label: "SQL Server", altText: "SQL Server" },
        { iconSrc: "assets/img/skills/postgresql.svg", label: "Postgres", altText: "Postgres" },
        { iconSrc: "assets/img/skills/mysql.svg", label: "MySQL", altText: "MySQL" },
        { iconSrc: "assets/img/skills/looker-studio.svg", label: "Looker Studio", altText: "Looker Studio" },
        { iconSrc: "assets/img/skills/kafka.svg", label: "Kafka", altText: "Kafka" },
        { iconSrc: "assets/img/skills/pytorch.svg", label: "PyTorch", altText: "PyTorch" },
        { iconSrc: "assets/img/skills/jira.svg", label: "Jira", altText: "Jira" },
        { iconSrc: "assets/img/skills/aws.svg", label: "AWS", altText: "AWS" },
        { iconSrc: "assets/img/skills/google-app-script.svg", label: "Google App Script", altText: "Google App Script" },
        { iconSrc: "assets/img/skills/gitlab.svg", label: "GitLab", altText: "GitLab" },
        { iconSrc: "assets/img/skills/sklearn.svg", label: "scikit-learn", altText: "scikit-learn" },
        { iconSrc: "assets/img/skills/git.svg", label: "Git", altText: "Git" },
        { iconSrc: "assets/img/skills/dot-net-core.svg", label: ".NET Core", altText: ".NET Core" },
        { iconSrc: "assets/img/skills/docker.svg", label: "Docker", altText: "Docker" },
        { iconSrc: "assets/img/skills/angular.svg", label: "Angular", altText: "Angular" },
        { iconSrc: "assets/img/skills/github.svg", label: "GitHub", altText: "GitHub" }
    ],
    programming: [
        { iconSrc: "assets/img/skills/csharp.svg", label: "C#", altText: "C#" },
        { iconSrc: "assets/img/skills/js.svg", label: "JavaScript", altText: "JavaScript" },
        { iconSrc: "assets/img/skills/ts.svg", label: "TypeScript", altText: "TypeScript" },
        { iconSrc: "assets/img/skills/java.svg", label: "Java", altText: "Java" },
        { iconSrc: "assets/img/skills/c.svg", label: "C++", altText: "C++" },
        { iconSrc: "assets/img/skills/python.svg", label: "Python", altText: "Python" }
    ],
    web: [
        { iconSrc: "assets/img/skills/css.svg", label: "CSS", altText: "CSS" },
        { iconSrc: "assets/img/skills/html.svg", label: "HTML", altText: "HTML" },
        { iconSrc: "assets/img/skills/js.svg", label: "JavaScript", altText: "JavaScript" },
        { iconSrc: "assets/img/skills/nodejs.svg", label: "NodeJS", altText: "NodeJS" },
        { iconSrc: "assets/img/skills/aws.svg", label: "AWS", altText: "AWS" },
        { iconSrc: "assets/img/skills/spring.svg", label: "Spring", altText: "Spring" },
        { iconSrc: "assets/img/skills/redis.svg", label: "Redis", altText: "Redis" },
        { iconSrc: "assets/img/skills/sql-server.svg", label: "SQL Server", altText: "SQL Server" },
        { iconSrc: "assets/img/skills/postgresql.svg", label: "Postgres", altText: "Postgres" },
        { iconSrc: "assets/img/skills/mysql.svg", label: "MySQL", altText: "MySQL" },
        { iconSrc: "assets/img/skills/heroku.svg", label: "Heroku", altText: "Heroku" },
        { iconSrc: "assets/img/skills/docker.svg", label: "Docker", altText: "Docker" },
        { iconSrc: "assets/img/skills/angular.svg", label: "Angular", altText: "Angular" },
        { iconSrc: "assets/img/skills/flask.svg", label: "Flask", altText: "Flask" },
        { iconSrc: "assets/img/skills/kafka.svg", label: "Kafka", altText: "Kafka" },
        { iconSrc: "assets/img/skills/rabbitmq.svg", label: "RabbitMQ", altText: "RabbitMQ" }
    ],
    tools: [
        { iconSrc: "assets/img/skills/aws.svg", label: "AWS", altText: "AWS" },
        { iconSrc: "assets/img/skills/jira.svg", label: "Jira", altText: "Jira" },
        { iconSrc: "assets/img/skills/heroku.svg", label: "Heroku", altText: "Heroku" },
        { iconSrc: "assets/img/skills/gitlab.svg", label: "GitLab", altText: "GitLab" },
        { iconSrc: "assets/img/skills/git.svg", label: "Git", altText: "Git" },
        { iconSrc: "assets/img/skills/docker.svg", label: "Docker", altText: "Docker" },
        { iconSrc: "assets/img/skills/github.svg", label: "GitHub", altText: "GitHub" }
    ],
    "data-analytics": [
        { iconSrc: "assets/img/skills/powerbi.svg", label: "Power BI", altText: "Power BI" },
        { iconSrc: "assets/img/skills/snowflake.svg", label: "Snowflake", altText: "Snowflake" },
        { iconSrc: "assets/img/skills/dbt.svg", label: "dbt", altText: "dbt" },
        { iconSrc: "assets/img/skills/sql-server.svg", label: "SQL Server", altText: "SQL Server" },
        { iconSrc: "assets/img/skills/postgresql.svg", label: "Postgres", altText: "Postgres" },
        { iconSrc: "assets/img/skills/mysql.svg", label: "MySQL", altText: "MySQL" },
        { iconSrc: "assets/img/skills/sklearn.svg", label: "scikit-learn", altText: "scikit-learn" },
        { iconSrc: "assets/img/skills/jupyter.svg", label: "Jupyter", altText: "Jupyter" },
        { iconSrc: "assets/img/skills/pytorch.svg", label: "PyTorch", altText: "PyTorch" },
        { iconSrc: "assets/img/skills/looker-studio.svg", label: "Looker Studio", altText: "Looker Studio" },
    ],
};

function getIconsAndLabelsForTab(tabName) {
    return tabData[tabName] || [];
}
