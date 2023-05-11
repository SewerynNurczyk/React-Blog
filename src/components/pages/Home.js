import AddPost from "./AddPost";
import Posts from "./Posts";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>All Posts</h1>
                <Link key={props.id} to={"/post/add"}>
                    <Button variant="btn btn-outline-secondary">
                        <AddPost />
                    </Button>
                </Link>
            </div>
            <Posts />
        </div>
    );
};

export default Home; 