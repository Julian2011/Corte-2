const cardContainer = document.querySelector('.card-container');
  
    // hacemos una llamada a la API de los personajes
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        // seleccionamos los primeros 12 personajes
        const characters = data.results.slice(0, 12);
  
        // iteramos a través de los primeros 12 personajes y creamos las cards
        characters.forEach(character => {
          // creamos una nueva card
          const card = document.createElement('div');
          card.classList.add('card');
  
          // agregamos la imagen a la card
          const image = document.createElement('img');
          image.src = character.image;
          image.alt = character.name;
          card.appendChild(image);
  
          // agregamos el nombre y especie a la card
          const title = document.createElement('h3');
          title.textContent = `${character.name} (${character.species})`;
          card.appendChild(title);
  
          // agregamos la card al contenedor de cards
          cardContainer.appendChild(card);
  
          // agregamos una opción al elemento select con el nombre de la carta
          const option = document.createElement('option');
          option.value = character.name;
          option.textContent = character.name;
          selectCard.appendChild(option);
        });
      });
  
    // seleccionamos el elemento select
    const selectCard = document.querySelector('#select-card');
  
    // agregamos el evento change al elemento select
    selectCard.addEventListener('change', () => {
      // seleccionamos todas las cards
      const cards = document.querySelectorAll('.card');
  
      // si se seleccionó una opción válida
      if (selectCard.value) {
        // iteramos a través de todas las cards
        cards.forEach(card => {
          // si la card coincide con el título seleccionado, la mostramos
          if (card.querySelector('h3').textContent.includes(selectCard.value)) {
            card.style.display = 'block';
          } else {
            // de lo contrario, la ocultamos
            card.style.display = 'none';
          }
        });
      } else {
        // si se seleccionó la opción "Todas las cartas", mostramos todas las cards
        cards.forEach(card => {
          card.style.display = 'block';
        });
      }
    });


