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
    formData.append('first_name', form.FirstName )
    formData.append('father_name', form.FatherName)
    formData.append('last_name', form.LastName )
    formData.append('date_of_birth', form.date)
    formData.append('gender', form.gender)
    formData.append('mobile', form.phone)
    formData.append('country_id',form.homeTown)
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

  jobTitle(){
    return http.get('getAllJobTitles')
  }




  postInstructor(form) {
    console.log(form.majors);
    const formData = new FormData();
    formData.append('first_name', form.FirstName )
    formData.append('father_name', form.FatherName)
    formData.append('last_name', form.LastName )
    formData.append('date_of_birth', form.date)
    formData.append('gender', form.gender)
    formData.append('mobile', form.phone)
    formData.append('country_id',form.homeTown)
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






  login(form) {
    const formData = new FormData();
    formData.append('username', form.username)
    formData.append('password', form.password)
    return http.post('user/login', formData);
  }

}

export default new ContentDataService();