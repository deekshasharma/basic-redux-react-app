import React from 'react';


const CourseListRow = ({course}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    )

};

export default CourseListRow;