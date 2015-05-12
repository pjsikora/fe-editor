




let page = new Page(),
$s = document.getElementById("elementsList"),
$b = document.getElementById("addElement");


for (var key in elements) {
	$s.innerHTML += '<option value="'+key+'">'+elements[key].name+'</option>';
}


function addOption(e) {
	console.log($s.value);
	page.addElement(elements[$s.value].template);
}

$b.addEventListener("click", addOption);


