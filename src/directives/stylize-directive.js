
const katexDirective = {
  name: 'stylize',
  directive: (el, binding) => {
    const begin = '[[';
    const end = ']]';

    let styles = binding.value;
    if (!Array.isArray(binding.value)) {
      styles = [binding.value];
    }
    let text = el.innerHTML;
    let i = 0;
    while (text.includes(begin) && text.includes(end)) {
      let style = styles[i++];
      if (!style) {
        i = 0;
        style = styles[i];
      }
      text = text
          .replace(begin, `<span class="${style}">`)
          .replace(end, '</span>');
    }
    el.innerHTML = text;
  },
};
export default katexDirective;
