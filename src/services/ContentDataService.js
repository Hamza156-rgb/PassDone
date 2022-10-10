
import http from "../http-common";
// import authHeader from './auth-header';

class ContentDataService {
  get(langId, pageName) {
    return http.get('content/getcontent?pageName=' + pageName + '&langId=' + langId);
  }

  getCountry() {
    return http.get('getAllCountries?lang_id=1')
  }

  getUniversity(id) {
    return http.get('getAllInstitutesByCountry?country_id=' + id)
  }
  getMajor() {
    var id = "";
    if (localStorage.getItem("user_type") == 1 || localStorage.getItem("user_type") == 2) {
      id = localStorage.getItem('university_id');
    }
    else {
      id = localStorage.getItem('user_id');
    }
    return http.get('getAllTrainingCoursesByInstitute?institute_id=' + id)
  }

  getDegree(id) {
    return http.get('getAllAcademicDegreesByInstitutes?institute_id=' + id)
  }
  postStudent(form) {
    const formData = new FormData();
    formData.append('first_name', form.FirstName)
    formData.append('father_name', form.FatherName)
    formData.append('last_name', form.LastName)
    formData.append('date_of_birth', form.date)
    formData.append('gender', form.gender)
    formData.append('mobile', form.phone)
    formData.append('country_id', form.homeTown)
    formData.append('lives_in_id', form.livesIn)
    formData.append('city', form.city)
    formData.append('university_id', form.university)
    formData.append('major_id', form.majors)
    formData.append('double_majors', form.doubleMajors)
    formData.append('academic_degree_id', form.degree)
    formData.append(' period', form.period)
    formData.append(' till_now', form.tillNow)
    formData.append('email', form.email)
    formData.append(' password', form.password)
    return http.post('createStudent', formData);
  }

  jobTitle() {
    return http.get('getAllJobTitles')
  }
  postInstructor(form) {
    console.log(form.majors);
    const formData = new FormData();
    formData.append('first_name', form.FirstName)
    formData.append('father_name', form.FatherName)
    formData.append('last_name', form.LastName)
    formData.append('date_of_birth', form.date)
    formData.append('gender', form.gender)
    formData.append('mobile', form.phone)
    formData.append('country_id', form.homeTown)
    formData.append('lives_in_id', form.livesIn)
    formData.append('city', form.city)
    formData.append('university_id', form.university)
    formData.append('major_teach', form.majors)
    formData.append('major_intrested', form.doubleMajors)
    formData.append('job_title_id', form.jobtitle)
    formData.append(' period', form.period)
    formData.append(' till_now', form.tillNow)
    formData.append('email', form.email)
    formData.append(' password', form.password)
    return http.post('createInstructor', formData);
  }

  Institute() {
    return http.get('getAllTypeOfInstitute')
  }
  getMajorInstitute() {
    return http.get('getAllMajorCourses')
  }
  getTraningInstitute() {
    return http.get('getAllTrainingCourses')
  }

  postInstitute(form) {
    console.log(form.majors);
    const formData = new FormData();
    formData.append('email', form.email)
    formData.append(' password', form.password)
    formData.append(' country_id', form.country)
    formData.append(' established_year', form.year)
    formData.append('name', form.Name)
    formData.append('type_of_institute_id', form.type)
    formData.append('majors', form.subjectMajor)
    formData.append('training_courses', form.course)
    formData.append('about', form.about)
    formData.append('address', form.address)
    formData.append('contact_imformation', form.contact)
    return http.post('createInstitute', formData);
  }
  login(form) {
    return http.get('login?email=' + form.email + '&password=' + form.password, '');
  }



  getColleagues(id) {
    return http.get('getTotalUserColleagues?user_id=' + id)
  }

  getFollowers(id) {
    return http.get('getTotalUserFollower?user_id=' + id)
  }
  getFollowing(id) {
    return http.get('getTotalUserFollowing?user_id=' + id)
  }
  getFriends(id) {
    return http.get('getTotalUserFriends?user_id=' + id)
  }

  getUniversityInstructors(id) {
    return http.get('getTotalInstitutesInstructors?user_id=' + id)
  }
  getUniversityStudents(id) {
    return http.get('getTotalInstitutesStudents?user_id=' + id)
  }
  getUniversityFollowers(id) {
    return http.get('getTotalUserFollower?user_id=' + id)

  }


  getActiveStudents() {
    return http.get('getTopActiveStudents')

  }
  getActiveInstructors() {
    return http.get('getTopActiveInstructors')

  }
  getActiveInstitutes() {
    return http.get('getTopActiveInstitutes')

  }

  getHomePost() {
    return http.get('getAllPosts')

  }

  postTrue(id) {
    return http.post('addTrueToPost?post_id=' + id)
  }
  removeTrue(id) {
    return http.post('removeTrueToPost?post_id' + id)
  }
  postFalse(id) {
    return http.post('addFalseToPost?post_id=' + id)
  }

  removeFalse(id) {
    return http.post('removeFalseToPost?post_id=' + id)
  }
  postHighlight(id) {
    return http.post('addHighLightToPost?post_id=' + id)
  }
  removeHighlight(id) {
    return http.post('removeHighLightToPost?post_id=' + id)

  }

  addReply(commentForm) {
    const formData = new FormData();
    formData.append('post_id', commentForm.Post_Id)
    formData.append(' description', commentForm.description)
    formData.append('posted_by', localStorage.getItem('user_id'))
    formData.append('posted_by_name', commentForm.name)
    return http.post('createPostReply', formData);
  }

  addBook(form) {
    const formData = new FormData();
    formData.append('name', form.book)
    formData.append('subject', form.subject)
    formData.append('course_id', form.course)
    formData.append('detail', form.detail)
    formData.append('posted_by', localStorage.getItem('user_id'))
    if (form.attachments == null || form.attachments == undefined || form.attachments == '') {
      formData.append('file', "")
    }
    else {
      formData.append('file', form.attachments)
    }
    return http.post('createBook', formData);
  }



  updateBook(updateForm) {
    const formData = new FormData();
    formData.append('name', updateForm.book)
    formData.append('subject', updateForm.subject)
    formData.append('course_id', updateForm.course)
    formData.append('detail', updateForm.detail)
    formData.append('oldFile', updateForm.oldFile)
    formData.append('posted_by', localStorage.getItem('user_id'))
    formData.append('id', updateForm.id)

    if (updateForm.attachments == null || updateForm.attachments == undefined || updateForm.attachments == '') {
      formData.append('file', "")
    }
    else {
      formData.append('file', updateForm.attachments)
    }
    return http.post('updateBook', formData);
  }


  getmyBook() {
    return http.get('getBookByUser?user_id=' + localStorage.getItem("user_id"))
  }
  deletemyBook(id) {
    return http.post('deleteBook?id=' + id)
  }

  getInstituteProfile() {
    return http.get('getInstituteById?user_id=' + localStorage.getItem('user_id'))
  }

  getInstituteProfileTwo(id) {
    return http.get('getInstituteById?user_id=' + id)
  }

  getInstituteFeed() {
    return http.get('getTotalUserPosts?user_id=' + localStorage.getItem('user_id'))
  }

  getInstituteFeedId(id) {
    return http.get('getTotalUserPosts?user_id=' + id)
  }



  getInstituteMajor() {
    return http.get('getTotalInstituteMajors?user_id=' + localStorage.getItem('user_id'))
  }
  getInstituteMajorId(id) {
    return http.get('getTotalInstituteMajors?user_id=' + id)
  }

  getInstituteCourse() {
    return http.get('getTotalInstituteCourses?user_id=' + localStorage.getItem('user_id'))
  }
  getInstituteCourseId(id) {
    return http.get('getTotalInstituteCourses?user_id=' + id)
  }



  getInstituteInstructor() {
    return http.get('getTotalInstitutesInstructors?user_id=' + localStorage.getItem('user_id'))
  }
  getInstituteInstructorId(id) {
    return http.get('getTotalInstitutesInstructors?user_id=' + id)
  }


  getInstituteStudents() {
    return http.get('getTotalInstitutesStudents?user_id=' + localStorage.getItem('user_id'))
  }
  getInstituteStudentsId(id) {
    return http.get('getTotalInstitutesStudents?user_id=' + id)
  }


  getInstituteFollowers() {
    return http.get('getTotalUserFollower?user_id=' + localStorage.getItem('user_id'))
  }
  getInstituteFollowersId(id) {
    return http.get('getTotalUserFollower?user_id=' + id)
  }

  getInstructorInstitute() {
    var id = "";
    if (localStorage.getItem("user_type") == 1 || localStorage.getItem("user_type") == 2) {
      id = localStorage.getItem('university_id');
    }
    else {
      id = localStorage.getItem('user_id');
    }
    return http.get('getAllInstructorsByInstitute?university_id=' + id)
  }

  addInstitueCourses(form) {
    const formData = new FormData();
    formData.append('training_course_id', form.course)
    formData.append('instructor_id', form.teacher)
    formData.append('institute_id', localStorage.getItem('user_id'))
    return http.post('createInstituteToTrainingCourse', formData);
  }

  changeCourseStatus(formStatus) {
    const formData = new FormData();
    formData.append('id', formStatus.id)
    formData.append('is_active', formStatus.is_Active)
    return http.post('changeStatusInstituteToTrainingCourse', formData)
  }
  deleteCourse(id) {
    return http.post('deleteInstituteToTrainingCourse?id=' + id)
  }


  getAllInstitute() {
    return http.get('getAllInstitutes')
  }
  getAllBooks() {
    return http.get('getAllBooks')
  }


  sharePost(form) {
    const formData = new FormData();
    formData.append('description', form.notes)
    formData.append('where_to_show', form.show)
    formData.append('who_can_see', form.see)
    formData.append('post_type', form.type)
    formData.append('posted_by', localStorage.getItem('user_id'))
    formData.append('user_type', localStorage.getItem('user_type'))
    if (form.attachments == null || form.attachments == undefined || form.attachments == '') {
      formData.append('image', "")
    }
    else {
      formData.append('image', form.attachments)
    }
    return http.post('createPost', formData);
  }

deletePost(id){
  return http.post('deletePost?id=' + id)
}


}

export default new ContentDataService();