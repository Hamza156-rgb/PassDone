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
import Students from "../views/ClassRoom/Students.vue";
import StudyRoom from "../views/ClassRoom/StudyRoom.vue";
import Library from "../views/Library.vue";
import Institute from "../views/Institute.vue";
import InstituteProfile from "../views/InstituteProfile.vue";
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
    },
    {
        path: "/signup-student",
        name: "SignupStudent",
        component: SignupStudent,
    },
    {
        path: "/signup-instructor",
        name: "SignupInstructor",
        component: SignupInstructor,
    },
    {
        path: "/signup-institute",
        name: "SignupInstitute",
        component: SignupInstitute,
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/my-desk",
        name: "MyDesk",
        component: MyDesk,
    },
    {
        path: "/courses",
        name: "Courses",
        component: Courses,
    },
    {
        path: "/my-instructors",
        name: "Instructors",
        component: Instructors,
    },
    {
        path: "/students",
        name: "Students",
        component: Students,
    },
    {
        path: "/my-study-room",
        name: "StudyRoom",
        component: StudyRoom,
    },
    {
        path: "/library",
        name: "Library",
        component: Library,
    },
    {
        path: "/institute",
        name: "Institute",
        component: Institute,
    },

    {
        path: "/institute-profile",
        name: "InstituteProfile",
        component: InstituteProfile,
    },
    {
        path: "/my-courses",
        name: "ManageCourse",
        component: ManageCourse,
    },
    {
        path: "/my-library",
        name: "ManageLibrary",
        component: ManageLibrary,
    },
    {
        path: "/account-setting",
        name: "AccountSetting",
        component: AccountSetting,
    },
    {
        path: "/technical-support",
        name: "TechnicalSupport",
        component: TechnicalSupport,
    },
    {
        path: "/update-profile",
        name: "UpdateProfile",
        component: UpdateProfile,
    },

    {
        path: "/notification",
        name: "Notification",
        component: Notification,
    },

    {
        path: "/friend-request",
        name: "FriendRequest",
        component: FriendRequest,
    },


];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;