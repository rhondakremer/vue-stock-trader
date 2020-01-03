import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import Stocks from './components/Stocks';

export const routes = [
    { path: '', component: Landing },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks }
]