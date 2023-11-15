<script>
        // Optional: Add script for slide effect
        document.addEventListener('DOMContentLoaded', function () {
            var carousel = new bootstrap.Carousel(document.getElementById('imageSlider'), {
                interval: 3000, 
            });

            carousel.pause();

            setTimeout(function () {
                document.getElementById('imageSlider').classList.add('carousel-slide');
            }, 500);
        });
    </script>
