// Fetch the JSON file and loop through the data to generate the executive team cards
document.addEventListener("DOMContentLoaded", function () {
  fetch("resources/json/executives.json")
    .then((response) => response.json())
    .then((data) => {
      const executivesContainer = document.getElementById(
        "executives-container"
      );
      data.team_members.forEach((executive) => {
        const card = `
                    <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <div class="executive-image mb-4 mx-auto">
                            <img src="${executive.image}" alt="${executive.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="executive-card-content">
                        <h3 class="text-xl font-semibold mb-2">${executive.name}</h3>
                        <p class="text-gray-600 mb-2">${executive.role}</p>
                        <div class="flex justify-center">
                            <a href="${executive.social_media.github}" class="text-gray-500 hover:text-gray-700 mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 text-primary dark:text-primary-400">
                                    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="${executive.social_media.twitter}" class="text-gray-500 hover:text-gray-700 mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 text-primary dark:text-primary-400">
                                    <path fill="currentColor" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="${executive.social_media.linkedin}" class="text-gray-500 hover:text-gray-700 mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-3.5 w-3.5 text-primary dark:text-primary-400">
                                    <path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                `;
        executivesContainer.innerHTML += card;
      });
    })
    .catch((error) => console.error("Error fetching executives data:", error));
});

// Fetch events according to the JSON file and loop through the data to generate the event cards
document.addEventListener("DOMContentLoaded", function () {
  fetch("resources/json/events.json")
    .then((response) => response.json())
    .then((data) => {
      const eventCardsContainer = document.getElementById(
        "event-cards-container"
      );

      // Sort events by start date in descending order
      data.events.sort(
        (a, b) => new Date(b.start_date) - new Date(a.start_date)
      );

      // Iterate over each event and create event cards
      data.events.forEach((event) => {
        const eventCard = document.createElement("a");
        eventCard.classList.add(
          "relative",
          "bg-gray-100",
          "p-6",
          "rounded-lg",
          "shadow-lg",
          "overflow-hidden",
          "no-underline",
          "hover:no-underline",
          "hover:bg-gray-50",
          "hover:shadow-xl"
        );

        eventCard.href = event.link

        eventCard.innerHTML = `
                    <div class="absolute-badge ${
                      new Date() > new Date(event.end_date)
                        ? "bg-red-500"
                        : "bg-green-500"
                    } text-white">
                        ${
                          new Date() > new Date(event.end_date)
                            ? "Completed"
                            : "Reg. Open"
                        }
                    </div>
                    <img src="${event.banner}" alt="${
          event.title
        }" class="w-full mb-4 rounded-md">
                    <h3 class="text-xl font-semibold mb-2">${event.title}</h3>
                    <div class="text-gray-600 mb-4 flex items-center">
                    <img src="resources/img/icons/date-and-time-icon.svg" class="h-4 w-4 mr-1 fill-current text-gray-600" alt="Date Icon">
                    ${event.start_date} - ${event.end_date}
                </div>
                <div class="text-gray-600 mb-4 flex items-center">
                <img src="resources/img/icons/pin-location-icon.svg" class="h-4 w-4 mr-1 fill-current text-gray-600" alt="Location Icon">
                    ${event.location}
                </div>
                    <p class="text-gray-600 mb-4">${event.description}</p>
                    <a href="#" class="primary-text font-bold">Know More</a>
                `;

        eventCardsContainer.appendChild(eventCard);
      });
    })
    .catch((error) => console.error("Error fetching events data:", error));
});

// Fetch the JSON file and loop through the data to generate the showcase
document.addEventListener("DOMContentLoaded", function () {
  fetch("resources/json/events.json")
    .then((response) => response.json())
    .then((data) => {
      // Filter events that have registration open and end date is in the future
      const openEvents = data.events.filter((event) => {
        return new Date() < new Date(event.end_date);
      });

      // Sort filtered events by start date in ascending order
      openEvents.sort(
        (a, b) => new Date(a.start_date) - new Date(b.start_date)
      );

      if (openEvents.length > 0) {
        const nearestEvent = openEvents[0];
        const showcaseSection = document.querySelector("#showcase-section");

        showcaseSection.innerHTML = `
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
        <div class="w-full lg:w-7/12 lg:order-2">
            <div class="flex h-full items-center rounded-lg primary-bg p-8 lg:p-12 text-center text-white lg:text-left">
                <div class="lg:pl-12 lg:pr-6">
                    <h2 class="mb-6 text-3xl font-bold">${nearestEvent.title}</h2>
                    <div class="mb-4 text-gray-600 flex items-center">
                        <img src="resources/img/icons/date-and-time-icon.svg" class="h-4 w-4 mr-1 fill-current" alt="Date Icon">
                        <span>${nearestEvent.start_date} - ${nearestEvent.end_date}</span>
                    </div>
                    <div class="mb-4 text-gray-600 flex items-center">
                        <img src="resources/img/icons/pin-location-icon.svg" class="h-4 w-4 mr-1 fill-current" alt="Location Icon">
                        <span>${nearestEvent.location}</span>
                    </div>
                    <p class="mb-4 text-gray-600">${nearestEvent.description}</p>
                    <a href="${nearestEvent.registration_url}" class="inline-block rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">Register now</a>
                </div>
            </div>
        </div>
        <div class="mb-12 w-full lg:mb-0 lg:w-5/12 lg:order-1">
            <div class="flex lg:py-12 justify-center lg:justify-end">
                <img src="${nearestEvent.banner}" class="w-full lg:w-auto max-w-full rounded-lg shadow-lg dark:shadow-black/20" alt="${nearestEvent.title} banner">
            </div>
        </div>
    </div>
`;
      } else {
        // If no registration open events, hide showcase section
        document.querySelector("#showcase-section").classList.add("hidden");
      }
    })
    .catch((error) => console.error("Error fetching events data:", error));
});

//js code for return to top button
const returnTopBtn = document.getElementById('returnTopBtn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 1340) { 
                returnTopBtn.style.display = 'block';
            } else {
                returnTopBtn.style.display = 'none';
            }
        });

        returnTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        returnTopBtn.addEventListener('mouseover', () => {
          returnTopBtn.style.backgroundColor = 'rgba(226, 226, 16, 0.984)';
          returnTopBtn.style.color = 'black';
        });

       returnTopBtn.addEventListener('mouseout', () => {
          returnTopBtn.style.backgroundColor = '#03466c';
          returnTopBtn.style.color = '#fff'; 
        });