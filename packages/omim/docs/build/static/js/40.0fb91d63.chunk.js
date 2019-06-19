webpackJsonp([40],{126:function(n,t){n.exports="# Omim\n\n[Omi](https://github.com/Tencent/omi) \u6253\u9020\u7684\u8de8\u6846\u67b6\u3001\u8de8\u4e3b\u9898\u7ec4\u4ef6\u5e93\u3002\u4efb\u610f\u6846\u67b6\u4f7f\u7528\u3001\u4e3b\u9898\u81ea\u7531\u5b9a\u5236\u3002\n\n![](https://tencent.github.io/omi/packages/omim/assets/pv4.jpeg?a=1)\n\n## \u7279\u6027\n\n* \u4f7f\u7528\u6807\u51c6 Web Components \u7684 Custom Elements \u6e32\u67d3 \n* \u4efb\u610f\u6846\u67b6\u90fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6(\u6bd4\u5982 Omi, React, Vue and Angular)\n* \u540c\u65f6\u652f\u6301 JSX \u548c \u539f\u751f HTML \u6807\u7b7e\u7684\u4f7f\u7528\u65b9\u5f0f \n* \u6bcf\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\n* \u8d85\u7ea7\u5bb9\u6613\u66f4\u6362\u4e3b\u9898\u989c\u8272\u3001\u5b57\u4f53\u548c\u5706\u89d2\n* \u6269\u5c55\u4e86 HTML \u80fd\u529b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b57\u7b26\u4e32 `'0'` \u6216\u8005\u5b57\u7b26\u4e32 `'false'` \u4f20\u9012 false \u7ed9\u5143\u7d20\n\n## \u8de8\u6846\u67b6\n\n* [Using Omim in React](https://tencent.github.io/omi/packages/omim/test-react/build/index.html) & [Source Code](https://github.com/Tencent/omi/blob/master/packages/omim/test-react/src/HookTest.js)\n* [Using Omim in Vue](https://tencent.github.io/omi/packages/omim/test-vue/dist/index.html) & [Source Code](https://github.com/Tencent/omi/blob/master/packages/omim/test-vue/app.vue)\n\n## \u4f7f\u7528\u6307\u5357\n\n### \u901a\u8fc7 script\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script src=\"https://unpkg.com/omim@latest/button/index.js\"><\/script>\n\n<m-button>I am button</m-button>\n```\n\n### \u901a\u8fc7 npm\n\n``` bash\nnpm install omim\n```\n\nThen:\n\n```js\nimport 'omim/button'\n```\n\n\u7136\u540e\u5728\u4efb\u610f\u6846\u67b6\u4e2d\u4f7f\u7528\uff0c\u6bd4\u5982 Omi, React, Vue or Angular:\n\n``` html\n<m-button>I am button</m-button>\n```\n\nIt can also be used in pure js:\n\n```js\nvar button = document.createElement('m-button')\nbutton.innerHTML = 'I am button'\ndocument.body.append(button)\nbutton.addEventListener('click', function () {\n  console.log('Clicked!')\n})\n\n//or\n//document.body.innerHTML = '<m-button>I am button</m-button>'\n```\n\n## \u66f4\u6539\u4e3b\u9898\n\n```js\ndocument.body.style.setProperty('--mdc-theme-primary', 'red')\ndocument.body.style.setProperty('--mdc-theme-secondary', 'blue')\ndocument.body.style.setProperty('--mdc-theme-error', 'yellow')\n```\n\n\u6240\u6709\u914d\u7f6e\u5982\u4e0b:\n\n```css\n--mdc-theme-primary: #0072d9;\n--mdc-theme-secondary: #2170b8;\n--mdc-theme-error: #f5222d;\n--mdc-theme-surface: #ffffff;\n--mdc-theme-on-primary: #ffffff;\n--mdc-theme-on-secondary: #ffffff;\n--mdc-theme-on-error: #ffffff;\n--mdc-theme-on-surface: #000000;\n--mdc-theme-background: #ffffff;\n--mdc-shape-small-component-radius: 4px;\n--mdc-shape-medium-component-radius: 4px;\n--mdc-shape-large-component-radius: 0px;\n--mdc-typography--font-family: Roboto, sans-serif;\n```\n\n## HTML \u6269\u5c55 \n\n\u5f53\u9ed8\u8ba4\u503c\u4e3a true\uff0c\u9700\u8981\u4f20\u9012 false \u7ed9 element \u7684\u65f6\u5019\uff0c\u4ee5\u524d\u662f\u5386\u53f2\u96be\u9898\uff0cOmi \u5b8c\u7f8e\u89e3\u51b3\u4e86\u8fd9\u4e00\u70b9\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b57\u7b26\u4e32 `'0'` \u6216\u8005 \u5b57\u7b26\u4e32 `'false'` \u6765\u8bbe\u7f6e\u3002\n\n```js\ndefine('my-element', class extends WeElement {\n  static defaultProps = {\n    show: true\n  }\n\n static propTypes = {\n    show: Boolean\n  }\n\n  render(props) {\n    ...\n    ...\n  }\n})\n```\n\nUse:\n\n```html\n<my-element show=\"false\"></my-element>\n```\n\nor\n\n```html\n<my-element show=\"0\"></my-element>\n```\n\n## React \u4e2d\u4f7f\u7528 omim\n\n```jsx\n/** @jsx nativeEvents */\nimport nativeEvents from 'jsx-native-events'\nimport { useState } from 'react'\nimport 'omim/icon-button'\n\nexport default function SomeComponent(props) {\n    const [result, setSwitch] = useState(false)\n\n    return (\n      <div>\n        <p>The switch is {result ? 'on' : 'off'}</p>\n        <m-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\" onEventChange={e => setSwitch(e.detail.isOn)}>\n        </m-icon-button>\n      </div>\n    )\n}\n```\n\n\u975e\u5e38\u611f\u8c22 calebdwilliams \u7684 [jsx-native-events](https://github.com/calebdwilliams/jsx-native-events#readme)\u3002\n\n## Vue \u4e2d\u4f7f\u7528 omim\n\n```html\n<script>\nimport 'omim/icon-button'\n\nexport default {\n  name: 'HelloWorld',\n  data: function() {\n    return {\n      result: false\n    }\n  },\n  methods: {\n    myEvent: function(evt) {\n      this.result = evt.detail.isOn\n    }\n  }\n}\n<\/script>\n\n<template>\n  <div class=\"component\">\n    <p>The switch is {{result? 'on' : 'off'}}</p>\n    <m-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\" @change=\"myEvent\"></m-icon-button>\n  </div>\n</template>\n```\n\n> \u8981\u5728 react \u548c vue \u4e2d\u6b63\u5e38\u663e\u793a icon\uff0c\u9700\u8981\u5728 HTML \u4e2d\u5f15\u5165\u4e0b\u9762\u7684 CSS:\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n```\n\n## \u8d21\u732e\n\n### \u4e00\u4e9b\u547d\u4ee4\n\nBuild \u7ec4\u4ef6:\n\n```bash\nnpm run build -- component-name\n```\n\nBuild \u6240\u6709\u7ec4\u4ef6:\n\n```bash\nnpm run build-all\n```\n\nBuild \u4f8b\u5b50:\n\n```bash\nnpm start demo-name\n```\n\n\u53d1\u5e03:\n\n```bash\nnpm publish --access public\n```\n\n## \u76f8\u5173\u94fe\u63a5\n\n* [material.io docs](https://material.io/develop/web/components/buttons/) \n* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) \n* [material-theme-builder](https://material-theme-builder.glitch.me/)\n* [material-components-web](https://github.com/material-components/material-components-web)\n"}});
//# sourceMappingURL=40.0fb91d63.chunk.js.map