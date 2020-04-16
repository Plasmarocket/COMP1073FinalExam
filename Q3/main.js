	//JavaScript Document

	let button = document.querySelector('button');
	button.addEventListener('click', function cat(){

		let URL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

		fetch(URL).then(function(response){
			response.json().then (function(morecats){
			//store response in variable
			console.log(morecats);
			cats(morecats);
			});
		});

		function cats(jsonObj){
			let cats = jsonObj.cats;

			for(let i = 0; i<cats.length;i++){
				//elements to input data of the cats
				let h2 = document.createElement('h2');
				let p = document.createElement('p');
				let img = document.createElement('img');

				//div to hold the input elements
				let main = document.querySelector('div');
				//set images images need to be live for them to work so it will go to the alt
				img.setAttribute('src', 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/assets/' + cats[i].photo);
				img.setAttribute('alt', cats[i].photo);
				//set h2 to name
				h2.textContent = cats[i].name;
				//make paragraph of info
				p.innerHTML = 'Species: ' + cats[i].species+ ', Favorite Foods: '+ cats[i].favFoods+', Age: '+cats[i].age;
			
				//apphend to div
				main.appendChild(h2);
				main.appendChild(p);
				main.appendChild(img);
			}
		}

	});
