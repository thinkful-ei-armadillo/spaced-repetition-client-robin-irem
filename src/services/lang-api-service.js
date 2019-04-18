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
<<<<<<< HEAD
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

=======
      getHeadWord(){
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
>>>>>>> f86f4931cc2d981ffd5d8a243241a6f7e2e2ffcb
}
export default LanguageService;