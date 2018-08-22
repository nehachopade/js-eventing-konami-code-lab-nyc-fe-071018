const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker=0
function onKeyDownHandler() 
{
    let tracker=0;
    const body= document.querySelector('body')
    const paragraph=document.createElement('p')
    
    body.addEventListener('keydown', onKeyDownHandler => 
    {
        if(tracker===code.length-1){
          
          event.preventDefault()
          body.append('Great Job', paragraph)
          return
        }
        if (event.which===code[tracker])
          { console.log ("Success")
            if(tracker===code.length-1)
            { alert('You found it')}
            tracker++
          }
        else
          { console.log ("You've messed up")
            tracker=0;}
    })
}
function init ()
{
  
}

init()