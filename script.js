const components = document.querySelectorAll('[fc-marquee=component]')

if(components)
{
  for(const component of components)
  {
    const wrapperOrigin = document.querySelector('[fc-marquee=wrapper]')
    const wrapperClone = wrapper.cloneNode(true);

    wrapperOrigin.after(wrapperClone)

    let duration = component.getAttribute('fc-marquee-duration')
    let wrappers = component.querySelectorAll('[fc-marquee=wrapper]')
    
    for(const wrapper of wrappers)
    {
      wrapper.style.animationDuration = `${duration}s`
      wrapper.style.webkitAnimationDuration = `${duration}s` 
    }
  }
}
