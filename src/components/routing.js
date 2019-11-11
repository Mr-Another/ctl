export default {
    data() {
        return {
            msgname : '混入',
            msgtitle: '另一个混入'
        }
    },
    methods: {
        /**
         * @path {String} url
         * @params {Object} data
         */
        goto(path,params) {
            if(params) {
                for(let key in params) {
                    params[key] = JSON.stringify(params[key])
                }
            }

            if(path) {
                this.$route.push({
                    path: path ,
                    query: params
                })
            }
        },

        /**
         * @param {String} key
         * @returns {string|null}
         */
        getKey(key) {
            let val = this.$router.query[key] ;
            if(!val) return null ;
            return JSON.stringify(val) ;
        }

    }
}
