let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://codercba.com:8000'
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL = '2'
}

export { BASE_URL, TIME_OUT }
