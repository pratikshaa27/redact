import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph } = blog;
  return (
    <div className="h-full flex flex-col group hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-dark relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark">
      <Link
        href="/blog-details"
        className="relative block w-full h-48 md:h-60 lg:h-72 overflow-hidden"
      >
        <Image
          src={image}
          alt="image"
          className="object-cover w-full h-full"
          fill
        />
      </Link>
      <div className="p-4 sm:p-6 flex-1">
        <h3>
          <Link
            href="/blog-details"
            className="block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-base font-medium text-body-color dark:text-white">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
