var cheerio = require('cheerio'); //jQuery for node
var request = require('request');

request(
	{
    	method: 'GET',
    	url: 'https://www.newschool.edu/parsons/student-work/'
    	// url: 'http://www.para-site.org.hk/en/exhibitions'
	}, 
	function(err, response, body) {
    	if (err) return console.error(err);
   
    // Tell Cherrio to load the HTML
    $ = cheerio.load(body);
    $('.profile-project-name').each(function() {
    	// $('#viewport').each(function() {
        console.log($(this).text());
		// console.log($(this).attr('title'));

        // for image paths
        // console.log("www.newschool.edu/parsons/student-work" + $(this).attr('src'));
        // console.log("http://www.para-site.org.hk" + $(this).attr('src'));
        // node index.js > images.sh
        // add at top of file: '#!/bin/bash'
        // add 'wget' before each url

    });
});