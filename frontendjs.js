var index=0;
var speed=50;
var text='-a budding engineer, content writer and a learner.';


function repeat(){
    document.getElementById('typecontent').innerHTML='';
    index=0;
    type();
}

function type(){
    if(index<text.length){
        document.getElementById('typecontent').innerHTML+=text.charAt(index);
        index++;
        setTimeout(type,speed);
    }
    else{
        setTimeout(repeat,1000);
    }
   
}
type();


var i=0;
var images = [
    "public/publicspeaking.jpg",
    "public/content.jpg",
    "public/act.jpg",
    "public/books.jpg",
  ];
 


  function sliderprev() {
    if (i > 0) {
      i--;
    } else {
      i = images.length - 1; 
    }
    document.getElementById('image').src = images[i];
  }
  
  function slidernext() {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0; 
    }
    document.getElementById('image').src = images[i];
  }

  setInterval(slidernext, 3000);
  
var projectindex=0;
const projects=[
  {
    src: 'public/projectfront.png',
    github: 'https://www.w3schools.com/tags/att_button_type.asp',
    live: 'https://yourproject3.live'
  },
  {
    src: 'public/books.jpg',
    github: 'https://www.cafecoffeeday.com/',
    live: 'https://www.starbucks.in/dashboard'
  },
  {
  src: 'public/act.jpg',
  github: 'https://www.cafecoffeeday.com/',
  live: 'https://www.starbucks.in/dashboard'
}

]
var projectslength=projects.length;

function projectprev() {
  if (projectindex > 0) {
    projectindex--;
  } else {
    projectindex =projectslength - 1; 
  }
  document.getElementById('projectimage').src = projects[projectindex].src;
  document.getElementById('githubBtn').href = projects[projectindex].github;
  document.getElementById('liveBtn').href= projects[projectindex].live;
}

function projectnext() {
  if (projectindex < projectslength - 1) {
    projectindex++;
  } else {
    projectindex= 0; 
  }
  document.getElementById('projectimage').src = projects[projectindex].src;
  document.getElementById('githubBtn').href = projects[projectindex].github;
  document.getElementById('liveBtn').href= projects[projectindex].live;
}

setInterval(projectnext, 3000);


var x=0;
var imagesforacademic = [
    "public/tiet.jpg",
    "public/rla.jpg"
  ];

   function acadprev() {
    if (x > 0) {
      x--;
    } else {
      x= imagesforacademic.length - 1; 
    }
    document.getElementById('imageofcollege').src = imagesforacademic[x];
  }
  
  function acadnext() {
    if (x < imagesforacademic.length - 1) {
      x++;
    } else {
      x = 0; 
    }
    document.getElementById('imageofcollege').src = imagesforacademic[x];
  }
 setInterval(acadnext, 3000);