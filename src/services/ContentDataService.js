import http from "../http-common";
import authHeader from './auth-header';

class ContentDataService {
    get(langId, pageName) {
      return http.get('content/getcontent?pageName=' + pageName + '&langId=' + langId);
    }
    login(form) {
      const formData = new FormData();
      formData.append('username', form.username)
      formData.append('password', form.password)
      return http.post('user/login', formData);
    }
    
  }
  
  export default new ContentDataService();