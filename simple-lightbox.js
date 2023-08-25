document.addEventListener("DOMContentLoaded", function () {

    var lightboxElements = document.querySelectorAll("[data-simple-lightbox]");

    lightboxElements.forEach(function (element) {
      element.addEventListener("click", function () {
           
        event.preventDefault();
        var lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        document.body.appendChild(lightbox);
        
        var img = document.createElement("img");
        img.src = element.href;
        img.alt = element.querySelector("img").alt;
        lightbox.appendChild(img);
        
        var closeButton = document.createElement("button");
        closeButton.classList.add("lightbox__close");
        closeButton.innerHTML = "X";
        lightbox.appendChild(closeButton);
        
        closeButton.addEventListener("click", function () {
          lightbox.remove();
        }
        );

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });

        var titlePhoto = document.createElement("div");
        titlePhoto.classList.add("title-photo");
        lightbox.appendChild(titlePhoto);
        var titlePhotoText = document.createElement("p");
        titlePhotoText.innerHTML = img.alt;
        titlePhoto.appendChild(titlePhotoText);
      });
    });
  });