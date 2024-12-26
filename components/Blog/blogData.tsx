import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "1. Data Redaction",
    paragraph:
      "Automatically redact sensitive information like PII, financial details, and personal identifiers from documents, images, and videos.",
    image: "/images/blog/i1.png",
  },
  {
    id: 2,
    title: "2. Advanced NLP-Based Entity Detection",
    paragraph:
      "Identify and classify sensitive entities (names, locations, dates, etc.) using NLP techniques and AI.",
    image: "/images/blog/i2.png",
  },
  {
    id: 3,
    title: "3. Customizable Redaction Levels",
    paragraph:
      "Choose between full or partial redaction based on your security needs.",
    image: "/images/blog/i3.png",
  },
  {
    id: 4,
    title: "4. Multiformat Redaction",
    paragraph:
      "Handle multiple file formats, including PDFs, images, videos, and Word documents.",
    image: "/images/blog/i4.png",
  },
  {
    id: 5,
    title: "5. AI-Powered Synthetic Data Generation",
    paragraph:
      "Create redacted versions of sensitive datasets for training AI models without risking data exposure.",
    image: "/images/blog/i5.png",
  },
  {
    id: 6,
    title: "6. Gradational Redaction",
    paragraph:
      "Allow users to define which data fields need varying degrees of redaction.",
    image: "/images/blog/i6.png",
  },
];
export default blogData;
