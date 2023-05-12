import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../redux/postsRedux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { removePost } from "../../redux/postsRedux";


const SinglePost = props => {
    
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false);

    const dispatch = useDispatch();

    const deletePost = () => {
      dispatch(removePost(id));
      handleClose();
    };

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    if(!postData) return <Navigate to="/" />
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>{postData.title}</h1>
                <div>
                    <Link key={props.id} to={"/post/edit/" + id}>
                        <Button variant="btn btn-outline-secondary">Edit</Button>
                    </Link>
                    <Button onClick={handleShow} variant="btn btn-outline-danger">Delete</Button>
                </div>
            </div>
            <p><b>Author: </b>{postData.author} <br /><b>Published: </b>{postData.publishedDate}</p>
            <p><b>Description: </b>{postData.shortDescription}</p>

            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This operation will completely remove this post from the app. 
              <br/>Are you sure you want to do that?
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">Cancel</Button>
            <Button onClick={deletePost} variant="danger">Remove</Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
};

export default SinglePost;