import {createLocalVue, mount} from '@vue/test-utils';
import VueStylize from '@/plugin.js';

const vueInNodeEnv = () => {
  const localVue = createLocalVue();
  localVue.use(VueStylize);
  return localVue;
};

describe('plugin.js', () => {
  it('registers v-stylize', () => {
    const localVue = vueInNodeEnv();
    const wrapper = mount(
        {
          template: '<div v-stylize="styles"></div>',
          props: ['styles'],
        },
        {
          localVue,
          propsData: {styles: 'hello world'},
        },
    );
    expect(wrapper.exists()).toBe(true);
  });
});
