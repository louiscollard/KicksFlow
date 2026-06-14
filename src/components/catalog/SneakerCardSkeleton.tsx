export function SneakerCardSkeleton() {
    return (
        <div className="flex animate-pulse flex-col overflow-hidden rounded-card border border-line bg-white motion-reduce:animate-none">
            <div className="aspect-square border-b border-line bg-paper-2" />
            <div className="flex flex-col gap-2.5 px-4 pb-4 pt-4">
                <div className="h-4 w-3/4 rounded bg-paper-2" />
                <div className="h-3 w-1/3 rounded bg-paper-2" />
                <div className="mt-1 h-5 w-1/2 rounded bg-paper-2" />
            </div>
        </div>
    );
}