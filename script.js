const edit = document.querySelector('#edit-btn');
const modal = document.querySelector('#modal');
const memberNumInput = document.querySelector('#member-num-field');
const submit = document.querySelector('#submit-btn');
let memberNum = "XXXXXX";

const h1 = document.querySelector('h1');
const car = document.getElementById('car');
const spec = document.getElementById('spec');
const stripe1 = document.getElementById('stripe1');
const stripe2 = document.getElementById('stripe2');

let toggleClass = (slctr, cls) => {
    slctr.classList.toggle(cls)
}

edit.addEventListener('click', () => {
    toggleClass(modal, 'hidden');
    [h1, car, spec, stripe1, stripe2].forEach((i) => toggleClass(i, "blur"))
})

submit.addEventListener('click', () => {
    toggleClass(modal, 'hidden');
    [h1, car, spec, stripe1, stripe2].forEach((i) => toggleClass(i, "blur"))
    memberNum = memberNumInput.value
    car.innerText = `car_${memberNum}.tga`
    spec.innerText = `car_spec_${memberNum}.tga`
    localStorage.setItem("memberNumber", memberNum);
})


car.addEventListener('click', async function() {
    try {
        await navigator.clipboard.writeText(`car_${memberNum}.tga`);
        
        car.innerText = "Copied!";
        
        setTimeout(() => {
            car.innerText = `car_${memberNum}.tga`;
        }, 1300);

    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});

spec.addEventListener('click', async function() {
    try {
        await navigator.clipboard.writeText(`car_spec_${memberNum}.tga`);
        
        spec.innerText = "Copied!";
        
        setTimeout(() => {
            spec.innerText = `car_spec_${memberNum}.tga`;
        }, 1300);

    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});

function loadPrevMemberNum () {
    memberNum = localStorage.getItem("memberNumber");
    if (memberNum !== "XXXXXX") {
        car.innerText = `car_${memberNum}.tga`
        spec.innerText = `car_spec_${memberNum}.tga`
    }
}

loadPrevMemberNum();


