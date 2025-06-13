const car = document.getElementById('car');
const spec = document.getElementById('spec');

car.addEventListener('click', async function() {
    try {
        await navigator.clipboard.writeText('car_382044.tga');
        
        car.innerText = "Copied!";
        
        setTimeout(() => {
            car.innerText = "car_382044.tga";
        }, 1300);

    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});

spec.addEventListener('click', async function() {
    try {
        await navigator.clipboard.writeText('car_spec_382044.tga');
        
        spec.innerText = "Copied!";

        
        setTimeout(() => {
            spec.innerText = "car_spec_382044.tga";
        }, 1300);

    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});
