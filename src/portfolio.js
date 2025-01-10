/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Goutham Srinivas",
  title: "Hi all, I'm Goutham",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Expressjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FlPMfSUXbZW_h2VkuDKE3JzJR0vWa5Bq/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GouthamSrinu",
  linkedin: "https://www.linkedin.com/in/gouthamsrinivas/",
  gmail: "gouthamsrinivasmantripragada@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A CURIOUS FULL STACK DEVELOPER WHO WANTS TO EXPLORE.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Web Applications that solve real world problems"),
    emoji(
      "⚡ Bring ideas to life with my programming skills."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manipal Institute Of Technology",
      logo: require("./assets/images/mit.png"),
      subHeader: "Master of Computer Applications - MCA",
      duration: "August 2023 - July 2025",
      desc: "CGPA : 9.28",
      descBullets: [
        "Published 2 review papers on AI and its effects on creative fields.",
        "Been awarded the Achiever's Scholarship for being an exceptional student academically."
      ]
    },
    {
      schoolName: "Vikrama Simhapuri University",
      logo: require("./assets/images/vsu.jpg"),
      subHeader: "Bachelor of Computer Applications - BCA",
      duration: "September 2013 - April 2017",
      desc: "CGPS: 8.87",
      descBullets: ["Acted as the campus ambassador with Verzeo EduTech and Helped in providing internship opportunities for my peers."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SOFTWARE ENGINEERING INTERN ",
      company: "Ganglia Technologies",
      companylogo: require("./assets/images/ganglia.jpg"),
      date: "December 2024 – Present",
      desc: "MERN Stack Developer",
      descBullets: [
        "Served as the primary backend engineer for a client project at Ganglia Technologies, designing and implementing backend lows, database configurations, and API integrations to ensure seamless functionality and scalability",
        "Led a team of 8 for an internal project, overseeing project timelines, delegating tasks, and driving the implementation of innovative solutions to enhance the project’s success and align with company goals.",
        "Revamped frontend architecture to improve reusability and operational efficiency while independently hosting and configuring backend systems, ensuring high performance and reliability for both internal and client-facing applications."
      ]
    },
    {
      role: "SeriveNow Developer - Intern",
      company: "INRY ServiceNow Elite Partner",
      companylogo: require("./assets/images/inry.jpg"),
      date: "June 2022 – January 2023",
      desc: "ServiceNow Developer (Service Portal)",
      descBullets: [
        "My role as an associate consultant on a project with Presbyterian Health Service Pvt Ltd I got the opportunity to showcase my communication skills when interacting with the client.",
        "Enhanced the service portal's interface by integrating dashboards and connecting it with EPIC (an EMR tool used by healthcare professionals), efficiently routing data from EPIC into their ServiceNow instance.",
        "Demonstrated exceptional efficiency in attaining Certified System Admin status, setting a record as the fastest achiever within the organization with a remarkable 40-day completion time.",
        "During the initial phases of L5.ai, a subsidiary of INRY, I contributed to projects focused on Click Up."
      ]
    },
    {
      role: "Web Developer - Intern",
      company: "VERZEO Edutech",
      companylogo: require("./assets/images/verzeo.jpg"),
      date: "April 2021 – July 2021",
      desc: "Web Development Internship - Front End Focus.",
      descBullets: ["Campus Ambassador – I served as a liaison between Verzeo and my college, facilitating the generation of internship opportunities for my fellow students.",
         "Web Development Intern: Gained expertise in HTML, CSS, and JavaScript, and developed a location-based weather application using the OpenWeather API"
    ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pe.png"),
      projectName: "PatentExchange",
      projectDesc: "An ecommerce like platform for efficient exchange of patents.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://patentexchange.onrender.com/"
        }
      ]
    },
    {
      image: require("./assets/images/gsbox.png"),
      projectName: "GSBox",
      projectDesc: "Video game discovery application",
      footerLink: [
        {
          name: "Go to Repo",
          url: "https://github.com/GouthamSrinu/GSbox"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8977937426",
  email_address: "gouthamsrinivasmantripragada@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection, bigProjects, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, resumeSection, skillsSection, socialMediaLinks,
  splashScreen, talkSection, techStack, twitterDetails, workExperiences
};

