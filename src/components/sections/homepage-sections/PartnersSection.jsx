import { useEffect, useState } from "react";
import Button from "@components/ui/Button";
import PartnerLogo from "@components/ui/PartnerLogo";
import SectionLoader from "@components/sections/common-sections/SectionLoader";
import { fetchActivePartners } from "@data"; // ✅ centralized data logic

/**
 * PartnersSection
 * - Desktop: two animated marquee lanes in opposite directions.
 * - Mobile: static responsive logo grid (no animation issues).
 * - Accessible, responsive, and uses globals.css tokens.
 */
export default function PartnersSection() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadPartners = async () => {
      setLoading(true);
      setErrorMsg("");

      try {
        const data = await fetchActivePartners(); // ✅ centralized data logic
        setPartners(data);
      } catch (error) {
        console.error(error);
        setErrorMsg("Failed to load partners. Please try again later.");
        setPartners([]);
      } finally {
        setLoading(false);
      }
    };

    loadPartners();
  }, []);

  // Map Supabase rows into the shape used by the UI
  const allPartners = partners.map((p) => ({
    ...p,
    groupTitle: formatCategory(p.category),
  }));

  // Duplicate arrays to create seamless marquee loops (for desktop/tablet)
  const laneA = [...allPartners, ...allPartners];
  const laneB = [
    ...allPartners.slice().reverse(),
    ...allPartners.slice().reverse(),
  ];

  return (
    <section
      className="section-container font-sans section-light surface-pattern"
      role="region"
      aria-labelledby="partners-heading"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div className="text-left">
          <p className="text-xs tracking-widest text-white/60 uppercase mb-2">
            Thank you to our community of supporters
          </p>
          <h2
            id="partners-heading"
            className="heading heading-h2 font-bold leading-tight"
          >
            Our <span className="text-gradient">Sponsors &amp; Partners</span>
          </h2>
        </div>
        <div>
          <Button to="/partners" variant="primary">
            Meet Our Partners →
          </Button>
        </div>
      </div>

      {/* Loading / Error / Content states */}
      {loading ? (
        <SectionLoader />
      ) : errorMsg ? (
        <p className="text-center text-sm text-red-400">{errorMsg}</p>
      ) : allPartners.length === 0 ? (
        <p className="text-center text-sm text-white/60">
          Partners will appear here soon.
        </p>
      ) : (
        <>
          {/* DESKTOP / TABLET: marquee lanes */}
          <div className="hidden sm:block">
            <div
              className="relative w-full overflow-hidden rounded-2xl bg-white ring-1 ring-accent/15"
              aria-live="polite"
            >
              {/* Left/Right decorative fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-20" />

              {/* Lane A (left to right) */}
              <div
                className="group whitespace-nowrap"
                aria-label="Partners marquee lane A"
                role="list"
              >
                <div className="flex min-w-full items-center gap-10 sm:gap-12 py-5 sm:py-6 px-6 animate-marquee motion-reduce:animate-none">
                  {laneA.map((partner, idx) => (
                    <div
                      key={`A-${partner.id ?? "x"}-${idx}`}
                      role="listitem"
                      className="flex-none"
                    >
                      <PartnerLogo
                        partner={partner}
                        context="home"
                        theme="light"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider between lanes */}
              <div className="h-px bg-accent/10" />

              {/* Lane B (right to left) */}
              <div
                className="group whitespace-nowrap"
                aria-label="Partners marquee lane B"
                role="list"
              >
                <div className="flex min-w-full items-center gap-10 sm:gap-12 py-5 sm:py-6 px-6 animate-marquee-reverse motion-reduce:animate-none">
                  {laneB.map((partner, idx) => (
                    <div
                      key={`B-${partner.id ?? "x"}-${idx}`}
                      role="listitem"
                      className="flex-none"
                    >
                      <PartnerLogo
                        partner={partner}
                        context="home"
                        theme="light"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE: uniform logo tiles (no animation) */}
          <div className="sm:hidden">
            <div
              className="w-full rounded-2xl bg-white ring-1 ring-accent/15 px-4 py-5"
              aria-label="Partners logos"
            >
              <div className="grid grid-cols-2 gap-3">
                {allPartners.map((partner) => (
                  <PartnerLogo
                    key={partner.id}
                    partner={partner}
                    context="home"
                    theme="light"
                    className="w-full"
                  />
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs text-[#0A1A2F]/60 text-center">
              Tap a logo to visit the partner&apos;s website.
            </p>
          </div>
        </>
      )}
    </section>
  );
}

/**
 * Format enum category into a human-readable group title.
 * Example: "industry_partner" -> "Industry Partner"
 */
function formatCategory(category) {
  if (!category) return "Partner";
  return category
    .toString()
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}