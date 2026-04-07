import { Category, SubCategory, Brand } from '@/types';

interface BreadcrumbsProps {
    category?: Category;
    subCategory?: SubCategory;
    brand?: Brand;
}

export const Breadcrumbs = ({ category, subCategory, brand }: BreadcrumbsProps) => {
    return (
        <nav className="product-breadcrumb text-sm text-gray-400 mb-6" aria-label="breadcrumb">
            Home 
            {category && ` > ${category.name}`}
            {subCategory && ` > ${subCategory.name}`}
            {brand && ` > ${brand.name}`}
        </nav>
    );
};