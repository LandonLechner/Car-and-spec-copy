const edit = document.querySelector('#edit-btn');
const modal = document.querySelector('#modal');
const memberNumInput = document.querySelector('#member-num-field');
const submit = document.querySelector('#submit-btn');
let memberNum = "XXXXXX";

const car = document.getElementById('car');
const spec = document.getElementById('spec');

edit.addEventListener('click', () =>
    modal.classList.toggle('hidden')
)

submit.addEventListener('click', () => {
    modal.classList.toggle('hidden')
    memberNum = Number(memberNumInput.value)
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
    if (memberNum !== "XXXXXX") {
        memberNum = localStorage.getItem("memberNumber");
        car.innerText = `car_${memberNum}.tga`
        spec.innerText = `car_spec_${memberNum}.tga`
    }
}

loadPrevMemberNum();


