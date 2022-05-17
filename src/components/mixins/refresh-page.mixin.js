import axios from 'axios';

export const refreshPageMixin = {
  data() {
    return {
      isRouterAlive:true,
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
        if(this.hashChanged){
        this.reloadApp()
        }
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
        return true;
      }

      return currentHash !== newHash;
    },
    reloadApp() {
       // new content clear cache so user gets the new version
       caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          console.log(cacheName)
          caches.delete(cacheName);
        });
      });
      console.log("New content is downloading.");
      this.currentHash = this.newHash;
     // window.location.reload();
     this.isRouterAlive = false
      setTimeout(()=>{
         this.isRouterAlive = true
      },0)
    }
  }
};