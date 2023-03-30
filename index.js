const url = 'https://www.omdbapi.com/?apikey=b6003d8a&s=All';
const input = document.querySelector('input')
let form = document.querySelector('form')

const moviesContainer = document.querySelector('#movies-container');
fetch(url)
	.then(response => response.json())
	.then(data => {
		data.Search.forEach(movie => {
      moviesContainer.innerHTML +=`
      <div class='card'>
      <img src='${movie.Poster}'>
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      </div>
      `
		});
	});

// input.addEventListener('change', () => {
//   moviesContainer.innerHTML = ''
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       for (let value of data.Search) {
//         let arr = value.Title.split(' ');
//         for (let i of arr) {
//           // if (input.value.includes(i.toLowerCase())) {
//             if(i.toLowerCase().includes(input.value.toLowerCase())){
//               moviesContainer.innerHTML +=`
//               <div class='card'>
//               <img src='${value.Poster}'>
//               <h3>${value.Title}</h3>
//               <p>${value.Year}</p>
//               </div>
//               `
//             // break
//           }
//         }
//         // console.log(arr)
//       }
//     })
//     .catch(error => console.error(error));
// });

// ! Упростил и заработал

form.addEventListener('submit', (event) => {
  event.preventDefault()
  moviesContainer.innerHTML = '';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let value of data.Search) {
        const title = value.Title.toLowerCase();
        const search = input.value.toLowerCase();
        if (title.includes(search)) {
          moviesContainer.innerHTML += `
            <div class='card'>
              <img src='${value.Poster}'>
              <h3>${value.Title}</h3>
              <p>${value.Year}</p> 
            </div>
          `;
        }
      }
    })
    .catch(error => console.error(error));
});
