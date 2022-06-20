


const inputname = document.querySelector(".inputname");
const output = document.querySelector(".output");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
})

inputname.addEventListener("change", (e)=>{
    const value = e.target.value;
    const greeting = (value[0] === 'j' || value[0] === 'J') ? "Hello" : "Goodbye" ;
    output.innerHTML = `
    <p>${greeting} ${value}</p>
    `;
})



