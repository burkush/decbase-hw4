import data from '../../data/services.json' assert { type: 'json' };

const tabs = document.querySelector('.services__tabs');
tabs.addEventListener('click', handleTabClick);

const servicesContainer = document.querySelector('.services__cards');

const services = filterServices('all');
updateTabs(services);

function handleTabClick(e) {
  if (e.target.classList.contains('services__tab')) {
    const tabLinks = document.querySelectorAll('.services__tab');
    tabLinks.forEach((tab) => {
      tab.className = tab.className.replace(' active', '');
    });
    e.target.className += ' active';

    const type = e.target.getAttribute('data-type');
    const services = filterServices(type);
    updateTabs(services);
  }
}

function updateTabs(services) {
  servicesContainer.innerHTML = '';

  services.forEach((item) => {
    const isArchitecture = item.type === 'architecture';
    const imgSrc =
      item.type === 'interior'
        ? 'interior-icon.svg'
        : item.type === 'planning'
        ? 'planning-icon.svg'
        : 'architecture-icon.svg';

    const template = `
      <div class="services__card ${isArchitecture ? 'architecture' : null}">
        <img src="./assets/img/icons/${imgSrc}" alt="${item.type} icon">
        <div class="services__card-content">
          <h2 class="services__card-title" style="${
            isArchitecture ? 'color: #fff;' : null
          }">${item.title}</h2>
          <p class="services__card-text" style="${
            isArchitecture ? 'color: #fff;' : null
          }">${item.text}</p>
        </div>
      </div>
    `;

    servicesContainer.innerHTML += template;
  });
}

function filterServices(type) {
  if (type === 'all') {
    const interiorService = data.find((item) => item.type === 'interior');
    const architectureService = data.find(
      (item) => item.type === 'architecture'
    );
    const planningService = data.find((item) => item.type === 'planning');

    return [interiorService, architectureService, planningService];
  }

  return data.filter((item) => item.type === type);
}
