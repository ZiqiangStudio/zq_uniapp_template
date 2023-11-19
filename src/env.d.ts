declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}
