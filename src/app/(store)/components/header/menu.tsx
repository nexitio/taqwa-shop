"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
    MegaMenuDropdown,
    type DepartmentItem,
} from "./dropDownMenu";

const sampleDepartments: DepartmentItem[] = [
    { id: "value-of-day", label: "Value of the Day", href: "/value-of-day" },
    { id: "top-offers", label: "Top 100 Offers", href: "/top-offers" },
    { id: "new-arrivals", label: "New Arrivals", href: "/new-arrivals" },
    {
        id: "computers-accessories",
        label: "Computers & Accessories",
        hasSubmenu: true,
        submenu: {
            categories: [
                {
                    title: "Computers & Accessories",
                    items: [
                        { label: "All Computers & Accessories", href: "/computers/all" },
                        {
                            label: "Laptops, Desktops & Monitors",
                            href: "/computers/laptops-desktops",
                        },
                        { label: "Printers & Ink", href: "/computers/printers" },
                        {
                            label: "Networking & Internet Devices",
                            href: "/computers/networking",
                        },
                        { label: "Computer Accessories", href: "/computers/accessories" },
                        { label: "Software", href: "/computers/software" },
                    ],
                },
                {
                    title: "Office & Stationery",
                    items: [{ label: "All Office & Stationery", href: "/office/all" }],
                },
            ],
            bottomSection: {
                title: "All Electronics",
                subtitle: "Discover more products",
                href: "/electronics/all",
            },
            promotionalImage: "/megamenu-.webp",
        },
    },
    {
        id: "cameras-audio-video",
        label: "Cameras, Audio & Video",
        hasSubmenu: true,
        submenu: {
            categories: [
                {
                    title: "Digital Cameras",
                    items: [
                        { label: "DSLR Cameras", href: "/cameras/dslr" },
                        { label: "Mirrorless Cameras", href: "/cameras/mirrorless" },
                        { label: "Point & Shoot", href: "/cameras/point-shoot" },
                        { label: "Action Cameras", href: "/cameras/action" },
                    ],
                },
                {
                    title: "Audio & Video",
                    items: [
                        { label: "Headphones", href: "/audio/headphones" },
                        { label: "Speakers", href: "/audio/speakers" },
                        { label: "Audio Accessories", href: "/audio/accessories" },
                    ],
                },
            ],
            bottomSection: {
                title: "All Electronics",
                subtitle: "Discover more products",
                href: "/electronics/all",
            },
            promotionalImage: "/megamenu-2.webp",
        },
    },
    {
        id: "mobiles-tablets",
        label: "Mobiles & Tablets",
        hasSubmenu: true,
        submenu: {
            categories: [
                {
                    title: "Smartphones",
                    items: [
                        { label: "iPhone", href: "/phones/iphone" },
                        { label: "Samsung Galaxy", href: "/phones/samsung" },
                        { label: "Google Pixel", href: "/phones/pixel" },
                        { label: "OnePlus", href: "/phones/oneplus" },
                    ],
                },
                {
                    title: "Tablets",
                    items: [
                        { label: "iPad", href: "/tablets/ipad" },
                        { label: "Android Tablets", href: "/tablets/android" },
                        { label: "Surface Tablets", href: "/tablets/surface" },
                    ],
                },
            ],
            bottomSection: {
                title: "All Electronics",
                subtitle: "Discover more products",
                href: "/electronics/all",
            },
            promotionalImage: "/megamenu-3.webp",
        },
    },
    {
        id: "movies-music-video-games",
        label: "Movies, Music & Video Games",
        hasSubmenu: true,
        submenu: {
            categories: [
                {
                    title: "Gaming Consoles",
                    items: [
                        { label: "PlayStation 5", href: "/gaming/ps5" },
                        { label: "Xbox Series X", href: "/gaming/xbox" },
                        { label: "Nintendo Switch", href: "/gaming/switch" },
                        { label: "Gaming PCs", href: "/gaming/pc" },
                    ],
                },
                {
                    title: "Movies & Music",
                    items: [
                        { label: "Blu-ray Movies", href: "/movies/bluray" },
                        { label: "Digital Downloads", href: "/movies/digital" },
                        { label: "Music CDs", href: "/music/cds" },
                        { label: "Vinyl Records", href: "/music/vinyl" },
                    ],
                },
            ],
            bottomSection: {
                title: "All Electronics",
                subtitle: "Discover more products",
                href: "/electronics/all",
            },
            promotionalImage: "/megamenu-7.webp",
        },
    },
    {
        id: "tv-audio",
        label: "TV & Audio",
        hasSubmenu: true,
        submenu: {
            categories: [
                {
                    title: "Televisions",
                    items: [
                        { label: "4K Smart TVs", href: "/tv/4k-smart" },
                        { label: "OLED TVs", href: "/tv/oled" },
                        { label: "LED TVs", href: "/tv/led" },
                        { label: "Projectors", href: "/tv/projectors" },
                    ],
                },
                {
                    title: "Audio Systems",
                    items: [
                        { label: "Sound Bars", href: "/audio/soundbars" },
                        { label: "Home Theater", href: "/audio/home-theater" },
                        { label: "Wireless Speakers", href: "/audio/wireless" },
                    ],
                },
            ],
            bottomSection: {
                title: "All Electronics",
                subtitle: "Discover more products",
                href: "/electronics/all",
            },
            promotionalImage: "/megamenu-9.webp",
        },
    },
    {
        id: "watches-eyewear",
        label: "Watches & Eyewear",
        hasSubmenu: true,
        submenu: {
            categories: [
                {
                    title: "Watches",
                    items: [
                        { label: "All Watches", href: "/watches/all" },
                        { label: "Men's Watches", href: "/watches/mens" },
                        { label: "Women's Watches", href: "/watches/womens" },
                        { label: "Premium Watches", href: "/watches/premium" },
                        { label: "Deals on Watches", href: "/watches/deals" },
                    ],
                },
                {
                    title: "Eyewear",
                    items: [
                        { label: "Men's Sunglasses", href: "/eyewear/mens-sunglasses" },
                    ],
                },
            ],
            bottomSection: {
                title: "All Electronics",
                subtitle: "Discover more products",
                href: "/electronics/all",
            },
            promotionalImage: "/megamenu-3.webp",
        },
    },
    {
        id: "car-motorbike-industrial",
        label: "Car, Motorbike & Industrial",
        hasSubmenu: true,
        submenu: {
            categories: [
                {
                    title: "Car Electronics",
                    items: [
                        { label: "Car Audio", href: "/car/audio" },
                        { label: "GPS Navigation", href: "/car/gps" },
                        { label: "Dash Cameras", href: "/car/dashcam" },
                    ],
                },
                {
                    title: "Industrial Equipment",
                    items: [
                        { label: "Power Tools", href: "/industrial/power-tools" },
                        { label: "Safety Equipment", href: "/industrial/safety" },
                        { label: "Measuring Tools", href: "/industrial/measuring" },
                    ],
                },
            ],
            bottomSection: {
                title: "All Electronics",
                subtitle: "Discover more products",
                href: "/electronics/all",
            },
            promotionalImage: "/megamenu-7.webp",
        },
    },
    {
        id: "accessories",
        label: "Accessories",
        hasSubmenu: true,
        submenu: {
            categories: [
                {
                    title: "Phone Accessories",
                    items: [
                        { label: "Phone Cases", href: "/accessories/cases" },
                        {
                            label: "Screen Protectors",
                            href: "/accessories/screen-protectors",
                        },
                        { label: "Chargers", href: "/accessories/chargers" },
                    ],
                },
                {
                    title: "General Accessories",
                    items: [
                        { label: "Cables & Adapters", href: "/accessories/cables" },
                        { label: "Power Banks", href: "/accessories/power-banks" },
                        { label: "Storage Devices", href: "/accessories/storage" },
                    ],
                },
            ],
            bottomSection: {
                title: "All Electronics",
                subtitle: "Discover more products",
                href: "/electronics/all",
            },
            promotionalImage: "/megamenu-7.webp",
        },
    },
];

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export function LeftMenu() {
    return (
        <NavigationMenu viewport={false} className="z-999">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent cursor-pointer">
                        Home
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mt-4 mb-2 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Beautifully designed components built with Tailwind CSS.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent cursor-pointer">
                        Components
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent cursor-pointer"
                    >
                        <Link href="/docs">Docs</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent cursor-pointer">
                        List
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Components</div>
                                        <div className="text-muted-foreground">
                                            Browse all components in the library.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Documentation</div>
                                        <div className="text-muted-foreground">
                                            Learn how to use the library.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Blog</div>
                                        <div className="text-muted-foreground">
                                            Read our latest blog posts.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent cursor-pointer">
                        Simple
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="#">Components</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#">Documentation</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#">Blocks</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent cursor-pointer">
                        With Icon
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleHelpIcon />
                                        Backlog
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleIcon />
                                        To Do
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleCheckIcon />
                                        Done
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}

export default function HeaderMenu() {
    return (
        <div className="flex justify-between items-center">
            <MegaMenuDropdown departments={sampleDepartments} collapsible={false} hoverDelay={10} />
            <LeftMenu />
            <div className="flex items-center gap-4">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/about"
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "hover:bg-transparent focus:bg-transparent"
                                )}
                            >
                                About Us
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/account"
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "hover:bg-transparent focus:bg-transparent"
                                )}
                            >
                                My Account
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}
