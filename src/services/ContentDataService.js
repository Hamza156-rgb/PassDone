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
  getMajor(id){
    return http.get('getAllTrainingCoursesByInstitute?institute_id=' + id)
  }
 
  getDegree(){
    return http.get('getAllMajorCourses')
  }


  login(form) {
    const formData = new FormData();
    formData.append('username', form.username)
    formData.append('password', form.password)
    return http.post('user/login', formData);
  }

}

export default new ContentDataService();