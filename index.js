(function (button, dialog) {
	let idx = 0;
	let elm = null;
	const msg = atob(dialog.dataset.text).split(/(?= |\n\n)/);

	window.addEventListener(
		'click',
		e => dialog.className
			? !dialog.contains(e.target) && (dialog.className = '')
			: e.target === button
				&& (dialog.className = 'showed')
				&& window.setTimeout(type, 250)
	);

	function type() {
		if (!dialog.className) {
			return;
		}

		let str = msg[idx];

		if (idx === 0 || str[0] === '\n') {
			str = str.trim();
			dialog.appendChild(elm = document.createElement('p'));
		}

		elm.textContent += str;
		dialog.scrollTop = dialog.scrollHeight;

		if (++idx < msg.length) {
			window.setTimeout(type, ~~(Math.random() * 250));
		}
	}
})(
	document.getElementById('button'),
	document.getElementById('dialog')
);