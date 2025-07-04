export function turnCards() {
    document.querySelectorAll('.card').forEach(card => card.classList.add('turn'))
    setTimeout(() => {document.querySelectorAll('.card').forEach(card => card.classList.remove('turn')); console.log('turn removed')}, 1000)
}