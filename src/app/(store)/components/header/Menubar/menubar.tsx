"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Grid3X3 } from "lucide-react";
import Link from "next/link";
import * as React from "react";

interface Subcategory {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  hasArrow?: boolean;
  subcategories?: Subcategory[];
}

interface MenubarCollapsibleProps {
  categories: Category[];
  label?: string; // default "All Categories"
  width?: string; // e.g. "w-[280px]"
  className?: string;
  singleCollapse?: boolean;
}

export function CustomMenubar({
  categories,
  label = "All Categories",
  width = "w-[280px]",
  singleCollapse = true,
  className,
}: MenubarCollapsibleProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedCategories, setExpandedCategories] = React.useState<string[]>(
    []
  );

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) =>
      prev.includes(id)
        ? []
        : [id]
    );
  };

  return (
    <Collapsible
      open={true}
      onOpenChange={setIsOpen}
      className={`relative ${className}`}
      suppressHydrationWarning={true}
    >
      {/* 🔼 Trigger */}
      <CollapsibleTrigger
        className={cn(
          "items-center gap-3 px-4 py-3 border-foreground/20 bg-foreground/10 hover:bg-foreground/60 transition-colors border justify-between rounded-t-md hidden",
          width
        )}
      >
        <div className="flex items-center gap-3">
          <Grid3X3 className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-primary transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </CollapsibleTrigger>

      {/* 🔽 Dropdown */}
      <CollapsibleContent
        className={cn(
          "absolute left-0 z-50 !w-full bg-transparent overflow-hidden duration-800 transition-all ease-in-out",
          width
        )}
      >
        <div>
          {" "}
          {/* Added divide-y */}
          {categories.map((category) => (
            <div key={category.id}>
              {category.hasArrow && category.subcategories ? (
                <Collapsible
                  open={expandedCategories.includes(category.id)}
                  onOpenChange={() => toggleCategory(category.id)}
                  suppressHydrationWarning={true}
                >
                  <CollapsibleTrigger className="w-full flex items-center gap-3 px-4 py-3 hover:bg-foreground/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-medium flex-1 text-left whitespace-nowrap truncate">
                      {category.name}
                    </span>
                    <ChevronRight
                      className={cn(
                        "w-4 h-4 text-gray-400 transition-transform",
                        expandedCategories.includes(category.id) && "rotate-90"
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-13 border-l-2 overflow-hidden duration-800 transition-all ease-in-out">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.id}>
                        <Link
                          key={subcategory.id}
                          href={`/category/${category.id}/${subcategory.id}`}
                          className="flex items-center gap-4 py-2 text-sm text-primary hover:bg-primary/20 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-1.5 h-3 rounded-tr-full rounded-br-full bg-border"></div>
                          {subcategory.name}
                        </Link>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={`/category/${category.id}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-foreground/20 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <category.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary font-medium">
                    {category.name}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}