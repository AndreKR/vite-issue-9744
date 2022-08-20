//@ts-ignore
import a from './assets/placekitten.jpg?url'
//@ts-ignore
import b from '/placekitten.jpg?url'
//@ts-ignore
// import c from 'placekitten.jpg?url'

const useFetch = false;

(async () => {
	await addImage('https://placekitten.com/100/100', 'https://placekitten.com/100/100')
	await addImage('import url from \'./assets/placekitten.jpg?url\'', a)
	await addImage('import url from \'/placekitten.jpg?url\'', b)
	// await addImage('import url from \'placekitten.jpg?url\'', c)
	await addImage('/placekitten.jpg', '/placekitten.jpg')
	await addImage('placekitten.jpg', 'placekitten.jpg')
})()

async function addImage(description, url)
{
	const div = document.createElement('DIV')
	div.innerHTML = 'This image was specified as <code>' + description + '</code> and actually loaded from <code>' + url + '</code>:<br>'
	const img = document.createElement('IMG')

	let src
	if (useFetch) {
		let data = await fetch(url)
		let blob = await data.blob()
		src = URL.createObjectURL(blob);
	} else {
		src = url
	}

	img.setAttribute('src', src)
	img.setAttribute('style', 'height: 100px; width: 100px;')
	div.append(img)
	document.querySelector('#app').append(div)
}
