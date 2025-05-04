"use client";

import React, { useEffect, useState } from "react";

export default function BackgroundGrid() {
    // Size of each grid cell in pixels
    const boxSize = 48;

    // Color palette for cell hover effects - using your custom CSS variables
    const colors = [
        "var(--custom-seafoam)", // #81b29a - Card backgrounds
        "var(--custom-peach)", // #eab69f - Potential accent color
        "var(--custom-coral)", // #e07a5f - Sidebar accent, contact page
        "var(--custom-gold)", // #f2cc8f - Potential highlight color
        "var(--custom-sage)", // #babf95 - Potential accent color
        "var(--custom-teal)", // #5f797b - Potential accent color
        "var(--custom-navy)", // #3d405b - Sidebar background, about page text
        "var(--custom-brick)", // #8f5d5d - Potential text or accent color
    ];

    // State for storing grid dimensions
    const [cols, setCols] = useState(0); // Number of columns in the grid
    const [rows, setRows] = useState(0); // Number of rows in the grid

    // Calculate grid dimensions on component mount and window resize
    useEffect(() => {
        function updateGrid() {
            // Calculate columns and rows needed to cover viewport (plus 1 extra for safety)
            setCols(Math.ceil(window.innerWidth / boxSize) + 1);
            setRows(Math.ceil(window.innerHeight / boxSize) + 1);
        }
        updateGrid();
        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, []);

    // Handle mouse hover effects on grid cells
    useEffect(() => {
        // Track which cell was last hovered to avoid unnecessary redraws
        let lastRow: number | null = null;
        let lastCol: number | null = null;

        // Select a random color from our palette
        function getRandomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        // Handle mouse movement to color cells
        function handleMouseMove(e: MouseEvent) {
            // Calculate which grid cell contains the mouse pointer
            const col = Math.floor(e.clientX / boxSize);
            const row = Math.floor(e.clientY / boxSize);

            // If mouse is still in the same cell, do nothing
            if (row === lastRow && col === lastCol) return;

            // Clear color from previous cell
            if (lastRow !== null && lastCol !== null) {
                const prev = document.querySelector<HTMLElement>(`[data-row="${lastRow}"][data-col="${lastCol}"]`);
                if (prev) prev.style.backgroundColor = "";
            }

            // Color the new cell
            const cell = document.querySelector<HTMLElement>(`[data-row="${row}"][data-col="${col}"]`);
            if (cell) cell.style.backgroundColor = getRandomColor();

            // Update last position
            lastRow = row;
            lastCol = col;
        }

        // Set up and clean up event listener
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cols, rows]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-custom-cream pointer-events-none">
            {/* Main grid container */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, ${boxSize}px)`,
                    gridTemplateRows: `repeat(${rows}, ${boxSize}px)`,
                }}>
                {/* Generate all grid cells */}
                {Array.from({ length: cols * rows }).map((_, idx) => {
                    const row = Math.floor(idx / cols);
                    const col = idx % cols;
                    return (
                        <div
                            key={idx}
                            data-row={row}
                            data-col={col}
                            style={{
                                width: boxSize,
                                height: boxSize,
                                boxSizing: "border-box",
                                // GRIDLINES REMOVED
                                transition: "background-color 0.3s",
                            }}
                        />
                    );
                })}
            </div>

            {/* Blur effect layers */}
            <div className="absolute inset-0 pointer-events-none">
                {/* MAIN BLUR EFFECT: Radial gradient mask */}
                <div
                    className="absolute inset-0"
                    style={{
                        // BUG: These should match! The maskImage has incorrect values
                        maskImage: "radial-gradient(circle at 60% center, transparent 10%, black 70%)", // ERROR: Second value must be higher than first
                        WebkitMaskImage: "radial-gradient(circle at 60% center, transparent 10%, black 70%)", // This is correct

                        // CORRECT VERSION WOULD BE:
                        // maskImage: "radial-gradient(circle at 60% center, transparent 50%, black 90%)",
                        // WebkitMaskImage: "radial-gradient(circle at 60% center, transparent 50%, black 90%)",

                        // POSITIONING CONTROLS:
                        // "circle at 60% center" - Position of blur center (higher first value = more to the right)
                        // "transparent 50%" - Size of clear area (higher = larger clear center)
                        // "black 90%" - How gradual the blur is (bigger gap between percentages = more gradual)

                        backgroundColor: "var(--custom-cream)",
                        opacity: 0.8, // MAIN BLUR INTENSITY: Higher = stronger blur (0-1 scale)
                    }}
                />

                {/* SIDEBAR BLUR: Additional blur layer for the left navbar */}
            </div>
        </div>
    );
}
