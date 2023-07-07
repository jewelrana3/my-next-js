import loadBlogData from '@/utilies/loadBlogData';


const SinglePage = ({params}) => {
 const blogs = loadBlogData(params.id)
 return <div>Single Bolgs{blogs}</div>
};

export default SinglePage;