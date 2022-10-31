import './less/index.less'

// Your code goes here!
let classNav = document.querySelectorAll('nav a')

for (let nav of classNav){
    nav.addEventListener('mouseenter', evt =>
        nav.style.backgroundColor = 'red'
);   nav.addEventListener('mouseenter', evt =>
        nav.style.color = 'white'
);   nav.addEventListener('mouseenter', evt =>
        nav.style.fontSize = '3em'
)};



//Remove color change of nav hover

for (let nav of classNav){
    nav.addEventListener('mouseleave', evt =>
        nav.style.backgroundColor = 'initial'
);   nav.addEventListener('mouseleave', evt =>
        nav.style.color = 'initial',
);  nav.addEventListener('mouseleave', evt =>
        nav.style.fontSize = 'initial'
)};


window.addEventListener('keydown', evt => {
    if(evt.key == 'Enter'){
        document.body.innerHTML.textalign = 
        document.body.innerHTML = '<h1> You Broke The Internet </h1>'
       
    }
})

const destinations = document.querySelectorAll('.destination')

for(let destination of destinations){
    destination.addEventListener('mouseover', evt =>
    destination.style.fontWeight = 'bold'
    );
    destination.addEventListener('mouseleave', evt =>
    destination.style.fontWeight = 'initial')
}

