export function createMarkupCategoryList(arr) {
  return arr
    .map(item => {
      const categoryName = typeof item === 'string' ? item : item.name;
      const categoryId = item._id || '';

      return `
        <li class="pets-category-item">
          <button 
            class="pets-category-btn ${categoryName === 'Всі' ? 'pets-category-btn-active' : ''}" 
            type="button"
            data-category="${categoryName}"
            data-id="${categoryId}"
          >
            ${categoryName}
          </button>
        </li>
      `;
    })
    .join('');
      
}

export function createMarkupPetsList(arr) {

  
  return arr
    .map(
      ({
        image,
        species,
        name,
        categories,
        age,
        gender,
        shortDescription,
        _id,
      }) => {
        const categoriesMarkup = categories
          .map(
            category => `<li class="pet-card-category">${category.name}</li>`
          )
          .join('');

        return `<li class="pet-card" >
            <img class="pet-card-img" src="${image}" alt="${species}" />
            <div class="pet-description">
              <p class="pet-card-type">${species}</p>
              <h3 class="pet-card-name">${name}</h3>
              <ul class="pet-card-category-list">
                ${categoriesMarkup}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${age}</li>
                <li class="pet-card-gender">${gender}</li>
              </ul>
              <p class="pet-card-descr">
                ${shortDescription}
              </p>
            </div>
            <button class="pet-card-btn" data-id="${_id}">Дізнатись більше</button>
          </li>`;
      }
    )
    .join('');
}

export function createMarkupAnimalDetails(pet) {
  const {
    image,
    species,
    name,
    age,
    gender,
    description,
    healthStatus,
    behavior,
  } = pet;
  return `    <button class="modal-details-btn" type="button">
        <svg width="14" height="14" viewBox="0 0 14 14">
    <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="2"/>
    <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="2"/>
  </svg>
    </button>

  <div class="pet-details-content">
  <img class="pet-details-img" src="${image}" alt="${species}" />

  <div class="pet-details-info">
    <p class="pet-details-type">${species}</p>
    <h3 class="pet-details-name">${name}</h3>

    <ul class="pet-details-age-gender">
      <li class="pet-details-age">${age}</li>
      <li class="pet-details-gender">${gender}</li>
    </ul>

    <h4 class="pet-details-heading">Опис:</h4>
    <p class="pet-details-text">${description}</p>

    <h4 class="pet-details-heading">Здоров’я:</h4>
    <p class="pet-details-text">${healthStatus}</p>

    <h4 class="pet-details-heading">Поведінка:</h4>
    <p class="pet-details-text">${behavior}</p>
  </div>
</div>

            <button class="pet-details-btn">Взяти додому</button>`;
}
