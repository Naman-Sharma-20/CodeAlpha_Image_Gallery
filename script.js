document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    let currentIndex = 0;
    const images = Array.from(document.querySelectorAll(".Image img"));

    function showPopup(index) {
        currentIndex = index;
        popupImage.src = images[currentIndex].src;
        popup.style.display = "flex";
    }

    document.querySelectorAll(".Image img").forEach(function(img, index) {
        img.addEventListener("click", function() {
            showPopup(index);
        });
    });

    popup.addEventListener("click", function(e) {
        if (e.target !== popupImage && !e.target.classList.contains('popup-nav')) {
            closePopup();
        }
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        popupImage.src = images[currentIndex].src;
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        popupImage.src = images[currentIndex].src;
    });
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



function filterImages(category) {
    const images = document.querySelectorAll('.Gallery .Image');
    if (category === 'all') {
        images.forEach(image => {
            image.style.display = 'inline-block';
        });
    } else {
        images.forEach(image => {
            if (image.classList.contains(category)) {
                image.style.display = 'inline-block';
            } else {
                image.style.display = 'none';
            }
        });
    }
}




function searchImages() {
    const searchTerm = document.getElementById("searchTerm").value.toLowerCase();
    const images = document.querySelectorAll(".Image img");

    images.forEach(img => {
        const keywords = img.getAttribute("data-keyword").toLowerCase();
        if (keywords.includes(searchTerm)) {
            img.style.display = "inline";
        } else {
            img.style.display = "none";
        }
    });
}

// document.addEventListener("DOMContentLoaded", function() {
//     const imageFolder = 'img/'; // Folder where images are stored
//     const imageCount = 48; // Total number of images (adjust accordingly)
//     let currentIndex = 1;

//     const galleryImage = document.getElementById('galleryImage');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');

//     function updateImage() {
//         galleryImage.src = `${imageFolder}image${currentIndex}.jpg`;
//     }

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + imageCount) % imageCount;
//         if (currentIndex === 0) currentIndex = imageCount;
//         updateImage();
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex % imageCount) + 1;
//         updateImage();
//     });
// });