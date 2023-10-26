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
  username: "Yueqi Liao",
  title: "Hi all, I'm Yueqi",
  subTitle: emoji(
    "A graduate student studying computer science at Carnegie Mellon University, a tech enthusiast 🚀 having experience with Full-Stack/Backend Development, computer systems, and firmware engineering. I love technologies and am proficient in Python, JavaScript, Node.js, React, Golang, C/C++, and some other cool languages, libraries, and frameworks. 😎"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ikemenyuki",
  linkedin: "https://www.linkedin.com/in/yueqi-liao/",
  gmail: "yueqil2@andrew.cmu.edu",
  instagram: "https://www.instagram.com/n1co1iao/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND & SYSTEM ENGINEER WHO LIKES EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly scalable & robust backend for web and mobile applications"
    ),
    emoji("⚡ System / firmware development for embedded systems and hardware"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / GCP / Azure"
    ),
    emoji(
      "⚡ Highly interactive frontend development with React / React Native / Flutter"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmuLogo.png"),
      subHeader: "Master of Science in Information Networking",
      duration: "August 2022 - May 2024",
      desc: "Participated in the research of user-level thread packages development.",
      descBullets: [
        "Took courses about Distributed Systems, Storage Systems, Cloud Computing, and Computer Networks...",
      ]
    },
    {
      schoolName: "University of California, San Diego",
      logo: require("./assets/images/ucsdLogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - March 2022",
      desc: "Ranked top 15% in the program. GPA: 3.85/4.0, graduated with Cum Laude Latin Honor.",
      descBullets: [
        "Took courses about Software Engineering, Computer Systems, Operating Systems, and Database Systems..."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Algorithm",
      progressPercentage: "90%"
    },
    {
      Stack: "System/Firmware",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer Intern",
      company: "Orbbec 3D",
      companylogo: require("./assets/images/orbbecLogo.jpeg"),
      date: "May 2023 – August 2023",
      desc: "I had a blast crafting a user-centric React.js app and dabbling in data pagination. I took a dive into the world of AWS EKS, orchestrating neat microservices using Kubernetes. I merged the magic of Langchain Embeddings and Faiss with OpenAI APIs and watched our app chat smarter! Oh, and I streamlined our code delivery using GitHub Actions, making our hefty 3K+ codebase feel like a breeze!",
    },
    {
      role: "Full Stack Software Engineer Intern",
      company: "Orka",
      companylogo: require("./assets/images/orkaLogo.jpeg"),
      date: "Nov 2020 – Apr 2021",
      desc: "I dove deep into React.js, designing bits and pieces that users truly loved, bumping our engagement metrics by 25%! I played around with Node.js and Express.js, and guess what? Our server started responding 30% faster. I also had a chance to beef up our security with Google Firebase and gave our PostgreSQL database a little tweak for quicker data magic!",
    },
    {
      role: "Cloud Software Engineer Intern",
      company: "AsiaInfo",
      companylogo: require("./assets/images/asiainfoLogo.webp"),
      date: "Sep 2020 – Nov 2020",
      desc: "I cooked up a snazzy decision-tree system on AWS Lambda that could effortlessly juggle 10,000+ requests a minute. I took AWS Elastic Load Balancing for a spin and saw our response times drop by a cool 25%. I kept our data safe and consistent with AWS S3 and DynamoDB, and had almost zero downtime, thanks to our nifty automatic replication!",
    },
    {
      role: "Software Engineer Intern",
      company: "Huawei",
      companylogo: require("./assets/images/huaweiLogo.png"),
      date: "Jul 2019 – Sep 2019",
      desc: "I jumped into the testing world with Postman, and voila, our cloud services were 18% more reliable. I made friends with JIRA and noticed our teams chatting and resolving stuff faster. I also had a fun ride automating web tests on Huawei's cloud interface with Selenium, making things look spick and span!",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal & Academic Projects",
  subtitle: "SOME OF MY PERSONAL AND ACADEMIC PROJECTS",
  projects: [
    {
      image: require("./assets/images/kryptozninjaLogo.png"),
      projectName: "Kryptozninja",
      projectDesc: "It's a small but fun NFT trading platform! You can trade any NFTs you like or create & sell your own NFTs with Ethereum! All transactions are secured on the Blockchain.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://kryptozninja.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hdmlLogo.png"),
      projectName: "HDML Enigma",
      projectDesc: "In this project, I embarked on a thrilling quest to unravel this mystery, focusing on the lexing and parsing stages of the HDML compiler!",
      footerLink: [
        {
          name: "Read Blog",
          url: "https://medium.com/@yueqiliao084/decoding-the-hdml-enigma-a-flex-bison-odyssey-2610c75d9c25"
        }
      ]
    },
    {
      image: require("./assets/images/cloudfsLogo.png"),
      projectName: "Cloud File System",
      projectDesc: "In this project, I built a distributed file system that stores small files on local SSD device and large files on the cloud!",
      footerLink: [
        {
          name: "Read Blog",
          url: "https://medium.com/@yueqiliao084/cloudfs-how-i-battled-bytes-ssds-and-the-mighty-cloud-83d2609c98ab"
        }
      ]
    },
    {
      image: require("./assets/images/myftlLogo.png"),
      projectName: "SSD File Translation Layer",
      projectDesc: "I took a light-hearted deep dive into SSDs and Flash Translation Layers and uncovered the fun behind data storage!",
      footerLink: [
        {
          name: "Read Blog",
          url: "https://medium.com/@yueqiliao084/the-myftl-odyssey-navigating-the-flashy-labyrinths-of-solid-state-drives-8600b5f924ff"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mapreduceLogo.png"),
      projectName: "Big Data Analyzer on Cloud",
      projectDesc: "In this project, I created a big data analyzer with Hadoop MapReduce, orchestrated with Kubernetes and deployed it on GCP!",
      footerLink: [
        {
          name: "Read Blog",
          url: "https://medium.com/@yueqiliao084/navigating-the-depths-of-data-crafting-a-large-scale-search-engine-with-kubernetes-hadoop-b13e644b9216"
        }
      ]
    },
    {
      image: require("./assets/images/raftLogo.png"),
      projectName: "Distributed Pub/Sub Store",
      projectDesc: "Say no to the tyranny of the majority! In this project, I built a distributed Pub/Sub store with Raft and RPC!",
      footerLink: [
        {
          name: "Read Blog",
          url: "https://medium.com/@yueqiliao084/orchestrating-harmony-in-chaos-designing-a-pub-sub-distributed-system-with-raft-6323d21e0a21"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("MODELING CAREER 🧑🏻‍🦱 🏆 "),
  subtitle:
    "I also do modeling for my photographer friends for fun!",

  achievementsCards: [
    {
      title: "",
      subtitle:
        "",
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
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or have a job opening? I am actively seeking a new grad software engineer role and feel free to contact me!",
  number: "+1 (858) 900-4075",
  email_address: "yueqil2@andrew.cmu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
