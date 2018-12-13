const data = [];

document.querySelectorAll('.ui-widget-content.slick-row').forEach((row, index) => {
	const nameDiv = row.querySelector('.r5');
	const urlLink = row.querySelector('.r7 > .file-link');
	const name = nameDiv.innerHTML;
	const url = urlLink.innerHTML;
	const obj = {
		index,
		name,
		url,
	}
	data.push(obj);
});

console.log(JSON.stringify(data));