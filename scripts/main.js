let h1 = document.querySelector("h1");
h1.textContent="Hello world!";
document.title = 'Welcome'

let img = document.querySelector('img');
img.onclick = () => {
    let src = img.getAttribute('src');
    if (src === 'images/ChinaRed.jpg') {
        img.setAttribute('src','images/NV-DC.jpg')
    } else {
        img.setAttribute('src','images/ChinaRed.jpg')
    }
}



function setUserName() {
    let name = window.prompt('Input your name:');
    if (!name) {
        setUserName()
    } else {
        localStorage.setItem('name', name);
        h1.textContent = 'Welcome ' + name
    }

}

if (localStorage.getItem('name')) {
    h1.textContent = 'Welcome, ' + localStorage.getItem('name')
} else {
    setUserName()
}

let btn = document.querySelector('button')

btn.onclick = setUserName

