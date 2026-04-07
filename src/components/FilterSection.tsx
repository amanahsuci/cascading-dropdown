import { Category, SubCategory, Brand } from '@/types';

interface FilterSectionProps {
    categories: Category[];
    subCategories: SubCategory[];
    brands: Brand[];
    selectedIds: {
        category: string;
        subcategory: string;
        brand: string;
    };
    onFilterChange: (name: string, value: string) => void;
    onReset: () => void;
}

export const FilterSection = ({
    categories,
    subCategories,
    brands,
    selectedIds,
    onFilterChange,
    onReset,
}: FilterSectionProps) => {
    return (
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl 
                bg-white/40 backdrop-blur-md 
                border border-white/20 shadow-xl shadow-black/5
                transition-all duration-300">
                
                {/* Main Category */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-1">
                        Main Category
                    </label>
                    <select
                        name="category"
                        className="w-full bg-white/60 border border-white/40 p-2.5 rounded-xl text-sm text-slate-400 
                            focus:ring-2 focus:ring-blue-200/20 focus:border-blue-300 outline-none
                            transition-all cursor-pointer backdrop-blur-sm"
                        value={selectedIds.category}
                        onChange={(e) => onFilterChange("category", e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {categories.map((c) => (
                            <option key={c.id} value={c.id} className="bg-white">{c.name}</option>
                        ))}
                    </select>
                </div>

                {/* Sub-Category */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-1">
                        Sub-Category
                    </label>
                    <select
                        name="subcategory"
                        className="w-full bg-white/60 border border-white/40 p-2.5 rounded-xl text-sm text-slate-400
                            focus:ring-2 focus:ring-blue-200/20 focus:border-blue-300 outline-none
                            transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
                            backdrop-blur-sm"
                        disabled={!selectedIds.category}
                        value={selectedIds.subcategory}
                        onChange={(e) => onFilterChange("subcategory", e.target.value)}
                    >
                        <option value="">Select Sub-Category</option>
                        {subCategories.map((sc) => (
                            <option key={sc.id} value={sc.id} className="bg-white">{sc.name}</option>
                        ))}
                    </select>
                </div>

                {/* Brand */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-1">
                        Brand
                    </label>
                    <select
                        name="brand"
                        className="w-full bg-white/60 border border-white/40 p-2.5 rounded-xl text-sm text-slate-400 
                            focus:ring-2 focus:ring-blue-200/20 focus:border-blue-300 outline-none
                            transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
                            backdrop-blur-sm"
                        disabled={!selectedIds.subcategory}
                        value={selectedIds.brand}
                        onChange={(e) => onFilterChange("brand", e.target.value)}
                    >
                        <option value="">Select Brand</option>
                        {brands.map((b) => (
                            <option key={b.id} value={b.id} className="bg-white">{b.name}</option>
                        ))}
                    </select>
                </div>

                {/* Reset Button */}
                <div className="flex items-end">
                    <button
                        onClick={onReset}
                        className="w-full bg-zinc-100 hover:bg-zinc-300 text-slate-400 py-2.5 px-4 rounded-xl 
                            transition-all duration-300 font-semibold text-xs uppercase tracking-widest
                            shadow-lg shadow-black/10 active:scale-95"
                    >
                        Reset Filter
                    </button>
                </div>
            </div>
        </div>
    );
};