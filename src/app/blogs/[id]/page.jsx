

// import { useParams, useSearchParams } from 'next/navigation';

import loadBlogData from "@/utilies/loadBlogData";
import loadSingleBlogData from "@/utilies/loadBlogSingleData";

export const generateMetadata = async({params}) => {
    const {title} = await loadSingleBlogData(params.id)
    return {
        title:title,
    }
};

export const generateStaticParams = async() =>{
    const blogs = await loadBlogData();

    return blogs.map(({id})=>({
        id:id.toString()
    }))
}

const SinglePage = async ({ params }) => {
    const {id,title,body} = await loadSingleBlogData(params.id);
    return (
        <div className="border border-emerald-300 mt-3 px-2">
            <h2 className="text-2xl">{id}.{title}</h2>
            <p>{body}</p>
           
        </div>
    );
};

export default SinglePage;