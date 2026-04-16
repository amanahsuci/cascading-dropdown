import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import db from '@/data/db.json';
import { RootData } from '@/types';

// Import Components
import { FilterSection } from '@/components/FilterSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { Loader } from '@/components/Loader';

export default function Home() {
  const router = useRouter();
  const { query, isReady } = router;

  const [data, setData] = useState<RootData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setData(db as RootData);
      setIsLoading(false);
    };

    if (isReady) {
      fetchData();
    }
  }, [isReady]);

  const categoryId = (query.category as string) || "";
  const subCategoryId = (query.subcategory as string) || "";
  const brandId = (query.brand as string) || "";

  const availableSubCategories = data?.subCategories.filter(
    (sc) => sc.categoryId === categoryId
  ) || [];

  const availableBrands = data?.brands.filter(
    (b) => b.subCategoryId === subCategoryId
  ) || [];

  const filteredProducts = data?.products.filter((p) => {
    if (brandId) return p.brandId === brandId;
    if (subCategoryId) {
      const brandsInSub = data.brands.filter(b => b.subCategoryId === subCategoryId).map(b => b.id);
      return brandsInSub.includes(p.brandId);
    }
    if (categoryId) {
      const subInCat = data.subCategories.filter(sc => sc.categoryId === categoryId).map(sc => sc.id);
      const brandsInCat = data.brands.filter(b => subInCat.includes(b.subCategoryId)).map(b => b.id);
      return brandsInCat.includes(p.brandId);
    }
    return true;
  }) || [];

  const updateFilter = (name: string, value: string) => {
    const newQuery = { ...query, [name]: value };
    if (name === "category") {
      delete newQuery.subcategory;
      delete newQuery.brand;
    } else if (name === "subcategory") {
      delete newQuery.brand;
    }
    if (!value) delete newQuery[name];

    router.push({
      pathname: router.pathname,
      query: newQuery,
    }, undefined, { shallow: true });
  };

  const resetFilters = () => {
    router.push(router.pathname, undefined, { shallow: true });
  };

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900 font-sans selection:bg-blue-100">
      {/* Subtle Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <main className="relative p-6 md:p-12 max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <header className="space-y-2">
          <h1 className="text-2xl font-medium tracking-tight sm:text-xl">
            <span className="text-stone-600">Catalog.</span>
          </h1>
          <p className="text-slate-400 max-w-lg">
            Discover our curated collection of premium products with seamless filtering.
          </p>
        </header>

        {/* Breadcrumbs Component */}
        <Breadcrumbs 
          category={data.categories.find(c => c.id === categoryId)}
          subCategory={data.subCategories.find(sc => sc.id === subCategoryId)}
          brand={data.brands.find(b => b.id === brandId)}
        />

        <FilterSection 
          categories={data.categories}
          subCategories={availableSubCategories}
          brands={availableBrands}
          selectedIds={{ category: categoryId, subcategory: subCategoryId, brand: brandId }}
          onFilterChange={updateFilter}
          onReset={resetFilters}
        />

        {/* Product Grid Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div key={p.id} className="transition-transform duration-300 hover:-translate-y-1">
                <ProductCard product={p} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm border-2 border-dashed border-slate-200 rounded-3xl">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">No results found</h3>
              <p className="text-slate-500 mb-6 text-center max-w-xs">
                We couldn't find any products matching your current filter selection.
              </p>
              <button 
                onClick={resetFilters}
                className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}