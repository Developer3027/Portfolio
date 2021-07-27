// cSpell: ignore Copywrite Nutrasite Spotify MyTube Hulu MERN flix
//? Data file using named exports.
//? Design is data being passed into the cards on the design sec on the home page.
//? ProjectData is the data being passed into the cards on the project sec of the home page.

export const design = [
  {
    id: 1,
    gap: 'card-first',
    title: 'Portfolio',
    desc:
      'My portfolio site is probably some of my best work, design or code. The design has gone through many revisions in the past year. Built in React it has a social network to meet and enjoy.',
    imgSrc: './images/portfolio.png',
    rte: '/portfolio-design'
  },
  {
    id: 2,
    title: 'Nutrasite',
    desc:
      'This project is one I just can’t put down. It has gone through several design and tech changes, never to have found a home. I prefer the latest revision for React the best.',
    imgSrc: './images/nutrasite-bg.png',
    rte: '/nutra-plate'
  },
  {
    id: 3,
    gap: 'card-last',
    title: 'MyTube',
    desc:
      'The concept is a web app where one can “register” a video url found online to catalog and organize it, then review the collection in a more Netflix or Spotify style than YouTube style.',
    imgSrc: './images/mytube-bg.png',
    rte: '/mytube-plate'
  }
];

export const projectData = [
  {
    id: '1',
    gap: 'card-first',
    title: 'Portfolio',
    desc:
      'My portfolio site is probably some of my best work, design or code. The design has gone through many revisions in the past year. Built in React it has a social network to meet and enjoy.',
    imgSrc: './images/portfolio.png',
    rte: '/portfolio-web'
  },
  {
    id: '2',
    title: 'Music Found',
    desc:
      'I am creating various templates to make creating sites quicker. In that endeavor I created this hero section kind of page. It is set up as a page in a site that showcases a particular item. In this case it is a song.',
    imgSrc: './images/glynn_coco_bg.png',
    rte: '/music-plate'
  },
  {
    id: '3',
    gap: 'card-last',
    title: 'Coupon',
    desc:
      'I built this project as a proof of concept for UpWork. This is a landing page to sell landing pages. This page features a single point to collect client info, reinforce the click, and thank the client when done.',
    imgSrc: './images/landing-coupon-bg.png',
    rte: '/coupon-plate'
  }
];

export const plateGroup = [
  {
    id: 1,
    btn1: 'Home',
    btn1Path: '/',
    plateName: 'Portfolio',
    btn2: 'Next',
    btn2Path: '/nutra-plate',
    date: 'August 2020',
    linkName: 'Figma Link',
    linkAddr:
      'https://www.figma.com/file/PQJGzDMUfcqfTLCjiYm0So/Dev3027-Portfolio?node-id=83%3A50',
    desc:
      'My portfolio has gone through various updates over the past few years. From a template put up on github to the current version. The newest version has gone through a complete rework. I spent some time in Figma working through the look and feel. Taking ques from the various other works, I created a new, professional, modern feel to the site and built it with the MERN stack. Spent a lot of time in Figma working on this project so I have included it in the design section. Out of all my design works, this project has the most sections layed out.',
    imgSrc: './images/design-port-plate.png',
    imgAlt: 'Portfolio collage'
  },
  {
    id: 2,
    btn1: 'Prev',
    btn1Path: '/portfolio-design',
    plateName: 'Nutrasite',
    btn2: 'Next',
    btn2Path: '/mytube-plate',
    date: 'July 2020',
    linkName: 'Figma Link',
    linkAddr:
      'https://www.figma.com/file/YPd9Eef7Vd9VEoQAK32ulO/NutraSite?node-id=0%3A1',
    desc:
      'An ecommerce site for local shops and stores to transition to during the covid pandemic. I believe that nearly every store selling goods can use the web to sell those goods to the public they serve. Would feature inventory organized by the owner, a system to track customer purchase’s, and a customer service chat ran by store employee who knows the product and customer. Delivery to local zip codes or repeat customers.',
    imgSrc: './images/nutra-plate.png',
    imgAlt: 'nutra site collage'
  },
  {
    id: 3,
    btn1: 'Prev',
    btn1Path: '/nutra-plate',
    plateName: 'MyTube',
    btn2: 'Home',
    btn2Path: '/',
    date: 'January 2021',
    linkName: 'Figma Link',
    linkAddr:
      'https://www.figma.com/file/2wWiQIqOIfILPEVmqUmAeY/Untitled?node-id=0%3A1',
    desc:
      'There are all sorts of video services today. I like the layout of Netflix, Hulu and Disney +. I have had the idea for some time to create a web application that will take you tube content and focus only on web development. Taking these two concept together, I am working on a app that will take the video url you give it and put it in a database. Allow you to place it into various catagories, then organize it in a better way. You would get the content you love easier, surf it in a more pleasing setting, and watch it in a more common, visual context. So I can finally have my dev-flix and everyone else can have the system they want as well.',
    imgSrc: './images/mytube-bg.png',
    imgAlt: 'my tube image'
  },
  {
    id: 4,
    btn1: 'Home',
    btn1Path: '/',
    plateName: 'Portfolio',
    btn2: 'Next',
    btn2Path: '/music-plate',
    date: 'March 2021',
    linkName: 'Code Link',
    linkAddr: 'https://mason-roberts.com',
    desc:
      'My portfolio has gone through various updates over the past few years. From a template put up on github to the current version. The newest version has gone through a complete rework. I spent some time in VScode, working in react, to create a site that is clean, functional, and smart from a code perspective. You can review the code at the github',
    imgSrc: './images/design-port-plate.png',
    imgAlt: 'Portfolio collage'
  },
  {
    id: 5,
    btn1: 'Prev',
    btn1Path: '/portfolio-web',
    plateName: 'MusicFound',
    btn2: 'Next',
    btn2Path: '/coupon-plate',
    date: 'August 2020',
    linkName: 'Code Link',
    linkAddr: 'https://github.com/Developer3027/hero-video',
    desc:
      'Music Found came about because I wanted, or rather, need templates. I know how to build html and css sites but I have little to nothing to use to make them quickly. I love this build. It features a video background, a side navigation, and a audio element that includes a equalizer display. I modified the sound file by including the vinyl static, skips and repeats. This was a lot of fun and I hope you enjoy it.',
    imgSrc: './images/glynn_coco_plate.png',
    imgAlt: 'Portfolio collage'
  },
  {
    id: 6,
    btn1: 'Prev',
    btn1Path: '/music-plate',
    plateName: 'Coupon',
    btn2: 'Home',
    btn2Path: '/',
    date: 'August 2020',
    linkName: 'Site Link',
    linkAddr: 'https://landing-coupon.mason-roberts.com',
    desc:
      'The landing page is used a selling and information tool on the web. This design uses several different sections to inform the potential customer and uses positive reinforcement on clicks. Clicking a big red button will result in a pop up with just a short form to fill out. You clicked the button once, but instead of running from the page, we stay there and ask a few questions. Once the answers are given we thank the customer for the time. This was a Wordpress with elementor build.',
    imgSrc: './images/landing-coupon-plate.png',
    imgAlt: 'Music Found Site'
  }
];

export const projects = [
  {
    id: 1,
    img: '/images/glynn_coco_20210312_023507.png',
    title: 'Music Found',
    body:
      'Simple page with a huge punch. Html / CSS construction with a video background, sidebar nav, audio component, and equalizer display. This page is designed to showcase the audio.',
    anchor: 'https://cocky-cori-7cae1e.netlify.app'
  },
  {
    id: 2,
    img: '/images/barber-shop-desktop.png',
    title: 'The Barber Shop',
    body:
      'A simple little WordPress site with Elementor example. This is a small barber shop that takes online appointments. I found this design on dribble and just loved it. I loved making it work for this concept.',
    anchor: 'https://barber-shop.mason-roberts.com'
  },
  {
    id: 3,
    img: '/images/copywriter-screenwriter.png',
    title: 'The Copywriter',
    body:
      'Ran across a copywriter on UpWork that needed a site and design. It is when I decided to dive into Elementor. This site was worked up in Figma then created in Elementor on WordPress.',
    anchor: 'https://elementor.mason-roberts.com'
  },
  {
    id: 4,
    img: '/images/landing-coupon-screenshot.png',
    title: 'Landing Page',
    body:
      'Landing pages are rather popular. This one is my coupon for any WordPress, Elementor build. This landing page re-enforces the click, gives reasons for the click, a social section and a thank you after completion.',
    anchor: 'https://landing-coupon.mason-roberts.com'
  },
  {
    id: 5,
    img: '/images/kathryn-roberts.png',
    title: 'Kathryn Roberts',
    body:
      'Site I put together for my wife running in the 2020 senate seat number 48 here in South Carolina. She just wanted a simple site with little to no maintenance.',
    anchor: 'https://kathrynroberts-sc48.com'
  },
  {
    id: 6,
    img: '/images/fathers-united.png',
    title: 'Fathers United',
    body:
      'I found that this organization was looking for someone to review the site and give suggestions for a remake. They liked many of my ideas and tried to incorporate them into the current site.',
    anchor: 'https://fathers-united.now.sh'
  },
  {
    id: 7,
    img: '/images/github-crew.png',
    title: 'Github Followers',
    body:
      'Nice little React project that demonstrates using a API. Here I used the github api to gather information on my followers, and display that information in a quick handy card.',
    anchor: 'https://react-github-user-card-one.now.sh'
  },
  {
    id: 8,
    img: '/images/keyboard-bounce.png',
    title: 'Keyboard Bounce',
    body:
      'Fun little canvas project that features bouncing balls of different sizes that interact within the space. Different keys on the keyboard will present different tones and different balls.',
    anchor: 'https://keyboard-sound.now.sh'
  }
];
