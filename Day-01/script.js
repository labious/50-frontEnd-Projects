//put all the panels in a nodeList
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click',(e) => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}