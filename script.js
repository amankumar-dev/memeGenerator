async function memeGenerate(count){
    try{
        const url=`https://meme-api.com/gimme/wholesomememes/${count}`;
        let response=await fetch(url);
        let data=await response.json();
        const result=data.memes;
        result.forEach((e) => {
            console.log(e.url);
            const imageJs=document.querySelector('.forjs');
            imageJs.src=e.url;
        }); 
    }
    catch(err){
        alert(err);
    }
    
}
const container=document.querySelector('.container');
const btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    let count=1;
    memeGenerate(count);
    count++;
});
memeGenerate(1)