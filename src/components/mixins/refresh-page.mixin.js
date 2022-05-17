import axios from 'axios';

export const refreshPageMixin = {
  data() {
    return {
      currentHash: '{{POST_BUILD_ENTERS_HASH_HERE}}',
     // token: localStorage.getItem('user-token'),
      hashChanged: false,
      newHash: ''
    }
  },
  methods: {
    initVersionCheck(url, frequency = 3000) {
      setInterval(() => {
        this.checkVersion(url);
      }, frequency);
    },
    async checkVersion(url) {
      try {
        const fileResponse = await axios.get(`${url}?t=${new Date().getTime()}`);

        this.newHash = fileResponse.data.hash;

        this.hashChanged = this.hasHashChanged(this.currentHash, this.newHash);
      } catch (error) {
        this.loading = false;
        if (!error.response) {
          this.errorStatus = 'Error: Network Error'
        } else {
          this.errorStatus = error.response.data.message;
        }
      }
    },
    hasHashChanged(currentHash, newHash) {
      if (!currentHash || currentHash === '{{POST_BUILD_ENTERS_HASH_HERE}}') {
        this.reloadApp()
        return true;
      }

      return currentHash !== newHash;
    },
    reloadApp() {
      this.currentHash = this.newHash;
      window.location.reload();
    }
  }
};