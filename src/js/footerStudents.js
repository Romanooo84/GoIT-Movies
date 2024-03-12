// Otwarcie okna modalnego
document.getElementById('openModal').addEventListener('click', function () {
  document.getElementById('studentModal').style.display = 'flex'; // zmiana na flex aby centrować modal
  showStudent(currentIndex); // Pokaż zawartość modalną dla pierwszego uczestnika
});

// Inicjalizacja indeksu
let currentIndex = 0;

// Funkcja pokazująca kartę studenta
function showStudent(index) {
  const cards = document.querySelectorAll('.student-card');
  cards.forEach(card => (card.style.display = 'none'));
  cards[index].style.display = 'block';
}

// Przypisanie obsługi zdarzeń dla przycisków nawigacyjnych i zamknięcia wewnątrz modala
function assignNavigationHandlers() {
  document.addEventListener('click', function (event) {
    if (event.target.matches('.modal-prev')) {
      currentIndex =
        currentIndex - 1 < 0
          ? document.querySelectorAll('.student-card').length - 1
          : currentIndex - 1;
      showStudent(currentIndex);
    } else if (event.target.matches('.modal-next')) {
      currentIndex = (currentIndex + 1) % document.querySelectorAll('.student-card').length;
      showStudent(currentIndex);
    } else if (
      event.target.matches('.close') ||
      event.target === document.getElementById('studentModal')
    ) {
      document.getElementById('studentModal').style.display = 'none';
    }
  });
}

// Dodanie obsługi zamknięcia modala za pomocą klawisza Esc
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.getElementById('studentModal').style.display = 'none';
  }
});

// Funkcja inicjalizująca
function initModal() {
  showStudent(currentIndex); // Pokaż bieżącą kartę
  assignNavigationHandlers(); // Przypisz obsługę zdarzeń
}

initModal();
