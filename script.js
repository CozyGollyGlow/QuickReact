addImages();

async function addImages(){
	const grid = document.querySelector(".img-grid");

	fetch("images/images.json")
	.then(res => res.json())
	.then(images => {	
		images.forEach(src => {
			const container = document.createElement("div");
			container.classList.add("img-container");

			const img = document.createElement("img");
			img.src = src;

			img.addEventListener("click", async (e) => {
				if (e.target.tagName === "IMG") {
			    	try {
						await navigator.clipboard.writeText(e.target.src);
				    	console.log("Copied!");
				    } catch (err) {
				    	console.error("Copy failed:", err);
				    }
			  	}
			});

			container.appendChild(img)
      		grid.appendChild(container);
    	});
  	});
}