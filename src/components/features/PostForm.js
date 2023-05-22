import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";

const PostForm = ({ action, actionText, ...props }) => {

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [contentOfThePost, setContentOfThePost] = useState(props.contentOfThePost || '');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [category, setCategory] = useState(props.category || '');
    const categories = useSelector(getAllCategories);

    const handleSubmit = () => {
        setContentError(!contentOfThePost)
        setDateError(!publishedDate)
        if (contentOfThePost && publishedDate) {
            action({ title, author, publishedDate, shortDescription, contentOfThePost, category });
        }
    };


    return (
        <div style={{ width: '70%' }}>
            <Form onSubmit={validate(handleSubmit)} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        {...register("title", { required: true, minLength: 3 })}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text" placeholder="Enter title"
                    />
                    {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
                </Form.Group>
                <Form.Group className="col-md-6">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        {...register("author", { required: true, minLength: 3 })}
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        type="text" placeholder="Enter Author"
                    />
                    {errors.author && <small className="d-block form-text text-danger mt-2">Author name is too short (min is 3)</small>}
                </Form.Group>
                <Form.Group className="col-md-6">
                    <Form.Label>Published date</Form.Label>
                    <Form.Control type='date' placeholder='Enter date dd-mm-yyyy' value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
                    {dateError && <small className="d-block form-text text-danger mt-2">Published date can't be empty</small>}
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={e => setCategory(e.target.value)} >
                        <option>Select category</option>
                        <option>{categories[0]}</option>
                        <option>{categories[1]}</option>
                        <option>{categories[2]}</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control  {...register("shortDescription", { required: true, minLength: 20 })}
                        value={shortDescription}
                        onChange={e => setShortDescription(e.target.value)}
                        type="text" placeholder="Short Description of the post"
                    />
                    {errors.author && <small className="d-block form-text text-danger mt-2">Short descriptionis too short (min is 20)</small>}
                </Form.Group>
                <Form.Group className="mb-10">
                    <Form.Label>Content of the post</Form.Label>
                    <ReactQuill as="textarea" value={contentOfThePost} onChange={setContentOfThePost} />
                    {contentError && <small className="d-block form-text text-danger mt-1">Content can't be empty</small>}
                </Form.Group>
                <Button variant="btn btn-outline-secondary" type="submit">{actionText}</Button>
            </Form>

        </div>
    );
};

export default PostForm;