// track active --------------------------------------

document.querySelectorAll('.track__wrapper').forEach((btn) =>
  btn.querySelector('.track-list').addEventListener('click', () => {
    btn.querySelector('.track-list-0').classList.toggle('track-list-0--active');
    btn.querySelector('.track-list__progress-0').classList.toggle('track-list__progress-0--active');
    btn.querySelector('.track-list__progress-0').classList.toggle('track-list__progress-0--active-2');
  } )  
);
