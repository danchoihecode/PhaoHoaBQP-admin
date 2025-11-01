export const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandle__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };

    document.body.addEventListener('click', el.__ClickOutsideHandle__);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandle__);
  },
};
