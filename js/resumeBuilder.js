/*bio contains name, role, welcomeMessage, and biopic strings,
contacts object and skills array of skill strings. The contacts
object should contain a mobile number, email address, github username,
twitter handle and location. The twitter property is optional.*/
var data = "%data%";
var bio = {
    "name": "Rohit Gupta",
    "role": "Web Developer",
    "contacts": {
        "mobile": "864-633-9311",
        "email": "rohitg@g.clemson.edu",
        "github": "github.com/rohitg02",
        "linkedin": "https://www.linkedin.com/in/rohit-gupta-7217a510a",
        "portfolio": "www.rohitgweb.com",
        "location": "Arlington Heights"
    },
    "welcomeMessage": "<br>Welcome to my page",
    "skills": ["Javascript", "Angular JS", "HTML/Html5", "CSS","JSON","Knockout JS","AJAX", "PHP", "C/C++", "Java", "Bootstrap", "MySQL","Gulp"],
    "biopic": "images/profile.png"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").append(formattedRole);

    //HTMLcontactGeneric
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedPortfolio = HTMLportfolio.replace(data, bio.contacts.portfolio);
    var formattedLinkedin = HTMLlinkedin.replace(data, bio.contacts.linkedin);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

    $("#header").append(formattedMobile);
    $("#header").append(formattedEmail);
    $("#header").append(formattedGithub);
    $("#header").append(formattedTwitter);
    $("#header").append(formattedLocation);
    $("#header").append(formattedLinkedin);
    $("#header").append(formattedPortfolio);


    var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedbioPic);

    //                  Welcome Message
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $('#header').append(formattedwelcomeMessage);

    //                Displaying skills
    $("#header").append(HTMLskillsStart);


    bio.skills.forEach(function(skill) {
        if (bio.skills.length > 0) {
            var formattedSkill = HTMLskills.replace(data, skill);
            $("#skills").append(formattedSkill);
        }
    });

    $("#lets-connect").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

}(this);



/*work
work contains an array of jobs. Each object
in the jobs array should contain an employer,
title, location, dates worked and description strings.*/
var work = {
    "jobs": [{
        "employer": "Clemson University",
        "title": "Software Developer Intern",
        "location": "Clemson, SC",
        "dates": "February 2016 - May 2016",
        "description": "Developed an application using PHP on Microsoft Azure to integrate streaming data from multiple sources and deploy data management.<br>•Export data stream from Information Retrieval backend infrastructure from USGS (United States Geological Survey) website in real time <br>•Analyzed the Stream data using machine learning algorithms <br>•Anomaly detection in Information Retrieval and USGS (United States Geological Survey) data streams and comparing the models <br>•Deployed Power BI to facilitate data visualization and system management."
    }, {
        "employer": "Clemson University",
        "title": "Software Developer Intern",
        "location": "Clemson, SC",
        "dates": "February 2016 - May 2016",
        "description": "Developed a C# based control interface to command and guide a patient positioning system prototype based on external image processing guidance data.<br>•   Made a dll file using the Pascal programming language which had TCP/IP protocol functions<br>•   Received  the motion points from client side coded in C#<br>•   Successfully translate all the motions from the kinect sensor to the robot accurately"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {

        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
            var formattedTitle = HTMLworkTitle.replace(data, job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace(data, job.location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDatesWorked = HTMLworkDates.replace(data, job.dates);
            $(".work-entry:last").append(formattedDatesWorked);

            var formattedDescription = HTMLworkDescription.replace(data, job.description);
            $(".work-entry:last").append(formattedDescription);
        }
    });
}(this);
/*projects contains an array of projects. Each object in the projects
array should contain title, dates and description strings, and an
images array with URL strings for project images*/
var projects = {
    "projects": [{
        "title": "<a href='https://people.cs.clemson.edu/~rohitg/metube_2016/hello/metube_2016/'>Web Application: MeTube</a>",
        "dates": "Spring 2016",
        "description": "Design and developed a web application based on YouTube where users can view and share video, audio and images<br>Contained additional features like messaging, adding friends and different content privacy settings<br>Technologies used: HTML5, CSS, JavaScript, Bootstrap on the front-end and PHP, MySQL on the backend",
        "images": ["images/metubecrop.png"]
    }, {

        "title": "Interactive Resume (JavaScript, jQuery) (UDACITY Front-End Web Developer Nano Degree Project)",
        "dates": "July 2016 - September 2016 ",
        "description": " Created an online interactive resume to display the skills,"+
         "work experience and Google map to display the locations where I have worked and studied",
        "images": ["images/resume.png"]
    }, {
        "title": "<a href='https://people.cs.clemson.edu/~rohitg/mememaker/'>Meme Maker (HTML 5 Canvas, JavaScript, jQuery) (UDACITY Front-End Web Developer Nano Degree Quiz)</a>",
        "dates": "July 2016 - September 2016",
        "description": "Added the functionality to add the text and select the image in Meme Maker",
        "images": ["images/meme.png"]
    }, {
        "title": "<a href='https://people.cs.clemson.edu/~rohitg/avoidbeetle/'>Avoid Beetle (HTML 5 Canvas, JavaScript, jQuery, CSS) (UDACITY Front-End Web Developer Nano Degree Project)</a>",
        "dates": "July 2016 - September 2016",
        "description": "Avoid Beetle is an arcade game with exciting and engaging gameplay with mind-blowing graphics",
        "images": ["images/avoidbeetle.png"]
    }, {
        "title": "<a href='https://youtu.be/oDFXihw79ZA'>Code Optimization (JavaScript, jQuery) (UDACITY Front-End Web Developer Nano Degree Website Optimization Project)<a>",
        "dates": "July 2016 - September 2016",
        "description": "IOptimized a website as part of Udacity's Front-End Web"+
        "Developer Nanodegree with a number of optimization and performance related"+
        "issues to achieve the Page Speed score of greater than ninety and consistent"+
        "frame-rate of sixty frames per second",
        "images": ["images/pizza.png"]
    }, {
        "title": "<a href='#'>Neighborhood Map (HTML 5 Canvas, JavaScript, jQuery, CSS) (UDACITY Front-End Web Developer Nano Degree Final Project)<a>",
        "dates": "July 2016 - September 2016",
        "description": "Developed an application featuring a map of neighborhood"+
         "with the functionality including: map markers to identify popular"+
         "locations, a search function to discover these locations, and a list."+
         " Also, implemented third-party APIs (such as Street View images, "+
         "Wikipedia articles and Four Square) to provide additional information "+
         "about each of these locations",
        "images": ["images/neighborhood.png"]
    }
    ]
};

projects.display = function() {

    projects.projects.forEach(function(project) {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace(data, project.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLworkDates.replace(data, project.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace(data, project.description);
            $(".project-entry:last").append(formattedDescription);

            for (var i = 0; i < project.images.length; i++) {
                var formattedImage = HTMLprojectImage.replace(data, project.images[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    });
}(this);

/*education contains an array of schools. Each object in the
schools array contains name, location, degree dates and url
strings, and amajors array of major strings.

education also contains an onlineCourses array.
Each object in the onlineCourses array should contain a title,
school, dates and url strings.*/
var education = {
    "schools": [{

            "name": "Clemson University",
            "location": "Clemson, SC",
            "degree": "Bachelor of Science",
            "majors": ["Computer Science"],
            "dates": "August 2014 - May 2016",
            "url": "http://www.clemson.edu/"
        }, {
            "name": "Ansal University",
            "location": "Gurgaon, India",
            "degree": "Study Abroad Exchange Program",
            "majors": ["Computer Science"],
            "dates": "August 2012- May 2014",
            "url": "http://www.ansaluniversity.edu.in/"
        }

    ],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": " Udacity",
        "dates": "2016",
        "url": " https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        if (education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedschoolName = HTMLschoolName.replace(data, school.name);

            var formattedschoolDegree = HTMLschoolDegree.replace(data, school.degree);
            var formattedsnamedegree = formattedschoolName + formattedschoolDegree;

            $(".education-entry:last").append(formattedsnamedegree);

            var formattedschoolDates = HTMLschoolDates.replace(data, school.dates);
            $(".education-entry:last").append(formattedschoolDates);

            var formattedschoolLocation = HTMLschoolLocation.replace(data, school.location);
            $(".education-entry:last").append(formattedschoolLocation);

            var formattedschoolMajor = HTMLschoolMajor.replace(data, school.majors);
            $(".education-entry:last").append(formattedschoolMajor);
        }
    });

    education.onlineCourses.forEach(function(onlineCourse) {
        if (education.onlineCourses.length > 0) {

            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedonlineTitle = HTMLonlineTitle.replace(data, onlineCourse.title);

            var formattedonlineSchool = HTMLonlineSchool.replace(data, onlineCourse.school);
            var formattedonlinetschool = formattedonlineTitle + formattedonlineSchool;
            $(".education-entry:last").append(formattedonlinetschool);

            var formattedonlineDates = HTMLonlineDates.replace(data, onlineCourse.dates);
            $(".education-entry:last").append(formattedonlineDates);

            var formattedonlineUrl = HTMLonlineURL.replace(data, onlineCourse.url);
            $(".education-entry:last").append(formattedonlineUrl);
        }
    });

}(this);



///Internationalize NAME ////
$(document).click(function(loc) {

    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    var numret = name[0] + " " + name[1];
    return numret;
}


$("#mapDiv").append(googleMap);
