export const Loader = () => {
    return (
        <div className="min-h-screen bg-[#F9FAFB] p-8 max-w-7xl mx-auto space-y-12 animate-pulse overflow-hidden">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute top-[40%] -left-[10%] w-[30%] h-[30%] bg-indigo-50/50 rounded-full blur-[100px] opacity-30"></div>
            </div>
    
            <main className="relative space-y-12">
            {/* skeleton title section */}
            <header className="space-y-4">
                <div className="h-10 bg-slate-100/50 backdrop-blur-sm rounded-xl w-1/3 border border-white/20"></div>
                <div className="h-4 bg-slate-100/50 backdrop-blur-sm rounded-lg w-1/4 border border-white/10"></div>
            </header>
    
            {/* Skeleton Breadcrumbs */}
            <nav className="flex items-center gap-2">
                <div className="h-4 bg-white/50 rounded-md w-12"></div>
                <div className="text-white/20">/</div>
                <div className="h-4 bg-white/50 rounded-md w-24"></div>
            </nav>
    
            {/* Skeleton Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-zinc-100/70 backdrop-blur-md border border-white/20 shadow-xl shadow-black/5">
                {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-3">
                    <div className="h-2 bg-zinc-200/50 rounded-full w-1/2 ml-1"></div>
                    <div className="h-10 bg-zinc-200/50 rounded-xl w-full border border-white/20"></div>
                </div>
                ))}
            </div>
    
            {/* Skeleton Product Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex flex-col h-full p-3 rounded-xl bg-zinc-100/70 backdrop-blur-sm border border-white/20 space-y-4 shadow-sm">
                    {/* Image Placeholder */}
                    <div className="aspect-square bg-white/50 rounded-lg border border-white/10"></div>
                    
                    {/* Info Placeholder */}
                    <div className="space-y-2 px-1 flex-grow">
                    <div className="h-2 bg-zinc-200/50 rounded-full w-1/3"></div>
                    <div className="h-4 bg-zinc-200/50 rounded-lg w-full"></div>
                    <div className="h-2 bg-zinc/40 rounded-full w-1/2"></div>
                    </div>
    
                    {/* Bottom Section Placeholder */}
                    <div className="mt-4 pt-3 border-t border-white/20 flex justify-between items-center">
                    <div className="space-y-1">
                        <div className="h-2 bg-white/30 rounded-full w-8"></div>
                        <div className="h-4 bg-white/60 rounded-md w-16"></div>
                    </div>
                    <div className="w-7 h-7 bg-white/40 rounded-md"></div>
                    </div>
                </div>
                ))}
            </section>
            </main>
        </div>
    );
};