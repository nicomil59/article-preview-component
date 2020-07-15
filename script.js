const metaShareContainer = document.querySelector('.component__meta-share-container');
const shareBox = document.querySelector('.component__sharebox');

metaShareContainer.addEventListener('mouseover', (e)=> {
    shareBox.classList.add('showsharebox');
    shareBox.addEventListener('mouseleave', () => {
        shareBox.classList.remove('showsharebox');
    })
});






