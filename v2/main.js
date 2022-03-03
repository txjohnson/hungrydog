let currentScene = 'start';

function GetScene (name) {
	fetch (`scenes/${name}.html`)
		.then (r => r.text())
		.then (t => {
			let v = document.getElementById ('view');
			v.innerHTML = t;
			currentScene = name;
		});
}

GetScene ('start');
