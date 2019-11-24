import {createLocalVue, mount} from '@vue/test-utils';
import stylizeDirective from '@/directives/stylize-directive';

const localVue = createLocalVue();
localVue.directive(stylizeDirective.name, stylizeDirective.directive);


describe('Directive v-stylize', () => {
  it('applies one style', () => {
    const component = {
      template: `
      <div v-stylize="'hello world'">
        Lets apply styles to [[this]]
      </div>
      `,
    };

    const wrapper = mount(component, {
      localVue,
    });
    const styledElement = wrapper.find('span');

    expect(styledElement.classes()).toContain('hello');
    expect(styledElement.classes()).toContain('world');
    expect(styledElement.text()).toEqual('this');
  });

  it('applies one style multiple times', () => {
    const component = {
      template: `
      <div v-stylize="'hello world'">
        Lets apply styles to [[this]] and maybe even [[that]]
      </div>
      `,
    };

    const wrapper = mount(component, {
      localVue,
    });
    const styledElements = wrapper.findAll('span');

    const first = styledElements.at(0);
    const second = styledElements.at(1);

    expect(first.classes()).toContain('hello');
    expect(first.classes()).toContain('world');
    expect(first.text()).toEqual('this');

    expect(second.classes()).toContain('hello');
    expect(second.classes()).toContain('world');
    expect(second.text()).toEqual('that');
  });

  it('applies multiple styles', () => {
    const component = {
      template: `
      <div v-stylize="['one','two']">
        Lets apply styles to [[one]] and maybe even [[two]] and [[three]]
      </div>
      `,
    };

    const wrapper = mount(component, {
      localVue,
    });
    const styledElements = wrapper.findAll('span');

    const first = styledElements.at(0);
    const second = styledElements.at(1);
    const third = styledElements.at(2);

    expect(first.classes()).toContain('one');
    expect(first.text()).toEqual('one');

    expect(second.classes()).toContain('two');
    expect(second.text()).toEqual('two');

    expect(third.classes()).toContain('one');
    expect(third.text()).toEqual('three');
  });
});
