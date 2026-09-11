import React from 'react';
import Link from 'next/link';

export const Breadcrumbs: React.FC = () => {
  return (
    <div className="w-full max-w-[470px] md:max-w-[768px] xl:max-w-[1250px] mx-auto px-4 md:px-6 xl:px-0 font-sans">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center list-none py-4 md:pt-6 md:pb-12 m-0 overflow-hidden text-ellipsis capitalize text-[14px]"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <Link
            itemProp="item"
            href="/"
            className="text-[#a0a6ba] hover:text-[var(--brand-deep)] transition-colors cursor-pointer font-normal"
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        <li>
          <div className="text-[#a0a6ba] mx-1">/</div>
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="whitespace-nowrap overflow-hidden text-ellipsis text-[#616267]"
        >
          <span itemProp="name">Testimonials</span>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumbs;
