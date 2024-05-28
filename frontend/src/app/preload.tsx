'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload('./loading.webp', { as: 'style' });
  return null;
}
