import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Cambia estos valores por tu usuario y nombre de repositorio en GitHub
const username = 'iamisaacs';
const repoName = 'Portfolio';

export default defineConfig({
  site: `https://${username}.github.io`,
  base: `/${repoName}/`,
  vite: {
    plugins: [tailwindcss()]
  }
});
