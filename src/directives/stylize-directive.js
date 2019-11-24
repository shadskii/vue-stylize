
const katexDirective = {
  name: 'stylize',
  directive: (el, binding) => {
    const escapeChar = '||';

    let colors = binding.value;
    if (!Array.isArray(binding.value)) {
      if (binding.value) {
        colors = [binding.value];
      } else {
        throw new TypeError('v-stylize requires an argument class');
      }
    }
    let text = el.innerHTML;
    let i = 0;
    while (text.includes(escapeChar)) {
      let color = colors[i++];
      if (!color) {
        i = 0;
        color = colors[i];
      }
      text = text
          .replace(escapeChar, `<span class="${color}">`)
          .replace(escapeChar, '</span>');
    }
    el.innerHTML = text;
  },
};
export default katexDirective;
