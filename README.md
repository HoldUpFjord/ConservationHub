# Conservation Hub
The idea behind this project was to work on a project that answered commonly encountered pain points from my previous career in Conservation work. Namely having inventory management tools that are scoped to work sites and not water soluble ( a bundle of papers stored in a tent with holes in it.)

**Link to project:** https://conservation-hub.cyclic.app/

![alt tag](https://conservation-hub.cyclic.app/)

## How to run the application:

Navigate to the client directory and run: `npm`.

Navigation to the server directory and run: `npm`.

Navigate to the root directory and run: `npm start`. This will spin up both the client and the server on the same process.

## How It's Made:

**Tech used:** HTML, TailwindCSS, JavaScript, EJS, Express, MongoDB, Mongoose ORM, Cloudinary.

This application leverages Express.js for routing and EJS for dynamic page generation. I implemented authentication with Passport.js, as well as using Mongoose models for managing data in a MongoDB database. Each key area like comments, posts, inventory, and todos has dedicated controllers and routes for targeted functionality.

Under the hood, Express.js directs user requests to the appropriate sections of code. Mongoose interacts with the database, while controllers access and prepare data. Finally, EJS templates combine data with pre-written layouts to produce the dynamic pages you see. Static files like CSS and images are readily available in the public/ directory. This seamless collaboration of technologies gives you an efficient and secure web experience.

## Optimizations
This project is a proof-of-concept MVP. While the basic idea was built, I think there's a lot of imporovements that can be made.

### Refactors 
In retrospect, the layouts and overall UI are not user friendly/ aesthetic. I made the effort to custom build the styling, which was a great learning opportunity, but also a revelation in not re-inventing the wheel. Leveraging a pre-existing styling system like TailwindUI for componenets would likely result in a much more aesthetically pleasing result. 

I think the overall user-flow could be much improved, it just *feels* clunky. When I started this project I had no conception of user-flow tools or user-stories. Going back and starting from a user-first approach would lead to a lot of ideas regarding overhauls. 

### Additional features
I would like to add the ability to take in geo-data of different worksites, and add a page that utilizes a map with pins of worksites. Used in a conservation org, it would provide a clear summary of work done by one org in their region. Extending this thought, I would love to add in more complex forms to take in more data on work done on project sites, and then add in data-vizualization using a tool like three.js to display how much of a impact a conservation org has had in their region season over season and year over year. 

## Lessons Learned:

This project served as my introduction to quite a few things. Templating languages, authentication, routing, interacting with a database. While it served as a really strong foundation, there were **definitely**
mis-steps along the way. First and foremost, debugging this thing was a nightmare. While I havedn't even heard the phrase "type-safety" yet, figuring out I had passed a variable with the inccorect data-type took me... longer than I would like to admit to understand and fix. This also happened numerous throughout development. In essence, the truama from that planted the seeds for a deep respect for type-safe practices.

 Understanding what was happening behind the scenes with state management, cookies, and OAuth protocols was a doozy. This, in addition to understanding MVC architecture were the big conceptual takeaways for me.
