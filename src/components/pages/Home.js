//import AddPost from "./AddPost";
import Posts from "./Posts";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>All Posts</h1>
                <Button className="mb-3" variant='outline-primary' as={Link} to={'/post/add' }>Add Post</Button>
            </div>
            <Posts />
        </div>
    );
};

export default Home; 