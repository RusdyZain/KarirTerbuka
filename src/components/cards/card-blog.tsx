import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type BlogType = {
    id: number;
    title: string;
    subTitle: string[];
    profilUploader: string;
    nameUploader: string;
    date: string;
    blogSection: string[][];
    imageBlog: string;
}

type CardBlogProps = {
    data: BlogType;
};

const CardBlog = ({ data }: CardBlogProps): JSX.Element => {
    const truncateText = (text: string, maxLength: number) => {
        if (text?.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div>
            <Link className="group rounded-xl overflow-hidden pb-8" href={`/blog/subBlog/${data?.id}`} passHref>
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    {data?.imageBlog && typeof data?.imageBlog === 'string' && (
                        <Image
                            width={500}
                            height={500}
                            className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src={data?.imageBlog}
                            alt="Image Description"
                        />
                    )}
                </div>
                <div className="mt-7">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                        {data?.title}
                    </h3>
                    <p className="mt-3 text-justify">
                        {truncateText(data?.blogSection[0][0], 100)}

                    </p>
                    <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                        Read more
                        <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"  >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </p>
                </div>
            </Link>
        </div>
    )
}
export default CardBlog;