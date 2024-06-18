// vite.config.ts
import react from "file:///D:/web/%D0%A1%D0%B0%D0%B9%D1%82%D1%8B/shift-cinema/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///D:/web/%D0%A1%D0%B0%D0%B9%D1%82%D1%8B/shift-cinema/node_modules/vite/dist/node/index.js";
import svgr from "file:///D:/web/%D0%A1%D0%B0%D0%B9%D1%82%D1%8B/shift-cinema/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "D:\\web\\\u0421\u0430\u0439\u0442\u044B\\shift-cinema";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "default"
      },
      include: "**/*.svg"
    })
  ],
  publicDir: path.resolve(__vite_injected_original_dirname, "./src/shared/assets"),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@ui": path.resolve(__vite_injected_original_dirname, "./src/shared/ui"),
      "@lib": path.resolve(__vite_injected_original_dirname, "./src/shared/lib"),
      "@hooks": path.resolve(__vite_injected_original_dirname, "./src/shared/lib/hooks"),
      "@images": path.resolve(__vite_injected_original_dirname, "./src/shared/assets/images"),
      "@icons": path.resolve(__vite_injected_original_dirname, "./src/shared/assets/icons")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJcXFxcXHUwNDIxXHUwNDMwXHUwNDM5XHUwNDQyXHUwNDRCXFxcXHNoaWZ0LWNpbmVtYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd2ViXFxcXFx1MDQyMVx1MDQzMFx1MDQzOVx1MDQ0Mlx1MDQ0QlxcXFxzaGlmdC1jaW5lbWFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dlYi8lRDAlQTElRDAlQjAlRDAlQjklRDElODIlRDElOEIvc2hpZnQtY2luZW1hL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgc3Zncih7XG4gICAgICBzdmdyT3B0aW9uczoge1xuICAgICAgICBleHBvcnRUeXBlOiAnZGVmYXVsdCdcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiAnKiovKi5zdmcnXG4gICAgfSlcbiAgXSxcbiAgcHVibGljRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc2hhcmVkL2Fzc2V0cycpLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAnQHVpJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3NoYXJlZC91aScpLFxuICAgICAgJ0BsaWInOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc2hhcmVkL2xpYicpLFxuICAgICAgJ0Bob29rcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zaGFyZWQvbGliL2hvb2tzJyksXG4gICAgICAnQGltYWdlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zaGFyZWQvYXNzZXRzL2ltYWdlcycpLFxuICAgICAgJ0BpY29ucyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zaGFyZWQvYXNzZXRzL2ljb25zJylcbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixPQUFPLFdBQVc7QUFDaFQsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxhQUFhO0FBQUEsUUFDWCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFdBQVcsS0FBSyxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLEVBQ3hELFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxPQUFPLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUNoRCxRQUFRLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUNsRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyx3QkFBd0I7QUFBQSxNQUMxRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyw0QkFBNEI7QUFBQSxNQUMvRCxVQUFVLEtBQUssUUFBUSxrQ0FBVywyQkFBMkI7QUFBQSxJQUMvRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
