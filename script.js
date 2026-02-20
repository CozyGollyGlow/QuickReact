addImages();

function addImages(){
	const container = document.querySelector(".gif-grid");

	fetch("images/images.json")
	.then(res => res.json())
	.then(images => {	
		images.forEach(src => {
			const img = document.createElement("img");
			img.src = src;
      		container.appendChild(img);
    	});
  	});
}