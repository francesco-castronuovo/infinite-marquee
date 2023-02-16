const wrapper = document.querySelector('[fc-marquee=wrapper]')
const wrapperClone = wrapper.cloneNode(true);

// Update the ID and add a class
//clone.id = 'elem2';
//clone.classList.add('text-large');

wrapperClone.after(wrapper)

let duration = document.querySelector('[fc-marquee-duration]').getAttribute('fc-marquee-duration')
let wrappers = document.querySelectorAll('[fc-marquee=wrapper]')

for(const wrapper of wrappers)
{
  wrapper.style.animationDuration = `${duration}s`
  wrapper.style.webkitAnimationDuration = `${duration}s`
}
