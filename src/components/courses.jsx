import PropTypes from 'prop-types';

function Course(props){

    return(
        <div className="container course rounded-4 shadow border p-3 m-4 mx-auto d-flex justify-content-between align-items-center" style={{ marginLeft: '10px', marginRight: '10px' }}>
            <h1 className='title'>{props.title}</h1>
            <a href={props.link} className="btn">Go To Course</a>
        </div>
    )
}

Course.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Course