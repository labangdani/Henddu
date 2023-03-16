import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons({ compiler: "vue3" })],

  server: {
    proxy: {
      // with options
      '/proxy': {
        target: 'https://tv.gateway.emsit.cloud',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/proxy/, '')
      },
    }
  }
});






