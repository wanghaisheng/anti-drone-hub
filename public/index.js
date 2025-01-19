document.addEventListener('DOMContentLoaded', function() {
    const productSlider = document.querySelector('.product-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let productIndex = 0;

    const socialFeed = document.querySelector('.social-feeds');
    const socialPrevBtn = document.querySelector('.social-prev-btn');
    const socialNextBtn = document.querySelector('.social-next-btn');
    let socialIndex = 0;

    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialPrevBtn = document.querySelector('.testimonial-prev-btn');
    const testimonialNextBtn = document.querySelector('.testimonial-next-btn');
    let testimonialIndex = 0;

    const vendorGrid = document.querySelector('.vendor-grid');
    const vendorPrevBtn = document.querySelector('.vendor-prev-btn');
    const vendorNextBtn = document.querySelector('.vendor-next-btn');
    let vendorIndex = 0;

    const leadForm = document.getElementById('lead-form');

    // Dummy product data
    const products = [
        { name: 'Anti-Drone Radar', description: 'Advanced radar system', image: './images/radar.png', price: '$1,000'},
        { name: 'Drone Jammer', description: 'RF jamming device', image: './images/jammer.png', price: '$1,500' },
        { name: 'Net Cannon', description: 'Portable drone capture device', image: './images/netcannon.png', price: '$1,200' },
         { name: 'Anti-Drone Laser', description: 'Laser for neutralizing drones', image: './images/laser.png', price: '$2,000' },
         { name: 'GPS Spoofer', description: 'Device for confusing drone navigation', image: './images/gpsspoofer.png', price: '$800'},
        { name: 'Interceptor Drone', description: 'Anti-drone system', image: './images/interceptordrone.png', price: '$1,300' },

    ];
    // Dummy social feed data
    const socialPosts = [
        {platform: 'X', content: 'Check out this cool new anti drone technology from GIDS! #AntiDrone #GIDS', url:'https://x.com/Defense_Talks/status/1875875285343650083' },
         { platform: 'X', content: 'Is it a drone jamming system or a SATCOM system? #DroneJammer', url:'https://x.com/Firezstarter1/status/1878242173985906871' },
         {platform: 'X', content: 'A look at anti drone methods, and the limitations that each approach has.', url:'https://x.com/TommyLundn/status/1877434104406225013'},
         {platform: 'X', content: 'Interesting view on how drones and anti-drone systems can affect naval warfare.', url:'https://twitter.com/StevenSimoni/status/1877023012844609898' },
         {platform: 'X', content: 'A look at using nets as a means to stop drones. #DroneNets', url:'https://x.com/David_Hambling/status/1876588290301968481'},
          {platform: 'X', content: 'Humorous debunking of the idea of a universal anti-drone system. #AntiDroneTech', url:'https://x.com/JimmySecUK/status/1868057156538483073'},
    ];
     // Dummy vendor data
   const vendors = [
        {name: 'Robin Radar', description: 'Specializes in radar-based drone detection.'},
    {name: 'Dedrone', description: 'Offers comprehensive counter-drone defense solutions.'},
   {name: 'Maverick Drone', description: 'Provides drone defense products.'},
    {name: 'D-Fend Solutions', description: 'Offers advanced counter-drone technology.'},
    {name: 'NQDefense', description: 'Offers anti-drone systems for security and defense.'},
   {name: 'MyDefence', description: 'Provides C-UAS solutions for drone detection and jamming.'},
  {name: 'Adani Defence', description: 'Offers counter-drone systems.'},
   {name: 'Skylock', description: 'Provides counter-drone detection systems.'},
    {name: 'Northrop Grumman', description: 'Offers counter unmanned aerial systems.'},
   {name: 'Kaspersky', description: 'Provides anti-drone solutions.'},
  {name: 'Drone Assemble', description: 'Offers handheld anti-drone systems.'},
    {name: 'Big Bang Boom', description: 'Offers anti-drone defense systems.'},
  {name: 'Rheinmetall', description: 'Provides drone defense solutions.'},
   {name: 'SCI', description: 'Offers an autonomous counter-drone system called AeroGuard.'},
    {name: 'Netline Tech', description: 'Offers portable counter-drone solutions.'},
  {name: 'L3Harris', description: 'Offers drone guardian counter-UAS systems.'},
 {name: 'Terma', description: 'Offers counter-drone protection systems.'},
   {name: 'Flex Force Enterprises', description: 'Developed the Dronebuster anti-drone system.'},
    {name: 'Anduril', description: 'Offers Counter-UAS solutions.'},
{name: 'Infiniti Optics', description: 'Offers CUAS/Anti-Drone air defense solutions.'},
   {name: 'Fixar', description: 'Offers reliable and intelligent anti-drone systems.'},
    {name: 'Echodyne', description: 'Provides counter-drone radar systems.'},
    {name: 'Rohde & Schwarz', description: 'Offers counter-drone systems.'},
{name: 'Battelle', description: 'Developed DroneDefender technology.'},
   {name: 'Hinaray', description: 'Offers anti-drone systems and guns.'},
    {name: 'RMUS', description: 'Offers a counter drone system called BluVec.'},
   {name: 'Ondas', description: 'Provides counter-drone solutions.'},
{name: 'Elbit Systems', description: 'Offers anti-drone systems.'},
{name: 'Leonardo DRS', description: 'Provides counter-UAS systems.'},
{name: 'Sensofusion', description: 'Offers anti-drone systems.'},
    {name: 'RTX (Raytheon)', description: 'Offers the Coyote counter-drone system.'},
 {name: 'Tron Future', description: 'Offers anti drone solutions'},
  {name: 'WhiteFox Defense', description: 'Offers drone airspace security.'},
 {name: 'Axon', description: 'Provides counter-drone solutions.'},
    {name: 'Safran', description: 'Offers the Skyjacker counter-drone system.'}
    ];
    const testimonials = [
        {name: 'Jane Doe', organization:'Acme Corp', testimonial: 'Our security has improved tremendously since we integrated this technology into our operations.'},
         {name: 'John Smith', organization:'Global Security Inc', testimonial: 'We\'ve used many types of security, and this has worked better than anything we\'ve ever tried.'},
          {name: 'Jane Smith', organization:'SecureCo', testimonial: 'Our team was amazed by the improvements we\'ve made, and we would recommend it to anyone.'}
    ]
   function populateProducts () {
       products.forEach(product => {
           const productCard = document.createElement('div');
           productCard.classList.add('product-card');
           productCard.innerHTML = `
               <img src="${product.image}" alt="${product.name}">
               <h3>${product.name}</h3>
               <p>${product.description}</p>
                <p>Price: ${product.price}</p>
                <button class="product-button">Learn More</button>
           `;
           productSlider.appendChild(productCard);
       });
   }
  function populateSocialFeed () {
       socialPosts.forEach(post => {
           const socialCard = document.createElement('div');
           socialCard.classList.add('social-feed-item');
           socialCard.innerHTML = `
                <h3>${post.platform}</h3>
               <p>${post.content}</p>
               <a href="${post.url}">View Post</a>

           `;
          socialFeed.appendChild(socialCard);
       });
   }
   function populateVendors () {
       vendors.forEach(vendor => {
           const vendorCard = document.createElement('div');
           vendorCard.classList.add('vendor-card');
           vendorCard.innerHTML = `
               <h3>${vendor.name}</h3>
               <p>${vendor.description}</p>
           `;
           vendorGrid.appendChild(vendorCard);
       });
   }
 function populateTestimonials () {
      testimonials.forEach(testimonial => {
           const testimonialCard = document.createElement('div');
           testimonialCard.classList.add('testimonial-card');
           testimonialCard.innerHTML = `
                <h3>${testimonial.name}, ${testimonial.organization}</h3>
               <p>${testimonial.testimonial}</p>
           `;
           testimonialCarousel.appendChild(testimonialCard);
       });
   }

    function updateSliderPosition(index, slider) {
          const cardWidth = slider.querySelector('div').offsetWidth;
          const totalTranslate = -cardWidth * index;
          slider.style.transform = `translateX(${totalTranslate}px)`;
        }

   prevBtn.addEventListener('click', () => {
       if (productIndex > 0) {
            productIndex--;
            updateSliderPosition(productIndex, productSlider);
        }
      });
     nextBtn.addEventListener('click', () => {
        if (productIndex < products.length - 1) {
            productIndex++;
            updateSliderPosition(productIndex, productSlider);

        }
    });

  socialPrevBtn.addEventListener('click', () => {
       if (socialIndex > 0) {
           socialIndex--;
          updateSliderPosition(socialIndex, socialFeed)
        }
      });
     socialNextBtn.addEventListener('click', () => {
          if (socialIndex < socialPosts.length - 1) {
             socialIndex++;
           updateSliderPosition(socialIndex, socialFeed)
        }
    });
    testimonialPrevBtn.addEventListener('click', () => {
       if (testimonialIndex > 0) {
          testimonialIndex--;
            updateSliderPosition(testimonialIndex, testimonialCarousel);
        }
      });
      testimonialNextBtn.addEventListener('click', () => {
          if (testimonialIndex < testimonials.length - 1) {
              testimonialIndex++;
             updateSliderPosition(testimonialIndex, testimonialCarousel);
        }
    });
   vendorPrevBtn.addEventListener('click', () => {
      if (vendorIndex > 0) {
          vendorIndex--;
          updateSliderPosition(vendorIndex, vendorGrid)
      }
    });
    vendorNextBtn.addEventListener('click', () => {
        if (vendorIndex < vendors.length - 1) {
            vendorIndex++;
             updateSliderPosition(vendorIndex, vendorGrid)
        }
    });

     leadForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
         // Get values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
      // Here, you can handle the submission of data to server,
      //  console logs as a placeholder
      console.log('Name: ', name)
       console.log('Email: ', email);
      console.log('Phone: ', phone);
       console.log('Message: ', message);
       alert('Form Submitted!');
     // Clear the form inputs
    leadForm.reset();
  });
  populateProducts();
  populateSocialFeed();
   populateVendors();
  populateTestimonials();
});
