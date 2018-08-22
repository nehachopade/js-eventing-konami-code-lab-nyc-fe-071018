const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() 
{
    let tracker=0;
    const body= document.querySelector('body')
    const paragraph=document.createElement('p')
    
    body.addEventListener('keydown', (event) => 
    {
        if(tracker===code.length-1){
          body.append('Great Job', paragraph)
          event.preventDefault()
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
init()