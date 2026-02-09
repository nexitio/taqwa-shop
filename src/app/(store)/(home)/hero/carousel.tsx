'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

interface Slide {
    id: string;
    image: string;
    title: string;
    subtitle?: string;
    offer?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

interface CarouselContainerProps {
    slides: Slide[];
    className?: string;
    autoPlay?: boolean;
    interval?: number;
    showDot?: boolean;
    showArrow?: boolean;
    contentPosition?: "start" | "center" | "end";
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({
    slides = [],
    className = "",
    autoPlay = true,
    interval = 5000,
    showDot = true,
    showArrow = true,
    contentPosition = "start",
}) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    const scrollTo = useCallback(
        (index: number) => {
            api?.scrollTo(index);
        },
        [api]
    );

    if (!slides || slides.length === 0) {
        return (
            <div className={`relative w-full h-full bg-gray-100 flex items-center justify-center ${className}`}>
                <p className="text-gray-500">No slides available</p>
            </div>
        );
    }

    const contentClass = {
        start: "items-center justify-start",
        center: "items-center justify-center",
        end: "items-center justify-end",
    }[contentPosition];

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Carousel
            key={String(autoPlay)}
            className={`relative w-full h-full overflow-hidden ${className}`}
            opts={{ loop: true }}
            plugins={autoPlay ? [
                Autoplay({
                    delay: interval,
                    stopOnInteraction: true,
                }),
            ] : []}
            setApi={setApi}
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index} className="relative">
                        <AspectRatio ratio={isMobile ? 4 / 2 : 16 / 6} className="w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
                            <motion.img
                                key={slide.id}
                                src={slide.image ? slide.image : ""}
                                alt={slide.title || "Slide image"}
                                className="w-full h-full object-cover object-center"
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{
                                    scale: index === current ? 1 : 1.1,
                                    opacity: index === current ? 1 : 0,
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                        </AspectRatio>

                        <div className="absolute inset-0 bg-black/50" />
                        <div className={`absolute inset-0 ${contentPosition === 'start'
                            ? 'bg-gradient-to-r from-black/80 via-black/40 to-black/10'
                            : contentPosition === 'end'
                                ? 'bg-gradient-to-l from-black/80 via-black/40 to-black/10'
                                : 'bg-gradient-to-b from-black/60 via-black/20 to-black/60'
                            }`} />

                        <motion.div
                            className={`absolute inset-0 flex z-20 ${contentClass}`}
                            initial="hidden"
                            animate={index === current ? "visible" : "hidden"}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.1,
                                        when: "beforeChildren",
                                        staggerChildren: 0.1,
                                    },
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <div className={`w-full h-full flex flex-col ${contentPosition === 'center'
                                ? 'text-center items-center justify-center px-6 sm:px-6 md:px-8 lg:px-12'
                                : contentPosition === 'end'
                                    ? 'text-right items-end justify-center px-6 sm:px-6 md:px-8 lg:px-12'
                                    : 'text-left items-start justify-center px-8 sm:px-6 md:px-8 lg:px-12'
                                } py-4 sm:py-6 md:py-8`}>

                                <div className={`w-full ${contentPosition === 'center' ? 'max-w-2xl mx-auto' :
                                    contentPosition === 'end' ? 'max-w-2xl ml-auto' :
                                        'max-w-2xl mr-auto'
                                    } space-y-2 sm:space-y-3 md:space-y-4`}>

                                    {slide.subtitle && (
                                        <motion.p
                                            className="text-cyan-300 text-xs sm:text-sm md:text-base font-medium mb-1 sm:mb-1.5 md:mb-2 tracking-wider uppercase drop-shadow-lg line-clamp-1 overflow-hidden text-ellipsis"
                                            variants={contentVariants}
                                            title={slide.subtitle}
                                        >
                                            {slide.subtitle}
                                        </motion.p>
                                    )}

                                    <motion.h1
                                        className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4 drop-shadow-xl line-clamp-2 overflow-hidden text-ellipsis"
                                        variants={contentVariants}
                                        title={slide.title}
                                    >
                                        {slide.title}
                                    </motion.h1>

                                    {slide.offer && (
                                        <motion.p
                                            className="text-yellow-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-xl"
                                            variants={contentVariants}
                                        >
                                            {slide.offer}
                                        </motion.p>
                                    )}

                                    {slide.description && (
                                        <motion.p
                                            className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-5 drop-shadow-lg line-clamp-2 sm:line-clamp-3 overflow-hidden"
                                            variants={contentVariants}
                                        >
                                            {slide.description}
                                        </motion.p>
                                    )}

                                    {slide.buttonText && (
                                        <motion.button
                                            className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm md:text-base shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105 active:scale-95 w-auto min-w-fit border border-yellow-400"
                                            onClick={slide.onButtonClick}
                                            variants={contentVariants}
                                        >
                                            {slide.buttonText}
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {showArrow && (
                <>
                    <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-2 md:left-4 bg-white/80 hover:bg-white text-black p-1 sm:p-1.5 md:p-2 rounded-full z-20 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 shadow-lg" />
                    <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 md:right-4 bg-white/80 hover:bg-white text-black p-1 sm:p-1.5 md:p-2 rounded-full z-20 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 shadow-lg" />
                </>
            )}

            {showDot && (
                <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 md:gap-2 z-20 px-2 py-1 rounded-full">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${index === current
                                ? "bg-yellow-400 scale-110"
                                : "bg-white/60 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>
            )}
        </Carousel>
    );
};

export default CarouselContainer;