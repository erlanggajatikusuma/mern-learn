import React from 'react'
import './createBlog.scss'
import {Input, Button, Upload, TextArea, Gap, Link}  from '../../components'
import {useHistory} from 'react-router-dom'

function CreateBlog() {
    const history = useHistory();
    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" />
            </div>
        </div>
    )
}

export default CreateBlog
