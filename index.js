var cheerio = require('cheerio'); //jQuery for node
var request = require('request');

request(
	{
    	method: 'GET',
    	url: 'https://www.newschool.edu/parsons/student-work/'
	}, 
	function(err, response, body) {
    	if (err) return console.error(err);
   
    // Tell Cherrio to load the HTML
    $ = cheerio.load(body);
    $('.profile-project-name').each(function() {
        
        console.log($(this).text());

        // for image paths
        // console.log("www.newschool.edu/parsons/student-work" + $(this).attr('src'));
        // node index.js > images.sh
        // add at top of file: '#!/bin/bash'
        // add 'wget' before each url
        // compile: 'chmod +x ____.sh'
        // run: './____.sh'
    });
});