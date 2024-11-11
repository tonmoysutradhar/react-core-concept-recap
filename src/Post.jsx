import './Post.css'

export default function Post ({post}) {
    
    const {title, body, id , userId} = post;
    

    return (
        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>UserID: {userId}</small></p>
            <p><small>PostID: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}