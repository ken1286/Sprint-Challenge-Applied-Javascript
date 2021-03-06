class Carousel {
constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector(".left-button");
        this.rightButton = this.element.querySelector(".right-button");
        // console.log(this.element);
        // console.log(this.rightButton);
        // console.log(this.leftButton);
        this.images = this.element.querySelectorAll("img");
        this.currentIndex = 0;
        this.currentImage = this.images[this.currentIndex];

        console.log(this.currentImage);

        this.rightButton.addEventListener("click", () => this.buttonClick("right") );
        this.leftButton.addEventListener("click", () => this.buttonClick("left"));
    }

    buttonClick(direction) {
        this.images.forEach( image => image.style.display = "none");

        if(direction === "right") {
            this.currentIndex += 1;
            this.currentImage.style.display = "flex";
        } else if(direction === "left") {
            this.currentIndex -= 1;
            this.currentImage.style.display = "flex";
        }
    }
}

// let carousel = document.querySelector();
let carousels = document.querySelectorAll(".carousel");
carousels.forEach( carousel => new Carousel(carousel));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/