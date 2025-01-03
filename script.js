//your code here
document. addEventListner("DOMContentLoaded",()=>{
	const images = document.querySelectorAll(".image");
	let dragged = null;

	images.forEach((image)=>{
		image.addEventListner("dragstart",(event)=>{
		 dragged = event.target; // Store the dragged element
      event.target.classList.add("selected");	
		});
		
		image.addEventListener("dragend",(event)=>{
			event.target.classList.remove("selected");
		});
		
		image.addEventListner("dragover",(event)=>{
			event.preventDefault();
		});

		image.addEventListner("drop",(event)=>{
			event.preventDefault();
		});
		if(dragged !== event.target){
			const tempContent = dragged.innerHTML;
			dragged.innerHTML = event.target.innerHTML;
			event.target.innerHTML= tempContent;
		}
	});
});
});