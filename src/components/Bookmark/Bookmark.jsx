const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <p className="text-2xl text-pink-900"><small>{title}</small></p>
        </div>
    );
};

export default Bookmark;