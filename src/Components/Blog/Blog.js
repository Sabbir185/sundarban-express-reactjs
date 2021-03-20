import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    const blog = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const blogStyle = {
        margin:'18px',
        backgroundColor:'lightgray',
        borderRadius:'20px',
        padding:'20px',
    }
    return (
        <div className='container'>
            <div className='bg-dark mt-3 rounded mb-3'>
                <Header></Header>
            </div>
            {
                blog.map(fakeBlog => <div style={blogStyle}>
                    <h5>Article of Dummy text</h5>
                   <p>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus cupiditate maiores non odio animi molestias enim assumenda repellendus unde ex quibusdam, atque ea reiciendis porro aut ipsam! Eveniet minus dicta ea culpa distinctio tempora nostrum earum facilis hic, cum ipsa, amet aspernatur ipsam saepe ad nemo alias dolores suscipit laborum?
                   </p>
                   <small><em>writter : Sabbir Ahmmed</em></small>
                </div>
                )
            }
        </div>
    );
};

export default Blog;