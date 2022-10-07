import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignupStudent from "../views/SignupStudent.vue";
import SignupInstructor from "../views/SignupInstructor.vue";
import SignupInstitute from "../views/SignupInstitute.vue";

import HomePage from "../views/HomePage.vue";
import MyDesk from "../views/ClassRoom/Desk.vue";
import Courses from "../views/ClassRoom/Courses.vue";
import Instructors from "../views/ClassRoom/Instructors.vue";
import InstituteInstructorList from "../views/InstituteInstructorList.vue";
import InstituteStudentList from "../views/InstituteStudentList.vue";
import Students from "../views/ClassRoom/Students.vue";
import StudyRoom from "../views/ClassRoom/StudyRoom.vue";
import Library from "../views/Library.vue";
import Institute from "../views/Institute.vue";
import InstituteProfile from "../views/InstituteProfile.vue";
import Education from "../views/Education.vue";
import ManageCourse from "../views/LastMenu/ManageCourse.vue";
import ManageLibrary from "../views/LastMenu/ManageLibrary.vue";
import AccountSetting from "../views/LastMenu/AccountSetting.vue";
import TechnicalSupport from "../views/LastMenu/TechnicalSupport.vue";
import UpdateProfile from "../views/LastMenu/UpdateProfile.vue";

import Notification from "../views/Notification.vue";
import FriendRequest from "../views/FriendRequest.vue";






Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            auth: false
        }
    },
    {
        path: "/signup-student",
        name: "SignupStudent",
        component: SignupStudent,
        meta: {
            auth: false
        }
    },
    {
        path: "/signup-instructor",
        name: "SignupInstructor",
        component: SignupInstructor,
        meta: {
            auth: false
        }
    },
    {
        path: "/signup-institute",
        name: "SignupInstitute",
        component: SignupInstitute,
        meta: {
            auth: false
        }
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
        meta: { requiresAuth: true },
    },
    {
        path: "/my-desk",
        name: "MyDesk",
        component: MyDesk,
        meta: { requiresAuth: true },
    },
    {
        path: "/courses",
        name: "Courses",
        component: Courses,
        meta: { requiresAuth: true },
    },
    {
        path: "/my-instructors",
        name: "Instructors",
        component: Instructors,
        meta: { requiresAuth: true },
    },


    {
        path: "/institute-instructor-list",
        name: "InstituteInstructorList",
        component: InstituteInstructorList,
        meta: { requiresAuth: true },
    },
    {
        path: "/institute-student-list",
        name: "InstituteStudentList",
        component: InstituteStudentList,
        meta: { requiresAuth: true },
    },

    {
        path: "/students",
        name: "Students",
        component: Students,
        meta: { requiresAuth: true },
    },
    {
        path: "/my-study-room",
        name: "StudyRoom",
        component: StudyRoom,
        meta: { requiresAuth: true },
    },
    {
        path: "/library",
        name: "Library",
        component: Library,
        meta: { requiresAuth: true },
    },
    {
        path: "/institute",
        name: "Institute",
        component: Institute,
        meta: { requiresAuth: true },
    },

    {
        path: "/institute-profile/:id",
        name: "InstituteProfile",
        component: InstituteProfile,
        meta: { requiresAuth: true },
    },
    {
        path: "/education",
        name: "Education",
        component: Education,
        meta: { requiresAuth: true },
    },
    {
        path: "/my-courses",
        name: "ManageCourse",
        component: ManageCourse,
        meta: { requiresAuth: true },
    },
    {
        path: "/my-library",
        name: "ManageLibrary",
        component: ManageLibrary,
        meta: { requiresAuth: true },
    },
    {
        path: "/account-setting",
        name: "AccountSetting",
        component: AccountSetting,
        meta: { requiresAuth: true },
    },
    {
        path: "/technical-support",
        name: "TechnicalSupport",
        component: TechnicalSupport,
        meta: { requiresAuth: true },
    },
    {
        path: "/update-profile",
        name: "UpdateProfile",
        component: UpdateProfile,
        meta: { requiresAuth: true },
    },

    {
        path: "/notification",
        name: "Notification",
        component: Notification,
        meta: { requiresAuth: true },
    },

    {
        path: "/friend-request",
        name: "FriendRequest",
        component: FriendRequest,
        meta: { requiresAuth: true },
    },
    { path: '*', redirect: '/' }


];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {

    var loggedIn = localStorage.getItem('user_id');

    if (to.matched.some(record => record.meta.requiresAuth) && (loggedIn == null || loggedIn == false)) {
        next('/')
        return;
    }
    next()
})





export default router;