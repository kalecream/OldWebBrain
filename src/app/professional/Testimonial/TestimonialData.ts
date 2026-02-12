export interface Testimonial {
  rating: number;
  text: string;
  name: string;
  title: string;
}

export interface TestimonialProps {
  title?: string;
  items?: Testimonial[];
  speed?: string;
  className?: string;
}

// TODO: Link Testimonials to Projects
export const TestimonialData: Testimonial[] = [
  {
    rating: 5,
    text: "My experience with her has been efficient, communicative and understanding...",
    name: "Mikkel Green",
    title: "Photographer"
  }
];

