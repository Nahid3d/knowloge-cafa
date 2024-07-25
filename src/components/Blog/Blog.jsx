import { FaBookmark } from "react-icons/fa6";
const Blog = ({ blog,handleAdd}) => {
   const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog ;
    return (
        <div className="">
            
           <img className="w-[480px] h-[250px] rounded-lg" src={cover} alt="`the picture title ${title}" />
           <div className="flex justify-between items-center">
            <div className="flex justify-between my-4">
            <div className=" flex gap-x-2">
            <img className="w-14 rounded-full" src={author_img} alt="" />
            <div>
            <h3 className="font-bold flex items-start">{author}</h3>
                <p>{posted_date} (4 day ago)</p>
            </div>
            </div>
            </div>
            
            <div>
                <span>{reading_time} min red</span>
                <button onClick={() => handleAdd(blog)} className='ml-2 text-sky-600 font-bold'><FaBookmark /></button>
            </div>
           </div><br />
           <h3 className="text-3xl items-start flex mb-4">{title}</h3>
            <p className="flex items-start">{ hashtags }</p>

        </div>
    );
};

export default Blog;