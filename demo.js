photo = document.getElementById('a')
console.log(photo)
b1 = document.getElementById('b')
console.log(b1)
b2 = document.getElementById('c')
console.log(b2)

function hii(){
    photo.src="happy.jpeg"
    setTimeout(()=>{
        photo.src = "normal.jpeg"

    },2000)
}

function bye(){
    photo.src="sad.jpeg"
    setTimeout(()=>{
        
        photo.src = "normal.jpeg"
    },3000)
}


