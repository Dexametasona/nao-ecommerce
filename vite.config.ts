/// <reference types="vitest" />
/// <reference types="Vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    mainFields:["module", "main", "browser"]
  },
  test:{
    environment:"jsdom",
    globals:true,
    root:"./src/test"
  }
})
