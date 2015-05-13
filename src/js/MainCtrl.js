class MainCtrl {
	constructor() {
		let page = new Page(),
		$s = document.getElementById("elementsList"),
		$b = document.getElementById("addElement");



		for (var key in elements) {
			$s.innerHTML += '<option value="'+key+'">'+elements[key].name+'</option>';
		}

		function addOption(e) {
			let ne = new Element({prefix: 'cus'});

			page.addElement(elements[$s.value].template);
		}

		$b.addEventListener("click", addOption);


		$s.addEventListener("click", function(e) {
			console.log("clicked");
		// Get the CSS classes
		/*
		var classes = e.target.className.split(" ");
		// Search for the CSS class!
		if(classes) {
			// For every CSS class the element has...
			for(var x = 0; x < classes.length; x++) {
				// If it has the CSS class we want...
				if(classes[x] == "classA") {
					// Bingo!
					console.log("Anchor element clicked!");
					
					
					// Now do something here....
					
					
			

				}
			}
		}*/
		
	//}
		});
	}

	generatePrefix() {
		// can be based on timestamp for smalle cont of duplications
		let prefix = Date.now() / 1000;
		return prefix;
	}
}




