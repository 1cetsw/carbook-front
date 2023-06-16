import Cookies from 'js-cookie';

const cookieUtils = {
  getUserId: () => {
    return Cookies.get('userId');
  },
};

export default cookieUtils;