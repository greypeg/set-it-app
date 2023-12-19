import Link from "next/link";

export const Header: React.FC<{ heading: string, linkName: string, linkUrl: string; paragraph: string }> = ({ heading,
    paragraph,
    linkName,
    linkUrl = "#" }) => {
    return (
        <div>
            <div className="flex justify-center">
                <h1 className='mr-4 text-3xl font-bold sm:text-4xl text-[#5856B9]'>SetApp.</h1>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                {paragraph} {' '}
                <Link href={linkUrl} className="font-medium text-[#5856B9] hover:text-purple-500">
                    {linkName}
                </Link>
                <br />
            </p>
        </div>
    )
}