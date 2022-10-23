import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import { VitePWA as vitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [splitVendorChunkPlugin(), react(), vitePWA()],
    base: "./",
});
