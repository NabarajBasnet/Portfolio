'use client';

import { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { gsap } from 'gsap';

const TargetCursor = ({
    targetSelector = '.cursor-target',
    hideDefaultCursor = true,
    hoverDuration = 0.3,
}) => {
    const cursorRef = useRef(null);
    const hexRef = useRef(null);
    const particlesRef = useRef([]);
    const scanLineRef = useRef(null);
    const energyRingsRef = useRef([]);
    const targetIndicatorsRef = useRef([]);
    const [isLocked, setIsLocked] = useState(false);
    const [isCharging, setIsCharging] = useState(false);

    const isMobile = useMemo(() => {
        const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = window.innerWidth <= 768;
        return hasTouchScreen && isSmallScreen;
    }, []);

    const moveCursor = useCallback((x, y) => {
        if (!cursorRef.current) return;
        gsap.to(cursorRef.current, {
            x,
            y,
            duration: isLocked ? 0.4 : 0.15,
            ease: isLocked ? 'power2.out' : 'power3.out'
        });
    }, [isLocked]);

    // Create energy particles
    const createParticle = useCallback((x, y, color = '#ef4444') => {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            width: 2px;
            height: 2px;
            background: ${color};
            border-radius: 50%;
            box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
            left: ${x}px;
            top: ${y}px;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 40;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        gsap.to(particle, {
            x: tx,
            y: ty,
            scale: 0,
            opacity: 0,
            duration: 0.8 + Math.random() * 0.4,
            ease: 'power2.out',
            onComplete: () => {
                document.body.removeChild(particle);
            }
        });
    }, []);

    useEffect(() => {
        if (isMobile || !cursorRef.current) return;

        const originalCursor = document.body.style.cursor;
        if (hideDefaultCursor) {
            document.body.style.cursor = 'none';
        }

        let activeTarget = null;
        let currentLeaveHandler = null;

        gsap.set(cursorRef.current, {
            xPercent: -50,
            yPercent: -50,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        // Continuous hex rotation
        gsap.to(hexRef.current, {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: 'none'
        });

        // Scan line animation
        gsap.to(scanLineRef.current, {
            y: 40,
            duration: 1.5,
            repeat: -1,
            ease: 'power1.inOut'
        });

        // Energy rings pulsing
        energyRingsRef.current.forEach((ring, i) => {
            gsap.to(ring, {
                scale: 1.3 + i * 0.1,
                opacity: 0,
                duration: 2 + i * 0.3,
                repeat: -1,
                ease: 'power2.out'
            });
        });

        const moveHandler = e => {
            moveCursor(e.clientX, e.clientY);

            // Random particle generation while moving
            if (Math.random() > 0.85) {
                createParticle(e.clientX, e.clientY, '#ef4444');
            }
        };
        window.addEventListener('mousemove', moveHandler);

        const mouseDownHandler = () => {
            setIsCharging(true);

            // Hex scale down and rotate faster
            gsap.to(hexRef.current, {
                scale: 0.7,
                duration: 0.2,
                ease: 'power2.out'
            });

            // Create burst of particles
            const x = gsap.getProperty(cursorRef.current, 'x');
            const y = gsap.getProperty(cursorRef.current, 'y');
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    createParticle(x, y, '#dc2626');
                }, i * 20);
            }

            // Target indicators pulse
            targetIndicatorsRef.current.forEach((indicator, i) => {
                gsap.to(indicator, {
                    scale: 1.5,
                    opacity: 1,
                    duration: 0.2,
                    delay: i * 0.05
                });
            });
        };

        const mouseUpHandler = () => {
            setIsCharging(false);

            gsap.to(hexRef.current, {
                scale: 1,
                duration: 0.3,
                ease: 'elastic.out(1, 0.5)'
            });

            targetIndicatorsRef.current.forEach((indicator, i) => {
                gsap.to(indicator, {
                    scale: 1,
                    opacity: 0.6,
                    duration: 0.3,
                    delay: i * 0.05
                });
            });

            // Release burst
            const x = gsap.getProperty(cursorRef.current, 'x');
            const y = gsap.getProperty(cursorRef.current, 'y');
            for (let i = 0; i < 20; i++) {
                createParticle(x, y, '#f87171');
            }
        };

        window.addEventListener('mousedown', mouseDownHandler);
        window.addEventListener('mouseup', mouseUpHandler);

        const enterHandler = e => {
            const target = e.target.closest(targetSelector);
            if (!target || activeTarget === target) return;

            if (currentLeaveHandler) {
                activeTarget?.removeEventListener('mouseleave', currentLeaveHandler);
            }

            activeTarget = target;
            setIsLocked(true);

            // Lock-on animation
            gsap.to(hexRef.current, {
                rotation: '+=180',
                scale: 1.3,
                duration: 0.4,
                ease: 'back.out(2)'
            });

            // Show target indicators
            targetIndicatorsRef.current.forEach((indicator, i) => {
                gsap.fromTo(indicator,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 0.8,
                        duration: 0.3,
                        delay: i * 0.08,
                        ease: 'back.out(2)'
                    }
                );
            });

            // Particle burst on lock
            const x = gsap.getProperty(cursorRef.current, 'x');
            const y = gsap.getProperty(cursorRef.current, 'y');
            for (let i = 0; i < 16; i++) {
                createParticle(x, y, '#ef4444');
            }

            const leaveHandler = () => {
                setIsLocked(false);
                activeTarget = null;

                gsap.to(hexRef.current, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });

                // Hide target indicators
                targetIndicatorsRef.current.forEach((indicator) => {
                    gsap.to(indicator, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.2
                    });
                });

                if (currentLeaveHandler) {
                    target.removeEventListener('mouseleave', currentLeaveHandler);
                }
                currentLeaveHandler = null;
            };

            currentLeaveHandler = leaveHandler;
            target.addEventListener('mouseleave', leaveHandler);
        };

        window.addEventListener('mouseover', enterHandler);

        const scrollHandler = () => {
            if (!activeTarget || !cursorRef.current) return;
            const mouseX = gsap.getProperty(cursorRef.current, 'x');
            const mouseY = gsap.getProperty(cursorRef.current, 'y');
            const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
            const isStillOverTarget = elementUnderMouse && elementUnderMouse.closest(targetSelector) === activeTarget;

            if (!isStillOverTarget && currentLeaveHandler) {
                currentLeaveHandler();
            }
        };
        window.addEventListener('scroll', scrollHandler, { passive: true });

        return () => {
            window.removeEventListener('mousemove', moveHandler);
            window.removeEventListener('mouseover', enterHandler);
            window.removeEventListener('mousedown', mouseDownHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
            window.removeEventListener('scroll', scrollHandler);
            if (activeTarget && currentLeaveHandler) {
                activeTarget.removeEventListener('mouseleave', currentLeaveHandler);
            }
            document.body.style.cursor = originalCursor;
            document.querySelectorAll('[data-cursor-particle]').forEach(p => p.remove());
        };
    }, [targetSelector, moveCursor, createParticle, hideDefaultCursor, isMobile, isLocked]);

    if (isMobile) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999]"
            style={{ willChange: 'transform' }}
        >
            {/* Hexagonal core */}
            <div
                ref={hexRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ willChange: 'transform' }}
            >
                {/* Main hexagon */}
                <svg width="24" height="24" viewBox="0 0 40 40" className="drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                    <polygon
                        points="20,2 35,11 35,29 20,38 5,29 5,11"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="2"
                        className={isLocked ? 'animate-pulse' : ''}
                    />
                    <polygon
                        points="20,6 31,13 31,27 20,34 9,27 9,13"
                        fill="rgba(239,68,68,0.1)"
                        stroke="rgba(239,68,68,0.3)"
                        strokeWidth="1"
                    />
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="50%" stopColor="#dc2626" />
                            <stop offset="100%" stopColor="#f87171" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Corner nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500 rounded-full shadow-[0_0_4px_#ef4444]"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-11px)`,
                        }}
                    />
                ))}
            </div>

            {/* Center dot with energy */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={`w-2 h-2 rounded-full ${isCharging ? 'bg-red-700' : 'bg-red-500'} shadow-[0_0_10px_currentColor] transition-colors duration-200`} />
            </div>

            {/* Scan line */}
            <div
                ref={scanLineRef}
                className="absolute top-1/2 left-1/2 w-20 h-0.5 -translate-x-1/2 -translate-y-1/2 opacity-30"
                style={{
                    background: 'linear-gradient(90deg, transparent, #ef4444, transparent)',
                    boxShadow: '0 0 8px #ef4444'
                }}
            />

            {/* Energy rings */}
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    ref={el => energyRingsRef.current[i] = el}
                    className="absolute top-1/2 left-1/2 rounded-full border border-red-500/30"
                    style={{
                        width: '18px',
                        height: '18px',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 0 8px rgba(239,68,68,0.3)'
                    }}
                />
            ))}

            {/* Target indicators (4 corners) */}
            {[
                { top: '-40px', left: '-40px', rotate: '0deg' },
                { top: '-40px', right: '-40px', rotate: '90deg' },
                { bottom: '-40px', right: '-40px', rotate: '180deg' },
                { bottom: '-40px', left: '-40px', rotate: '270deg' }
            ].map((pos, i) => (
                <div
                    key={i}
                    ref={el => targetIndicatorsRef.current[i] = el}
                    className="absolute opacity-0"
                    style={{
                        ...Object.fromEntries(Object.entries(pos).filter(([k]) => k !== 'rotate')),
                        transform: `rotate(${pos.rotate})`,
                        transformOrigin: 'center'
                    }}
                >
                    <svg width="12" height="12" viewBox="0 0 20 20">
                        <path
                            d="M0,0 L15,0 L15,2 L2,2 L2,15 L0,15 Z"
                            fill="#ef4444"
                            className="drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]"
                        />
                    </svg>
                </div>
            ))}

            {/* Outer grid circle */}
            <div className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-red-500/20 animate-spin-slow" style={{ animationDuration: '12s' }} />

            {/* Tech elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {[0, 90, 180, 270].map((angle, i) => (
                    <div
                        key={i}
                        className="absolute w-5 h-0.5 bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
                        style={{
                            transform: `rotate(${angle}deg)`,
                            transformOrigin: 'center'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TargetCursor;
