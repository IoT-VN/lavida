import { HeroSection } from '@/components/sections/hero-section';
import { ProjectOverviewSection } from '@/components/sections/project-overview-section';
import { PropertyGallerySection } from '@/components/sections/property-gallery-section';
import { FloorPlansSection } from '@/components/sections/floor-plans-section';
import { AmenitiesSection } from '@/components/sections/amenities-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { LocationSection } from '@/components/sections/location-section';
import { DeveloperSection } from '@/components/sections/developer-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectOverviewSection />
      <PropertyGallerySection />
      <FloorPlansSection />
      <AmenitiesSection />
      <PricingSection />
      <LocationSection />
      <DeveloperSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
