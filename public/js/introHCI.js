'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

// $("#").click(function(e) {
// 	$.get("/project/projectID", addProjectDetails);
// 	console.log("User clicked on project " + idNumber);

// })

// function result() {

// }



/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	var detail = $(this).next();

	console.log("User clicked on project " + idNumber);
	$.get("/project/" + idNumber, function(data) {
		console.log(data);
		detail.html(data.title + data.date + data.image + data.summary);
	
		// detail.html(data.images); 
		// detail.html(data,title)


		
		// replace html
		// add details
	});
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
}



