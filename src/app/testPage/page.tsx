// src/app/simple-grid/page.tsx
"use client";

import React, { useEffect, useState } from "react";

export default function SimpleGridPage() {
    const boxSize = 48;
    const colors = [
        "#93c5fd", // blue-300
        "#f9a8d4", // pink-300
        "#86efac", // green-300
        "#fde047", // yellow-300
        "#fca5a5", // red-300
        "#d8b4fe", // purple-300
    ];

    const [cols, setCols] = useState(0);
    const [rows, setRows] = useState(0);

    // Calculate how many rows/cols fit the viewport
    useEffect(() => {
        function updateGrid() {
            setCols(Math.ceil(window.innerWidth / boxSize) + 1);
            setRows(Math.ceil(window.innerHeight / boxSize) + 1);
        }
        updateGrid();
        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden bg-custom-cream">
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, ${boxSize}px)`,
                    gridTemplateRows: `repeat(${rows}, ${boxSize}px)`,
                }}>
                {Array.from({ length: cols * rows }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: boxSize,
                            height: boxSize,
                            boxSizing: "border-box",
                            border: "1px solid rgba(100,100,100,0.2)",
                            transition: "background-color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            const color = colors[Math.floor(Math.random() * colors.length)];
                            console.log("hover cell", i);
                            e.currentTarget.style.backgroundColor = color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "";
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
