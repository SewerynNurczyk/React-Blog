import AddPostForm from "../features/AddPostForm";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";

const AddPost = () => {
    return (
        <Row className='justify-content-center'>
            <div className='col-6'>
                <h2>ADD POST</h2>
                <AddPostForm />
            </div>
        </Row>
    );
};

export default AddPost; 