document.addEventListener("DOMContentLoaded", function () {
    // Pobieranie wszystkich elementów z atrybutem data-simple-lightbox
    var lightboxElements = document.querySelectorAll("[data-simple-lightbox]");

    // Dodawanie obsługi kliknięcia do każdego elementu
    lightboxElements.forEach(function (element) {
      element.addEventListener("click", function () {
        // stworz div w którym będzie wyświetlone zdjęcie z linku i dodaj go do body, nie przechodź do linku    
        event.preventDefault();
        var lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        document.body.appendChild(lightbox);
        // dodaj do diva zdjęcie z linku oraz atrybut alt z zdjęcia z linku
        var img = document.createElement("img");
        img.src = element.href;
        img.alt = element.querySelector("img").alt;
        lightbox.appendChild(img);
        // dodaj do diva przycisk do zamykania
        var closeButton = document.createElement("button");
        closeButton.classList.add("lightbox__close");
        closeButton.innerHTML = "X";
        lightbox.appendChild(closeButton);
        // dodaj obsługę zdarzenia kliknięcia w przycisk do zamykania
        closeButton.addEventListener("click", function () {
          lightbox.remove();
        }
        );
        // jeśli klikne gdziekolwiek indziej niż w klase lightbox to usuń diva
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });
        // dodaj div o nazwie title-photo w którym będzie atrybut <p> z tekstem z atrybutu alt zdjęcia
        var titlePhoto = document.createElement("div");
        titlePhoto.classList.add("title-photo");
        lightbox.appendChild(titlePhoto);
        var titlePhotoText = document.createElement("p");
        titlePhotoText.innerHTML = img.alt;
        titlePhoto.appendChild(titlePhotoText);
      });
    });
  });