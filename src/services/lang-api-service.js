import config from '../config';
import TokenService from './token-service';

const LanguageService = {
    getAllWords(){
        return fetch(`${config.API_ENDPOINT}/language`, {
          headers: {
            'authorization': `Bearer ${TokenService.getAuthToken()}`
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
    getWord(){
      return fetch(`${config.API_ENDPOINT}/language/head`, {
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    submitUserAnwer(value){
      return fetch(`${config.API_ENDPOINT}/language/guess`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          guess: value
        }),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },

}
export default LanguageService;