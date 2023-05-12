import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import Post from "../features/Post";
import { Row } from "react-bootstrap";

const Posts = props => {

    const posts = useSelector(getAllPosts);

    return(
        <div>
            <Row className="d-flex justify-content-around">{posts.map(post => <Post key={post.id} {...post} />)}</Row>
        </div>
    );
};

export default Posts;