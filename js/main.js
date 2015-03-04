$(function() {

	// DOM Ready and working?
	console.log("DOM is Ready!");

	//
	// INITIAL HIDDEN DOM-OBJECTS.
	//

	// first line of code for hidden objects here.



	//
	// BUTTON/SUBMIT HANDLERS.
	//

	$(document).on('click', '.search_r', function() {
		loadSearchPage();
	});

	$(document).on('click', '.all_r', function() {
		loadAllRPage();
	});

	$(document).on('click', '.create_r', function() {
		loadCreateRPage();
	});



	//
	// FUNCTIONS
	//

	function loadSearchPage() {
		$.ajax({
			url: "views/search.html",
			dataType: "html",
			cache: false,
			success: function(html) {
				$('.loadContent').html(html);
				console.log("Loaded via .search_r button.");
			},
			error: function(html) {
				console.log("Error loading the html (search_r): ", html);
			}
		});
	}

	function loadAllRPage() {
		$.ajax({
			url: "views/allrec.html",
			dataType: "html",
			cache: false,
			success: function(html) {
				$('.loadContent').html(html);
				console.log("Loaded via .all_r button.");
			},
			error: function(html) {
				console.log("Error loading the html (all_r): ", html);
			}
		})
	}

	function loadCreateRPage() {
		$.ajax({
			url: "views/createrec.html",
			dataType: "html",
			cache: false,
			success: function(html) {
				$('.loadContent').html(html);
				console.log("Loaded via .create_r button.");
			},
			error: function(html) {
				console.log("Error loading the html (create_r): ", html);
			}
		})
	}



	//
	// INITIAL AJAX PAGELOAD.
	//

	$.ajax({
		url: "views/search.html",
		dataType: "html",
		cache: false,
		success: function(html) {
			$('.loadContent').html(html);
		},
		error: function(html) {
			console.log("Error loading the html: ", html);
		}
	});

});