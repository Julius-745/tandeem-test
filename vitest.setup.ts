import '@testing-library/jest-dom';

globalThis.process = {
  env: {
    VITE_BASE_IMAGE_URI: 'https://example.com/images/',
  },
} as any;