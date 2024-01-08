import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      'buffer': 'buffer',
      'stream': 'stream-browserify',
      'events': 'events'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/src/index.ts'),
        styles: resolve(__dirname, '/src/styles.scss'),
        singleProductStyles: resolve(__dirname, '/src/singleProduct/singleProductStyles.scss'),
        singleProduct: resolve(__dirname, '/src/singleProduct/singleProduct.ts'),
        archiveProductStyles: resolve(__dirname, '/src/archiveProduct/archiveProductStyles.scss'),
        archiveProduct: resolve(__dirname, '/src/archiveProduct/archiveProduct.ts'),
        loginForm: resolve(__dirname, '/src/loginForm/loginForm.ts'),
        loginFormStyles: resolve(__dirname, '/src/loginForm/loginFormStyles.scss'),
        frontPage: resolve(__dirname, '/src/frontPage/frontPage.ts'),
        frontPageStyles: resolve(__dirname, '/src/frontPage/frontPageStyles.scss'),
        about: resolve(__dirname, '/src/about/about.ts'),
        aboutStyles: resolve(__dirname, '/src/about/aboutStyles.scss'),
        blogPage: resolve(__dirname, '/src/blogPage/blogPage.ts'),
        blogPageStyle: resolve(__dirname, '/src/blogPage/blogPageStyle.scss'),
        accountPage: resolve(__dirname, '/src/accountPage/accountPage.ts'),
        accountPageStyles: resolve(__dirname, '/src/accountPage/accountPageStyles.scss'),
        marken: resolve(__dirname, '/src/marken/marken.ts'),
        markenStyles: resolve(__dirname, '/src/marken/markenStyles.scss'),
        notFound: resolve(__dirname, '/src/notFound/notFound.ts'),
        notFoundStyles: resolve(__dirname, '/src/notFound/notFoundStyles.scss'),
        home: resolve(__dirname, '/src/home/home.ts'),
        homeStyles: resolve(__dirname, '/src/home/homeStyles.scss'),
        cart: resolve(__dirname, '/src/cart/cart.ts'),
        cartStyles: resolve(__dirname, '/src/cart/cartStyles.scss'),
      },
    },
  },
})