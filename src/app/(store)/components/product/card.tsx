import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
}

export function ProductCard({ product }: { product: ProductCardProps }) {
    return (
        <div className="group flex flex-col h-full border border-primary/20 rounded-md bg-background overflow-hidden shadow transition-all duration-300">
            <Link href={`/products/${product.id}`} className="relative flex-1 group">
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-semibold line-clamp-2 min-h-10 group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </div>
            </Link>
            <div className="flex items-baseline gap-2 px-3 sm:px-4">
                <div className="flex items-center">
                    <span className="text-lg sm:text-xl font-bold">৳{product.price}</span>
                </div>
                <div className="flex items-center line-through text-red-600 text-sm sm:text-sm">
                    <span>৳{product.price + 200}</span>
                </div>
            </div>
            <div className="p-3 sm:p-4 pt-0 mt-auto">
                <Button size="sm" className="w-full gap-2 py-5 sm:py-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-xs sm:text-sm uppercase tracking-tight">Add to cart</span>
                </Button>
            </div>
        </div>
    )
}