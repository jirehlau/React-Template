export default function Post(props){
    return(
        <div classname="post">
            <p className="title">{props.post._id}</p>
            <p className="content">{props.post.content}</p>
        </div>
    )
}