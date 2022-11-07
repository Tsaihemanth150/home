// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sai",
  middleName: "Hemnanth",
  lastName: "Talluri",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Tsaihemanth150",
    },
    {
      image: "fa-facebook",
      url: "https://facebook.com/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sai-hemanth-talluri/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/c1.png"),
  imageSize: 375,
  message:
    "My name is Sai hemanth Talluri. I’m currently currently pursuing my undergraduate degree in computer science engineering at K L University. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1kAMuScoEctGeso5Q_KQVxyclzqSCW2IV/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Tsaihemanth150",
  reposLength: 2,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "i was selected as intel student ambassador for IoT, where i need to  Organize IoT and Edge AI focused training and hackathons within the campus ,Build and share projects leveraging to inspire fellow students, where i need to form a club in my university to develop a solutions for real world  problem where i am lead for that club..",
  images: [
    { 
      img: require("../editable-stuff/4.jpg"), 
      label: "The AI and ML", 
      paragraph: "This was the session i have conducted on AI and ML at our university" 
    },
    { 
      img: require("../editable-stuff/r1.jpg"), 
      label: "The Iot and HPC", 
      paragraph: "This was session conducted by me on Iot and HPC." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or CyberSecurity opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "tsaihemanth15@gmail.com",
};



// Blog SECTION
const blog = {
 show: true,
};


export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
