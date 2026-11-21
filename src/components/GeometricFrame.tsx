import React from 'react';

interface GeometricFrameProps {
  children: React.ReactNode;
  hanging?: boolean;
  wireColor?: string;
  wireHeight?: number;
  className?: string;
  innerClassName?: string;
}

/**
 * Festive geometric diamond-and-triangle wedding border seen on the hanging
 * invitation cards in the reference video.
 */
export function GeometricFrame({
  children,
  hanging = true,
  wireColor = '#6B7268',
  wireHeight = 36,
  className = '',
  innerClassName = '',
}: GeometricFrameProps) {
  return (
    <div className={`relative mx-auto w-full ${className}`}>
      {hanging && (
        <div
          className="mx-auto flex w-4/5 max-w-md justify-between px-8 pointer-events-none"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center">
            <div style={{height: wireHeight, backgroundColor: wireColor}} className="w-[2px]" />
            <div className="h-2.5 w-2.5 rounded-full border-2 border-[#C82333] bg-[#FAF6EC]" />
          </div>
          <div className="flex flex-col items-center">
            <div style={{height: wireHeight, backgroundColor: wireColor}} className="w-[2px]" />
            <div className="h-2.5 w-2.5 rounded-full border-2 border-[#C82333] bg-[#FAF6EC]" />
          </div>
        </div>
      )}

      {/* Outer patterned border using repeating SVG tile */}
      <div
        className="relative rounded-sm p-[14px] sm:p-[18px] shadow-[0_14px_34px_rgba(30,36,30,0.14)]"
        style={{
          backgroundColor: '#FAF6EC',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Crect width='36' height='36' fill='%23FAF6EC'/%3E%3Cpolygon points='18,0 36,18 18,36 0,18' fill='%23C82333'/%3E%3Cpolygon points='18,4 32,18 18,32 4,18' fill='%23E6A817'/%3E%3Cpolygon points='18,9 27,18 18,27 9,18' fill='%232D6A4F'/%3E%3Cpolygon points='18,13 23,18 18,23 13,18' fill='%23FAF6EC'/%3E%3C/svg%3E")`,
          backgroundSize: '26px 26px',
        }}
      >
        <div
          className={`relative bg-[#FDFBF5] border-2 border-[#D4AF37]/70 px-5 py-7 sm:px-10 sm:py-10 ${innerClassName}`}
        >
          {/* Subtle inner hairline gold frame */}
          <div
            className="pointer-events-none absolute inset-2 border border-[#D4AF37]/35"
            aria-hidden="true"
          />
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
