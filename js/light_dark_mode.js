mode_handler();

function light_switch()
{
  if ( localStorage.getItem("mode_value") === "dark" )
  {
    localStorage.setItem("mode_value", "light");
  }
  else
  {
    localStorage.setItem("mode_value", "dark");
  }
  mode_handler();
}

function mode_handler()
{
  const alist = document.querySelectorAll("a");

  if ( localStorage.getItem("mode_value") === "dark" )
  {
    document.body.classList.add("dark");
    document.querySelector("h1").classList.add("dark");
    document.querySelector("h1").classList.remove("light");
    document.querySelector(".left").classList.add("dark");
    document.querySelector(".left").classList.remove("light");
    let i = 0;
    while ( i < alist.length )
    {
      alist[i].classList.add("dark");
      if ( alist[i].classList.contains("active") )
      {
        alist[i].classList.remove("dark")
      }
      i++;
    }
    document.querySelector(".mode_changer").value = "light";
  }
  else
  {
    document.body.classList.remove("dark");
    document.querySelector("h1").classList.add("light");
    document.querySelector("h1").classList.remove("dark");
    document.querySelector(".left").classList.add("light");
    document.querySelector(".left").classList.remove("dark");
    let i = 0;
    while ( i < alist.length )
    {
      alist[i].classList.remove("dark");
      i++;
    }
    document.querySelector(".mode_changer").value = "dark";
  }
}
