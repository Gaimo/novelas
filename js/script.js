const container = document.querySelector('.container')

fetch('./novels.json')
  .then(response => response.json())
  .then(novels => {
    novels.forEach((novel) => {
      const novelElement = document.createElement('div');
      novelElement.classList.add('novel');
      novelElement.style.backgroundImage = `url(${novel.image})`;

      const titleBackgroundElement = document.createElement('div');
      titleBackgroundElement.classList.add('novel__title_background');

      const titleElement = document.createElement('h2');
      titleElement.classList.add('novel__title');
      titleElement.textContent = novel.name;

      const yearElement = document.createElement('h2');
      yearElement.classList.add('novel__year');
      yearElement.textContent = `(${novel.year})`;

      titleBackgroundElement.appendChild(titleElement);
      titleBackgroundElement.appendChild(yearElement);
      novelElement.appendChild(titleBackgroundElement);

      container.appendChild(novelElement);

      container.addEventListener('click', (event) => {
        const novelElement = event.target.closest('.novel');
        console.log(novelElement)
        if (novelElement) {
          const novelName = novelElement.querySelector('.novel__title').textContent;
          const novelYear = novelElement.querySelector('.novel__year').textContent.slice(1, -1);
          const novelCDN = novels.find((novel) => novel.name === novelName && novel.year.toString() === novelYear).CDN;
          const novelEpisodes = novels.find((novel) => novel.name === novelName && novel.year.toString() === novelYear).episodes;
          const queryString = `?cdn=${encodeURIComponent(novelCDN)}&numEpisodes=${novelEpisodes}`;
          window.location.href = `./episodes/episodes.html${queryString}`;
        }
      });
    });
  });
