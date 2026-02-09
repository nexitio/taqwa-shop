import { Input } from "@/components/ui/input";
import { Facebook, Heart, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, User, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./header/menu";
import Menubar from "./header/Menubar";

export default function Header() {
    return (
        <>
            <div className="border-b border-primary/5">
                <div className="flex items-center justify-between p-2 container mx-auto max-w-6xl">
                    <div className="flex items-center divide-x divide-primary/30">
                        <div className="flex gap-2 items-center pr-4">
                            <Mail className="w-4 h-4" />
                            <p className="text-sm text-gray-500 cursor-pointer font-semibold hover:underline">taqwashop@gmail.com</p>
                        </div>
                        <div className="flex gap-2 items-center pl-4">
                            <Phone className="w-4 h-4" />
                            <p className="text-sm text-gray-500 cursor-pointer font-semibold hover:underline">01942-504420</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <Facebook className="w-4 h-4 hover:scale-120 hover:rotate-5 transition ease-in-out duration-300 cursor-pointer" />
                        <Instagram className="w-4 h-4 hover:scale-120 hover:rotate-5 transition ease-in-out duration-300 cursor-pointer" />
                        <Twitter className="w-4 h-4 hover:scale-120 hover:rotate-5 transition ease-in-out duration-300 cursor-pointer" />
                        <Youtube className="w-4 h-4 hover:scale-120 hover:rotate-5 transition ease-in-out duration-300 cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="border-b border-primary/5">
                <div className="flex items-center justify-between container mx-auto max-w-6xl gap-12 py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" className="w-13 h-12" alt="Logo" width={100} height={100} />
                        <div>
                            <h1 className="text-xl font-bold">Taqwa Shop</h1>
                            <p className="text-xs text-muted-foreground">Organic Ecommerce</p>
                        </div>
                    </Link>
                    <div className="flex-1 max-w-xl relative">
                        <Input type="text" placeholder="Search" className="rounded-full px-5 h-10" />
                        <Search className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                    <Menubar />
                    <div className="items-center gap-5 hidden md:flex">
                        <User className="w-6.5 h-6.5" />
                        <div className="relative p-2 bg-foreground/10 rounded-full">
                            <Heart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-2 w-5 h-5 flex items-center justify-center bg-orange-600 text-white rounded-full text-xs">0</span>
                        </div>
                        <div className="relative p-2 bg-foreground/10 rounded-full">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-2 w-5 h-5 flex items-center justify-center bg-green-600 text-white rounded-full text-xs">0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky top-0 z-50 bg-background shadow">
                <div className="pt-1 container mx-auto max-w-6xl">
                    <HeaderMenu />
                </div>
            </div>
        </>
    )
}