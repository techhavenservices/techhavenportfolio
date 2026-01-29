/* -------------------- SIDEBAR -------------------- */
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}

/* -------------------- TYPING EFFECT -------------------- */
const words = ["Websites","Apps","Graphics"];
let i=0,j=0,deleting=false;
function typeEffect() {
    const el = document.getElementById("typed");
    if(el){
        if(!deleting && i<=words[j].length) el.textContent=words[j].substring(0,i++);
        else if(deleting && i>=0) el.textContent=words[j].substring(0,i--);
        else { deleting=!deleting; if(!deleting) j=(j+1)%words.length; }
    }
    setTimeout(typeEffect, deleting?60:140);
}
typeEffect();

/* -------------------- PROJECT FILTER -------------------- */
document.addEventListener("DOMContentLoaded",()=>{
    const tabs=document.querySelectorAll(".filterBtn");
    const cards=document.querySelectorAll(".project-card");
    tabs.forEach(tab=>{
        tab.addEventListener("click",()=>{
            tabs.forEach(t=>t.classList.remove("active"));
            tab.classList.add("active");
            const filter=tab.dataset.filter;
            cards.forEach(card=>{ card.style.display = (filter==="all"||card.dataset.type===filter)?"block":"none"; });
        });
    });
});

/* -------------------- PROJECT MODAL -------------------- */
const projectData={
    project1:{title:"Corporate Web App",desc:"A soft pastel website project",url:"pages/project-1.html"},
    project2:{title:"Pastel Mobile App",desc:"Mobile app UI in pastel theme",url:"pages/project-2.html"},
    project3:{title:"Brand Identity Set",desc:"Soft pastel branding package",url:"pages/project-3.html"}
};
function openProjectModal(id){
    document.getElementById("modalTitle").textContent=projectData[id].title;
    document.getElementById("modalDesc").textContent=projectData[id].desc;
    document.getElementById("modalLink").href=projectData[id].url;
    document.getElementById("projectModal").classList.remove("hidden");
}
function closeProjectModal(){ document.getElementById("projectModal").classList.add("hidden"); }

/* -------------------- GSAP ANIMATIONS -------------------- */
document.addEventListener("DOMContentLoaded",()=>{
    gsap.from(".service-card",{opacity:0,y:50,duration:0.8,stagger:0.2,scrollTrigger:"#services"});
    gsap.from(".project-card",{opacity:0,y:50,duration:0.8,stagger:0.2,scrollTrigger:"#projects"});
});
