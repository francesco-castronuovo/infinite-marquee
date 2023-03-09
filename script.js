var Webflow = Webflow || [];
Webflow.push(function () {
  const components = document.querySelectorAll('[fc-marquee=component]')

  if(components)
  {
    for(const component of components)
    {
      const outerWrapper = document.createElement('div')
      const wrapperOrigin = component.querySelector('[fc-marquee=wrapper]')
      const wrapperClone = wrapperOrigin.cloneNode(true)
      
      component.appendChild(outerWrapper)
      outerWrapper.appendChild(wrapperOrigin)

      wrapperOrigin.after(wrapperClone)

      let duration = component.getAttribute('fc-marquee-duration') === null ? '120' : component.getAttribute('fc-marquee-duration')
      let wrappers = component.querySelectorAll('[fc-marquee=wrapper]')
      
      outerWrapper.style.animationDuration = `${duration}s`
      outerWrapper.style.webkitAnimationDuration = `${duration}s` 
    }
  }
  
  Webflow.destroy()
  Webflow.ready()
  if(Webflow.require('ix2') !== undefined)
    Webflow.require('ix2').init()
  if(Webflow.require('lottie') !== undefined)
    Webflow.require('lottie').init()
});
