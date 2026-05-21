"use client";

const clients = [
  { name: "ISPR",             abbr: "IS" },
  { name: "Xephra",           abbr: "XP" },
  { name: "BHTD",             abbr: "BH" },
  { name: "Police Foundation",abbr: "PF" },
  { name: "SixthLedger",      abbr: "SL" },
  { name: "FinTech Co.",      abbr: "FT" },
  { name: "LogiCore",         abbr: "LC" },
  { name: "EduSpark",         abbr: "ES" },
  { name: "PropNest",         abbr: "PN" },
  { name: "RetailX",          abbr: "RX" },
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center mx-6 px-5 py-3 bg-white rounded-xl border border-border-gray hover:border-brand-red/25 hover:shadow-sm transition-all duration-300 cursor-default group">
      <span className="text-sm font-semibold text-charcoal whitespace-nowrap group-hover:text-brand-red transition-colors">
        {name}
      </span>
    </div>
  );
}

export default function LogoCarousel() {
  const doubled = [...clients, ...clients];
  return (
    <div className="overflow-hidden w-full select-none">
      <div className="carousel-track">
        {doubled.map((c, i) => (
          <LogoItem key={i} name={c.name} />
        ))}
      </div>
    </div>
  );
}
