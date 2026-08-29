const body=document.body, toggle=document.getElementById("themeToggle"), menu=document.getElementById("menuToggle"), nav=document.getElementById("nav");
const saved=localStorage.getItem("tibet-theme"); if(saved==="dark"){body.classList.add("dark");toggle.innerHTML="<span>☀</span>"} else toggle.innerHTML="<span>☾</span>";
toggle.addEventListener("click",()=>{body.classList.toggle("dark");const dark=body.classList.contains("dark");localStorage.setItem("tibet-theme",dark?"dark":"light");toggle.innerHTML=dark?"<span>☀</span>":"<span>☾</span>"});
menu.addEventListener("click",()=>nav.classList.toggle("open")); nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const header=document.querySelector(".site-header"); window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>30));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
