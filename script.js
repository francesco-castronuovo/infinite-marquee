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
      
      component.style.animationDuration = `${duration}s`
      component.style.webkitAnimationDuration = `${duration}s` 
    }
  }
  
  Webflow.destroy()
  if(Webflow.require('ix2') !== undefined)
    Webflow.require('ix2').init()
  if(Webflow.require('lottie') !== undefined)
    Webflow.require('lottie').init()
});
