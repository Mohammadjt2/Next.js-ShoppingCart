import '@/styles/globals.css';
import { ProductsProvider } from '@/context/Products/productsContext';
import { CartProvider } from '@/context/Cart/cartContext';
import Router from 'next/router';
import NProgress from 'nprogress';
import SeoMeta from 'next/head';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
    return (
        <ProductsProvider>
            <CartProvider>
                <SeoMeta></SeoMeta>
                <Component {...pageProps} />
            </CartProvider>
        </ProductsProvider>
    );
}
