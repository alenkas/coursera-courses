var websites = [{
    title: "Goldsmiths Computing Department",
    url: "http://www.gold.ac.uk/computing/",
    description: "This is where this course was developed.",
    createdOn: new Date(),
    rating: 0
}, {
    title: "University of London",
    url: "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
    description: "University of London International Programme.",
    createdOn: new Date(),
    rating: 0
}, {
    title: "Coursera",
    url: "http://www.coursera.org",
    description: "Universal access to the world’s best education.",
    createdOn: new Date(),
    rating: 0
}, {
    title: "Google",
    url: "http://www.google.com",
    description: "Popular search engine.",
    createdOn: new Date(),
    rating: 0
}];

// start up function that creates entries in the Websites databases.
Meteor.startup(function() {
    
        // code to run on server at startup
        if (!Websites.findOne()) {
            console.log("No websites yet. Creating starter data.");
            for (var i = 0; i < websites.length; i++) {
            console.log(websites[i]);
            Websites.insert({
                title: websites[i].title,
                url: websites[i].url,
                description: websites[i].description,
                createdOn: websites[i].createdOn,
                rating: websites[i].rating
            });

        }
    }
});


