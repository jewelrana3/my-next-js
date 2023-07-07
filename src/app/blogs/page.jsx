



import loadBlogData from "@/utilies/loadBlogData";
import Link from "next/link";
// import { useRouter } from "next/navigation";

// const year = [
//     {
//         id: 1,
//         year: 2016,
//         title: 'title 1'
//     },
//     {
//         id: 2,
//         year: 2016,
//         title: 'title 2'
//     },
//     {
//         id: 3,
//         year: 2016,
//         title: 'title 3'
//     },
//     {
//         id: 4,
//         year: 2016,
//         title: 'title 4'
//     }
// ]

const BlogPage = async () => {

  const res = await loadBlogData(); 

    return (
        <div className=" container mx-auto">
            {
                res.map(({ id, body, title }) => (
                    <div key={id} className="border border-emerald-300 mt-3 px-2">
                       <p className="text-2xl">{id},{title}</p>
                       <p>{body}</p>
                        <Link
                            href={`/blogs/${id}`}
                        >
                          <button className="bg-blue-500 text-white py-1 px-1">details</button>
                        </Link>
                    </div>

                ))
            }
        </div>
    );
};

export default BlogPage;