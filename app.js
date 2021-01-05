const glasses = Array.from(document.querySelectorAll('.glass'));
const litresRemaining = document.querySelector('#remaining')
const remained = document.querySelector('.remained')
const beakerFull = document.querySelector('.beaker-full')

updateBeaker()

glasses.forEach((glass1, index) => {
    let num = localStorage.getItem('noOfFullGlasses')
    while (num > index) {
        glass1.classList.add('full')
        index++
    }
    updateBeaker()
})

glasses.forEach((glass, index) => {
    glass.addEventListener('click', () => {

        if (glass.classList.contains('full')) {
            let currentGlassIndex = document.querySelectorAll('.glass.full').length - 1
            let clickedGlass = index + 1
            for (let i = clickedGlass; i <= currentGlassIndex; i++) {
                glasses[i].classList.remove('full')

            }
            glass.classList.remove('full')
            let num = document.querySelectorAll('.glass.full').length
            localStorage.setItem('noOfFullGlasses', num--)
        } else {
            let currentGlassIndex = index
            // add full class this far
            for (let i = 0; i <= currentGlassIndex; i++) {
                glasses[i].classList.add('full');
                let num = document.querySelectorAll('.glass.full').length
                localStorage.setItem('noOfFullGlasses', num)
            }
        }
        updateBeaker()
    })
})

function updateBeaker() {
    const fullGlasses = document.querySelectorAll('.glass.full').length
    const totalGlasses = glasses.length

    remained.style.visibility = 'visible'
    litresRemaining.textContent = `${fullGlasses / totalGlasses * 100}%`

    if (fullGlasses === 0) {
        beakerFull.style.visibility = 'hidden'
        beakerFull.style.height = '0'
    } else {
        beakerFull.style.visibility = 'visible'
        beakerFull.style.height = `${fullGlasses / totalGlasses * 100}%`
    }
}
