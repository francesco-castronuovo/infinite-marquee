var Webflow = Webflow || [];
Webflow.push(function () {
  const components = document.querySelectorAll('[fc-marquee=component]')

  if(components)
  {
    for(const component of components)
    {
      const wrapperOrigin = component.querySelector('[fc-marquee=wrapper]')
      const wrapperClone = wrapperOrigin.cloneNode(true);

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
});
