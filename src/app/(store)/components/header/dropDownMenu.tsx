"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, ChevronUp, Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface DepartmentItem {
  id: string;
  label: string;
  href?: string;
  hasSubmenu?: boolean;
  submenu?: {
    categories: Array<{
      title: string;
      items: Array<{
        label: string;
        href: string;
      }>;
    }>;
    bottomSection?: {
      title: string;
      subtitle: string;
      href: string;
    };
    promotionalImage?: string;
  };
}

interface MegaMenuDropdownProps {
  departments: DepartmentItem[];
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  onItemClick?: (item: { label: string; href: string }) => void;
  hoverShowMenu?: boolean;
  autoShowMenu?: boolean;
  hoverDelay?: number;
  collapsible?: boolean;
}

export function MegaMenuDropdown({
  departments,
  className,
  triggerClassName,
  contentClassName,
  onItemClick,
  hoverShowMenu = true,
  autoShowMenu = false,
  hoverDelay = 100,
  collapsible = false,
}: MegaMenuDropdownProps) {
  const [isOpen, setIsOpen] = useState(autoShowMenu);
  const [hoveredDepartment, setHoveredDepartment] = useState<string | null>(
    null
  );
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Clear all timeouts helper
  const clearAllTimeouts = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  // Handle mouse enter on the entire container (only for hover mode)
  const handleContainerMouseEnter = () => {
    if (!hoverShowMenu || collapsible) return;

    clearAllTimeouts();

    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
      if (departments.length > 0 && !hoveredDepartment) {
        setHoveredDepartment(departments[0].id);
      }
    }, hoverDelay);
  };

  // Handle mouse leave from the entire container (only for hover mode)
  const handleContainerMouseLeave = () => {
    if (!hoverShowMenu || collapsible) return;

    clearAllTimeouts();

    leaveTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setHoveredDepartment(null);
    }, 300);
  };

  // Handle department item hover
  const handleDepartmentMouseEnter = (departmentId: string) => {
    setHoveredDepartment(departmentId);
  };

  // Handle trigger click
  const handleTriggerClick = () => {
    if (collapsible) {
      const newOpenState = !isOpen;
      setIsOpen(newOpenState);

      if (newOpenState && departments.length > 0) {
        setHoveredDepartment(departments[0].id);
      } else {
        setHoveredDepartment(null);
      }
    } else if (!hoverShowMenu) {
      setIsOpen(!isOpen);
      if (!isOpen && departments.length > 0) {
        setHoveredDepartment(departments[0].id);
      }
    }
  };

  // Handle clicks outside to close menu when in collapsible mode
  useEffect(() => {
    if (!collapsible || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHoveredDepartment(null);
      }
    };

    // Add a small delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [collapsible, isOpen]);

  const currentDepartment = departments.find((d) => d.id === hoveredDepartment);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, []);

  // Determine if we should use hover events
  const shouldUseHover = hoverShowMenu && !collapsible;

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onMouseEnter={shouldUseHover ? handleContainerMouseEnter : undefined}
      onMouseLeave={shouldUseHover ? handleContainerMouseLeave : undefined}
    >
      {/* Trigger Button */}
      <Button
        variant="secondary"
        className={cn(
          "text-primary font-semibold px-6 py-3 h-auto flex items-center border-l border-t border-r w-64 rounded-t-md rounded-b-none",
          // isOpen ? "rounded-b-none" : "rounded-b-none",
          collapsible && "justify-between",
          triggerClassName
        )}
        onClick={handleTriggerClick}
      >
        <div className="flex items-center">
          <Menu className="h-4 w-4 mr-2 text-primary" />
          All Departments
        </div>
        {collapsible && (
          <div className="ml-2">
            {isOpen ? (
              <ChevronUp className="h-4 w-4 text-primary" />
            ) : (
              <ChevronDown className="h-4 w-4 text-primary" />
            )}
          </div>
        )}
      </Button>

      {/* Dropdown Content */}
      {(isOpen || autoShowMenu) && (
        <div
          className={cn(
            "absolute top-full left-0 z-50 p-0 bg-primary-foreground border border-primary/10 drop-shadow-md rounded-t-none rounded-b-md",
            hoveredDepartment && currentDepartment?.submenu
              ? "w-[900px]"
              : "w-64",
            contentClassName
          )}
        >
          <div className="flex">
            {/* Left Sidebar - Department Categories */}
            <div
              className={cn(
                "bg-primary-foreground rounded-tl-none rounded-bl-md overflow-hidden",
                hoveredDepartment && currentDepartment?.submenu
                  ? "w-64"
                  : "w-64"
              )}
            >
              <div className="p-0">
                {departments.map((department) => (
                  <div
                    key={department.id}
                    className={cn(
                      "px-4 py-3 cursor-pointer border-b border-primary/10 flex items-center justify-between transition-all duration-150",
                      hoveredDepartment === department.id
                        ? "bg-primary/10 border-l-3 border-l-primary/50"
                        : "hover:bg-primary/50 border-l-3 border-l-transparent"
                    )}
                    onMouseEnter={() =>
                      handleDepartmentMouseEnter(department.id)
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      onItemClick?.({
                        label: department.label,
                        href: department.href || "#",
                      });
                      // Close menu after clicking item in collapsible mode
                      if (collapsible) {
                        setIsOpen(false);
                        setHoveredDepartment(null);
                      }
                    }}
                  >
                    <span
                      className={cn(
                        "text-sm transition-colors duration-150",
                        hoveredDepartment === department.id
                          ? "text-primary font-semibold"
                          : "text-primary/70"
                      )}
                    >
                      {department.label}
                    </span>
                    {department.hasSubmenu && (
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-colors duration-150",
                          hoveredDepartment === department.id
                            ? "text-primary"
                            : "text-primary/50"
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Multi-Column Submenu */}
            {hoveredDepartment && currentDepartment?.submenu && (
              <div className="flex-1 relative min-h-[400px] overflow-hidden rounded-tr-none rounded-br-md border-b border-r border-primary/20 drop-shadow-md">
                {/* Background Image */}
                {currentDepartment.submenu.promotionalImage && (
                  <Image
                    src={currentDepartment.submenu.promotionalImage}
                    alt="Promotion"
                    fill
                    className="object-cover opacity-90"
                  />
                )}

                {/* Overlay Content */}
                <div className="relative z-10 p-6 space-y-6 h-full w-full text-primary bg-primary/5">
                  <div className="grid grid-cols-2 gap-8">
                    {currentDepartment.submenu.categories.map(
                      (category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-3">
                          <h3 className="font-semibold text-base pb-2 text-primary/70">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onItemClick?.(item);
                                    // Close menu after clicking item in collapsible mode
                                    if (collapsible) {
                                      setIsOpen(false);
                                      setHoveredDepartment(null);
                                    }
                                  }}
                                  className="text-primary/50 hover:text-primary text-sm text-left block w-full transition-colors duration-150 hover:underline"
                                >
                                  {item.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>

                  {currentDepartment.submenu.bottomSection && (
                    <div className="pt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onItemClick?.({
                            label:
                              currentDepartment.submenu?.bottomSection?.title ||
                              "",
                            href:
                              currentDepartment.submenu?.bottomSection?.href ||
                              "#",
                          });
                          // Close menu after clicking item in collapsible mode
                          if (collapsible) {
                            setIsOpen(false);
                            setHoveredDepartment(null);
                          }
                        }}
                        className="text-left hover:text-blue-600 transition-colors duration-150 block"
                      >
                        <h3 className="font-semibold text-base text-primary/70">
                          {currentDepartment.submenu.bottomSection.title}
                        </h3>
                        <p className="text-primary/50 text-sm">
                          {currentDepartment.submenu.bottomSection.subtitle}
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
