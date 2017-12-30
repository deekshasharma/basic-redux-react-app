import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from './actions/courseActions'
import CourseList from './course/CourseList';

class App extends Component {

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>
    };

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
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
        actions: bindActionCreators(courseActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);