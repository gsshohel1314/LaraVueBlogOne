// Dashboard
import DashboardComponent from './components/backend/DashboardComponent';

// Category
import CategoryList from './components/backend/category/CategoryList';
import CategoryCreate from './components/backend/category/CategoryCreate';

export const routes = [
    // Dashboard
    { path: '/backend/dashboard', component: DashboardComponent },

    // Category
    { path: '/backend/category-list', component: CategoryList },
    { path: '/backend/category-create', component: CategoryCreate },
]
