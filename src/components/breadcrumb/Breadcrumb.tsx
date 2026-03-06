import React from 'react';
import {Link} from "@inertiajs/react";
import { FaMinus } from "react-icons/fa";

interface BreadcrumbProps {
  title: string;
  pageTitle: string;
  pageLink: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({title ,pageTitle, pageLink}) => {
  return (
    <section className="pt-36">
        <div className="container">
            <h5 className="text-black text-[32px] font-semibold mb-1">{title}</h5>
			<div className="flex items-center gap-2">
				<Link href="/" className='text-gray-2 text-sm font-semibold hover:text-brand'>Home</Link>
				<span className="text-gray-2 text-sm font-semibold mt-1"><FaMinus /></span>
				<Link href={pageLink} className='text-gray-2 text-sm font-semibold hover:text-brand'>{pageTitle}</Link>
			</div>
        </div>
    </section>
  )
}

export default Breadcrumb
