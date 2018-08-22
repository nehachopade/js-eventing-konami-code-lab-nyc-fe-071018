const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() 
{
    let tracker=0;
    const body= document.selector('body')
    body.addEventListener('keydown', (event) => 
    {
        if (event.which===code[tracker])
          {tracker++}
        else
          {console.log ("You've messed up")
          tracker=0;}
    })
}
init()