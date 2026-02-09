import {
    Apple,
    Baby,
    Coffee,
    Cookie,
    Croissant,
    Fish,
    Milk,
    Pill,
    Snowflake,
    SprayCan as Spray,
    Wheat,
} from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  icon: any;
  hasArrow?: boolean;
  subcategories?: SubCategory[];
  onClick?: () => void;
}

export interface SubCategory {
  id: string;
  name: string;
  onClick?: () => void;
}

export const groceryCategories: CategoryItem[] = [
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    icon: Apple,
    hasArrow: true,
    subcategories: [
      { id: "fresh-fruits", name: "Fresh Fruits" },
      { id: "fresh-vegetables", name: "Fresh Vegetables" },
      { id: "organic-produce", name: "Organic Produce" },
      { id: "herbs-seasonings", name: "Herbs & Seasonings" },
    ],
  },
  {
    id: "meats-seafood",
    name: "Meats & Seafood",
    icon: Fish,
    hasArrow: true,
    subcategories: [
      { id: "fresh-meat", name: "Fresh Meat" },
      { id: "poultry", name: "Poultry" },
      { id: "seafood", name: "Seafood" },
      { id: "processed-meat", name: "Processed Meat" },
    ],
  },
  {
    id: "breakfast-dairy",
    name: "Breakfast & Dairy",
    icon: Milk,
    hasArrow: true,
    subcategories: [
      { id: "milk-cream", name: "Milk & Cream" },
      { id: "cheese", name: "Cheese" },
      { id: "yogurt", name: "Yogurt" },
      { id: "eggs", name: "Eggs" },
      { id: "breakfast-cereals", name: "Breakfast Cereals" },
    ],
  },
  {
    id: "breads-bakery",
    name: "Breads & Bakery",
    icon: Croissant,
    hasArrow: true,
    subcategories: [
      { id: "fresh-bread", name: "Fresh Bread" },
      { id: "cakes-pastries", name: "Cakes & Pastries" },
      { id: "cookies", name: "Cookies" },
      { id: "bakery-snacks", name: "Bakery Snacks" },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    icon: Coffee,
    hasArrow: true,
    subcategories: [
      { id: "soft-drinks", name: "Soft Drinks" },
      { id: "juices", name: "Juices" },
      { id: "tea-coffee", name: "Tea & Coffee" },
      { id: "energy-drinks", name: "Energy Drinks" },
      { id: "water", name: "Water" },
    ],
  },
  {
    id: "frozen-foods",
    name: "Frozen Foods",
    icon: Snowflake,
    hasArrow: false,
  },
  {
    id: "biscuits-snacks",
    name: "Biscuits & Snacks",
    icon: Cookie,
    hasArrow: false,
  },
  {
    id: "grocery-staples",
    name: "Grocery & Staples",
    icon: Wheat,
    hasArrow: false,
  },
  {
    id: "household-needs",
    name: "Household Needs",
    icon: Spray,
    hasArrow: false,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Pill,
    hasArrow: false,
  },
  {
    id: "baby-pregnancy",
    name: "Baby & Pregnancy",
    icon: Baby,
    hasArrow: false,
  },
];