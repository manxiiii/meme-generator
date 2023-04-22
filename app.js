document.addEventListener('DOMContentLoaded',function(){
  let form = document.querySelector('form');
  let url = document.querySelector('input[name="imgURL"]');
  let txtTop = document.querySelector('input[name="txtTop"]');
  let txtBottom = document.querySelector('input[name="txtBottom"]');
  let results = document.querySelector('section');

  let inputList = document.getElementById('input');
  inputList.addEventListener("keypress", function(e){
    if(e.key=='Enter' && e.target.tagName=='INPUT') {
      e.preventDefault();
      document.getElementById("submitButton").click();
    }
  });

  form.addEventListener("submit",function(e){
    e.preventDefault();
    if (!url.value || !txtTop.value || !txtBottom.value) {
      alert('Please fill out all information required.');
    } else {
      let newMeme = makeMeme(url.value, txtTop.value, txtBottom.value);
      results.appendChild(newMeme);
      e.target.reset();
    }

  });

  function makeMeme(url, txtTop, txtBottom){
    let meme = document.createElement('div');
    meme.style.position='relative';
    meme.classList.add('meme');
    meme.addEventListener('mouseenter',function(e){
      if (!meme.querySelector('.deletebutton')){
        let deleteButton = document.createElement('button');
        deleteButton.innerText='delete';
        deleteButton.addEventListener('click',function(e){
          e.target.parentElement.remove();
        });
        deleteButton.classList.add('deletebutton');
        deleteButton.style.position='absolute';
        deleteButton.style.top='0';
        deleteButton.style.right='0';
        meme.appendChild(deleteButton);
      }
    });

    meme.addEventListener('mouseleave',function(e){
      if (e.target.parentElement.querySelector('.deletebutton')){
        let deleteButton = e.target.parentElement.querySelector('.deletebutton');
        deleteButton.remove();
      }
    });

    let image = document.createElement('img');
    image.setAttribute("src", url);
    image.style['max-width']='auto';
    image.classList.add('memeimage');

    let textTop = document.createElement('div');
    textTop.innerText=txtTop;
    textTop.style.position='absolute';
    textTop.style.top='0';
    textTop.style.left='50%';
    textTop.classList.add('texttop');

    let textBottom = document.createElement('div');
    textBottom.innerText=txtBottom;
    textBottom.style.position='absolute';
    textBottom.style.bottom='0';
    textBottom.style.left='50%';
    textBottom.classList.add('textbottom');

    meme.appendChild(image);
    meme.appendChild(textTop);
    meme.appendChild(textBottom);
    return meme;
  }
})




