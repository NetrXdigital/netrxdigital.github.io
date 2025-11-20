"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridBackgroundProps {
    className?: string;
}

export function InteractiveGridBackground({
    className,
}: InteractiveGridBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = container.offsetWidth;
        let height = container.offsetHeight;
        let points: Point[] = [];
        let mouse = { x: -1000, y: -1000 };

        const SPACING = 40; // Density adjusted
        const RADIUS = 1.5;
        const COLOR = "rgba(0, 166, 255, 1)"; // Theme blue
        const WAVE_RADIUS = 400;
        const WAVE_STRENGTH = 400;

        class Point {
            x: number;
            y: number;
            originX: number;
            originY: number;
            vx: number;
            vy: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.originX = x;
                this.originY = y;
                this.vx = 0;
                this.vy = 0;
            }

            update() {
                // Distance to mouse
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distanceSq = dx * dx + dy * dy;
                const waveRadiusSq = WAVE_RADIUS * WAVE_RADIUS;

                // Wave force (repulsion)
                if (distanceSq < waveRadiusSq) {
                    const distance = Math.sqrt(distanceSq);
                    const force = (WAVE_RADIUS - distance) / WAVE_RADIUS;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle) * force * 5;
                    this.vy += Math.sin(angle) * force * 5;
                }

                // Spring force (return to origin)
                const springK = 0.05;
                const friction = 0.9;

                const dxOrigin = this.originX - this.x;
                const dyOrigin = this.originY - this.y;

                this.vx += dxOrigin * springK;
                this.vy += dyOrigin * springK;

                this.vx *= friction;
                this.vy *= friction;

                this.x += this.vx;
                this.y += this.vy;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, RADIUS, 0, Math.PI * 2);
                ctx.fillStyle = COLOR;
                ctx.fill();
            }
        }

        const init = () => {
            width = container.offsetWidth;
            height = container.offsetHeight;
            canvas.width = width;
            canvas.height = height;

            points = [];
            for (let x = 0; x < width; x += SPACING) {
                for (let y = 0; y < height; y += SPACING) {
                    points.push(new Point(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            points.forEach((point) => {
                point.update();
                point.draw(ctx);
            });
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleResize = () => {
            init();
        };

        init();
        animate();

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn("absolute inset-0 overflow-hidden", className)}
        >
            <canvas ref={canvasRef} className="block" />
        </div>
    );
}
