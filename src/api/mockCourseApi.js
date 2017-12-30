import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "id1",
        title: "Title1",
        watchHref: "http://bonsaiilabs.com/",
        authorId: "author1",
        length: "5:10",
        category: "category1"
    },
    {
        id: "id2",
        title: "Title2",
        watchHref: "http://bonsaiilabs.com/",
        authorId: "author2",
        length: "5:10",
        category: "category2"
    },
    {
        id: "id3",
        title: "Title3",
        watchHref: "http://bonsaiilabs.com/",
        authorId: "author3",
        length: "5:10",
        category: "category3"
    },
    {
        id: "id4",
        title: "Title4",
        watchHref: "http://bonsaiilabs.com/",
        authorId: "author4",
        length: "5:10",
        category: "category4"
    },
    {
        id: "id5",
        title: "Title5",
        watchHref: "http://bonsaiilabs.com/",
        authorId: "author5",
        length: "5:10",
        category: "category5"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id == course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    course.id == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default CourseApi;