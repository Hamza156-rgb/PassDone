
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
  getMajor(id) {
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
  postFalse(id) {
    return http.post('addFalseToPost?post_id=' + id)
  }
  postHighlight(id) {
    return http.post('addHighLightToPost?post_id=' + id)
  }

  removeTrue(id) {
    return http.get('removeTrueToPost?post_id=' + id)
  }
  removeFalse(id) {
    return http.get('removeFalseToPost?post_id=' + id)
  }
  removeHighlight(id) {
    return http.get('removeHighLightToPost?post_id=' + id)

  }








}

export default new ContentDataService();