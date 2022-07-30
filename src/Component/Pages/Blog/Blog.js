import React from 'react';

const Blog = () => {
    return (
        <div style={{backgroundColor: '#0a1012', paddingTop: '100px', paddingBottom: '100px', display: 'block'}}>
            <div className='blog-bg'>
                <h2 style={{
                    color: '#151B2980',
                    fontSize: '90px',
                    textTransform: 'uppercase',
                    marginTop: '0px',
                    textAlign: 'center',

                    }}
                >Demo View</h2>
                
            </div>
            <div>
                <h4 className='blog-h4' style={{
                    fontSize: '24px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    color: '#fec544',
                    letterSpacing: '1px',
                    marginTop: '-180px',
                    textAlign: 'center'
                }}>Demo View</h4>
            </div>
        </div>
    );
};

export default Blog;