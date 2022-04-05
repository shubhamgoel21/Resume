var navmenu=document.querySelectorAll('.navmenu a');
// console.log(navmenu);
var interval;
for(var i=0;i<navmenu.length;i++)
{
  navmenu[i].addEventListener('click',function(event)
  {
    event.preventDefault();
    var sectionname=this.textContent.toLowerCase().trim();
    var section=document.getElementById(sectionname);
     

    interval=setInterval(function()
    {
      verticalscroll(section);
    },50);
    });

}


function verticalscroll( section)
{
  
    var sectioncord=section.getBoundingClientRect();
    if(sectioncord.top<=0)
    {
      clearInterval(interval);
      return;
    }
    window.scrollBy(0,50);

}

var skillcon=document.getElementById('skills');
var skillbar=document.querySelectorAll('.skill-value');

function initializebars()
{
  for(var i=0;i<skillbar.length;i++)
  {
    skillbar[i].style.width=0+'%';
  }
}

initializebars();


window.addEventListener('scroll',checkscroll);
var animation=false;
function checkscroll()
{
  var skillcord=skillcon.getBoundingClientRect();
  if(!animation && skillcord.top<=window.innerHeight)
  {
    animation=true;
    movescroll();
    
  }
  else if(skillcord.top>window.innerHeight){
    animation=false;
  }
}

// var interval;
function movescroll()
{
  console.log("move scroll");
 

  for(let i=0;i<skillbar.length;i++)
  {
    let curr=0;
    let width=skillbar[i].getAttribute('data-value');
    let interval=setInterval(function()
    {
      if(curr>=width)
      {
        clearInterval(interval);
        return;
      }
      skillbar[i].style.width=curr+'%';
      curr++;
    },5);
  }
}