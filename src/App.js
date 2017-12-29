import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as courseActions from './actions/courseActions'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {title: ''}
        }
    }

    onTitleChange = (event) => {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course})
    };

    onClickSave = () => {
        this.props.createCourse(this.state.course);
    };

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>
    };

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />

                <input
                    type="submit"
                    onClick={this.onClickSave}
                    value="Save"
                />
            </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
};

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//Alternative to above line is:
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps) => This returns a function
// export default connectedStateAndProps(App);
