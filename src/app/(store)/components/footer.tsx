import { Mail, Map, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="p-8 border-t border-primary/10">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <Image src="/logo.png" alt="Logo" className="w-13 h-12" width={100} height={100} />
                            <div className="flex flex-col">
                                <p className="text-xl font-bold">Taqwa Shop</p>
                                <p className="text-xs text-muted-foreground -mt-0.5">Organic Ecommerce</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Quisque id luctus mauris, eget varius libero. Vestibulum metus leo.</p>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-center group cursor-pointer">
                                <div className="p-1.5 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-sm text-muted-foreground font-medium transition-all group-hover:text-primary">taqwashop@gmail.com</p>
                            </div>
                            <div className="flex gap-2 items-center group cursor-pointer">
                                <div className="p-1.5 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                    <Phone className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-sm text-muted-foreground font-medium transition-all group-hover:text-primary">01942-504420</p>
                            </div>
                            <div className="flex gap-2 items-center group cursor-pointer">
                                <div className="p-1.5 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                    <Map className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-sm text-muted-foreground font-medium transition-all group-hover:text-primary">Mirpur-10, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex items-start justify-end gap-16">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold">About</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-sm text-muted-foreground font-medium transition-all hover:text-primary hover:translate-x-1 inline-block">About Us</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground font-medium transition-all hover:text-primary hover:translate-x-1 inline-block">Contact Us</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground font-medium transition-all hover:text-primary hover:translate-x-1 inline-block">Help Center</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground font-medium transition-all hover:text-primary hover:translate-x-1 inline-block">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold">HELP & GUIDE</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-sm text-muted-foreground font-medium transition-all hover:text-primary hover:translate-x-1 inline-block">Shipping</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground font-medium transition-all hover:text-primary hover:translate-x-1 inline-block">Returns</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground font-medium transition-all hover:text-primary hover:translate-x-1 inline-block">Payment</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}