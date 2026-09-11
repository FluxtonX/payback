import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="w-full max-w-[470px] md:max-w-[768px] xl:max-w-[1250px] mx-auto px-4 md:px-6">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center list-none py-4 md:py-6 xl:pb-12 xl:pt-6 m-0 text-[14px] leading-[20px] font-sans overflow-hidden text-ellipsis capitalize"
      >
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            href="/"
            itemProp="item"
            className="text-[#a0a6ba] hover:text-[var(--brand-deep)] transition-colors whitespace-nowrap overflow-hidden text-ellipsis font-normal"
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const position = idx + 2;

          return (
            <React.Fragment key={idx}>
              <li className="select-none">
                <div className="text-[#a0a6ba] mx-1">/</div>
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className={`whitespace-nowrap overflow-hidden text-ellipsis ${
                  isLast ? 'text-[#616267]' : 'text-[#a0a6ba]'
                }`}
              >
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="text-[#a0a6ba] hover:text-[var(--brand-deep)] transition-colors font-normal"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                ) : (
                  <span itemProp="name">{item.name}</span>
                )}
                <meta itemProp="position" content={String(position)} />
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
