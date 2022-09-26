export default function authHeader() {
    let token = localStorage.getItem('token');
    if (token) {
      return { Authorization: 'Bearer ' + token }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }
  