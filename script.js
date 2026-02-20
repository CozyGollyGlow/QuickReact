addImages();

function addImages(){
	const grid = document.querySelector(".img-grid");

	fetch("images/images.json")
	.then(res => res.json())
	.then(images => {	
		images.forEach(src => {
			const container = document.createElement("div");
			container.classList.add("img-container");

			const img = document.createElement("img");
			img.src = src;

			container.appendChild(img)
      		grid.appendChild(container);
    	});
  	});
}