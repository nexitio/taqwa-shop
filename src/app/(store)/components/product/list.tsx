import Link from "next/link";
import { ProductCard, ProductCardProps } from "./card";

export default function ProductList({
    products,
    title,
    viewAllLink
}: {
    products: ProductCardProps[];
    title: string;
    viewAllLink?: string;
}) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{title}</h1>
                {
                    viewAllLink && (
                        <Link href={viewAllLink} className="text-primary hover:underline">View All</Link>
                    )
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}