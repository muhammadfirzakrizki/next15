// import Link from "next/link";


// export default async function NewsArticle({
//     params, searchParams }: {
//         params: { articleId: string },
//         searchParams: { lang?: string }
//     }) {
//     const { articleId } = await params;
//     const { lang } = await searchParams;

//     const allLanguages = ['en', 'fr', 'es'];
//     return (
//         <div>
//             <h1>News Article</h1>
//             <p>Article ID: {articleId}</p>
//             <p>Language: {lang}</p>
//             {allLanguages.map((language, index) => (
//                 <Link key={index} href={`/articles/${articleId}?lang=${language}`} className="block bg-blue-600 text-white rounded-xl py-4 px-6 text-center font-semibold text-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300">
//                     Read in {language}
//                 </Link>
//             ))}

//         </div>
//     );
// }
"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function NewsArticle() {

    const params = useParams();
    const searchParams = useSearchParams();

    const articleId = params.articleId as string;
    const lang = searchParams.get("lang") ?? "en";

    const allLanguages = ["en", "fr", "es"];


    return (
        <div>
            <h1>News Article</h1>
            <p>Article ID: {articleId}</p>
            <p>Language: {lang}</p>
            {allLanguages.map((language, index) => (
                <Link key={index} href={`/articles/${articleId}?lang=${language}`} className="block bg-blue-600 text-white rounded-xl py-4 px-6 text-center font-semibold text-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300">
                    Read in {language}
                </Link>
            ))}

        </div>
    );
}