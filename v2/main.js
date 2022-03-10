let currentScene = 'start';

function GetScene (name) {
	fetch (`scenes/${name}.html`)
		.then (r => r.text())
		.then (t => {
			let parser = new DOMParser();
			let frag = parser.parseFromString (t, 'text/html');
			console.log(frag);
			let v = document.getElementById ('view');
//			v.innerHTML = t;
			v.appendChild (frag);
			currentScene = name;
		});
}

GetScene ('start');
