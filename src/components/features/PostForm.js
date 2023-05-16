import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [contentOfThePost, setContentOfThePost] = useState(props.contentOfThePost || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, contentOfThePost });
    };


    return (
        <div style={{ width: '70%' }}>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="col-md-6">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder='Enter title' value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="col-md-6">
                    <Form.Label>Author</Form.Label>
                    <Form.Control placeholder='Enter author' value={author} onChange={e => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="col-md-6">
                    <Form.Label>Published date</Form.Label>
                    <Form.Control type='date' placeholder='Enter date dd-mm-yyyy' value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Leave a comment here' value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-10">
                    <Form.Label>Content of the post</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Leave a comment here' value={contentOfThePost} onChange={e => setContentOfThePost(e.target.value)} />
                </Form.Group>
                <Button variant="btn btn-outline-secondary" type="submit">{actionText}</Button>
            </Form>

        </div>
    );
};

export default PostForm;