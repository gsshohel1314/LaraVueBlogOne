// Dashboard
import DashboardComponent from './components/backend/DashboardComponent';

// Category
import IndexCategory from './components/backend/category/IndexCategory';

export const routes = [
    // Dashboard
    { path: '/backend/dashboard', component: DashboardComponent },

    // Category
    { path: '/backend/category', component: IndexCategory },
]
