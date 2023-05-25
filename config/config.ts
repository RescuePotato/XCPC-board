import { defineConfig } from "umi";

export default defineConfig({
  title: false,
  metas: [
    {
      name: "description",
      content: "THUPC2023 排行榜",
    },
  ],
  favicon: "/favicon.ico",
  publicPath: "/",
  runtimePublicPath: true,
  hash: true,
  nodeModulesTransform: {
    type: "none",
  },
  routes: [
    {
      path: "/",
      component: "@/pages/board/board",
      exact: false,
    },
  ],
  proxy: {
    // "/data": {
    //   target: 'https://board.xcpcio.com',
    //   changeOrigin: true,
    // },
  },
});
