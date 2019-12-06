import { configure } from '@storybook/react';
import '../src/index.css';

// required in order to load stories using CSF format.
// without this they do not load and there are no helpful (or any) error messages
configure(require.context('../src', true, /\.stories\.js$/), module);

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);