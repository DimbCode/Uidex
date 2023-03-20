
// Certificates Variables

const popUpOpenSections = document.querySelectorAll(".spoiler__open-section");

// Functions

function popUpToggle(element, hiddenClass) {
    element.classList.toggle(hiddenClass);
}

// Events

popUpOpenSections.forEach(item => {
    item.addEventListener("click", () => {
        const hiddenSection = item.nextElementSibling;

        popUpToggle(hiddenSection, "hidden");
    }); 
});