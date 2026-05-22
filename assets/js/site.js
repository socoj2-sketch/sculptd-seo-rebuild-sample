const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('is-in')
  })
},{threshold:.15})
document.querySelectorAll('[data-fade]').forEach(el=>observer.observe(el))
