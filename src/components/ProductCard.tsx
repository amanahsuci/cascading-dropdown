import { Product } from '@/types';

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group relative">
            {/* background glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
            
            {/* main card container */}
            <div className="relative flex flex-col h-full p-3 rounded-xl 
                bg-white/40 backdrop-blur-md 
                border border-white/40 shadow-sm hover:shadow-lg hover:shadow-slate-500
                transition-all duration-500">
                <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-white/50 border border-white/10 flex flex-col items-center justify-center group-hover:bg-white/80 transition-all duration-500">
                    <span className="text-2xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">📦</span>
                </div>
                <div className="space-y-0.5 flex-grow">
                    <p className="text-[9px] font-bold tracking-widest uppercase text-slate-500/60">
                        REF: {product.id}
                    </p>
                    <h3 className="font-bold text-sm text-slate-300 leading-tight group-hover:text-blue-400/75 transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium">
                        Brand ID: {product.brandId}
                    </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/40 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-bold uppercase text-slate-400 tracking-tighter">Price</span>
                        <p className="font-black text-sm text-slate-800 tracking-tight">
                            Rp {product.price.toLocaleString("id-ID")}
                        </p>
                    </div>
                    <button className="w-7 h-7 rounded-md bg-slate-200/50 flex items-center justify-center text-zinc-500 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md shadow-black/10 active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};