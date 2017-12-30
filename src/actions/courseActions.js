import * as types from  './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesOnSuccess(courses) {
    return{type: types.LOAD_COURSES_SUCCESS, courses}
}


export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesOnSuccess(courses));
            })
            .catch(error => {
                throw (error);
            })
    }
}


