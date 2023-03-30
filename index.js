const url = 'https://www.omdbapi.com/?apikey=b6003d8a&s=All';

const moviesContainer = document.querySelector('#movies-container');
fetch(url)
	.then(response => response.json())
	.then(data => {
		data.Search.forEach(movie => {
			const card = document.createElement('div');
			card.classList.add('card');

			const img = document.createElement('img');
			img.src = movie.Poster;
			card.appendChild(img);

			const title = document.createElement('h3');
			title.textContent = movie.Title;
			card.appendChild(title);

			const year = document.createElement('p');
			year.textContent = movie.Year;
			card.appendChild(year);

			moviesContainer.appendChild(card);

		});
	});

