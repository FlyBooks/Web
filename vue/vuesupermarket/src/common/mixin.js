import { debounce } from "./utils.js";

export const itemListListener = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        //监听图片加载完成
        this.itemImgListener = () => {
            //this.$refs.backToTop.imgLoadFresh();
            debounce(this.$refs.scroll.imgLoadFresh, 500)();
        };
        this.$bus.$on("imgloadfinished", this.itemImgListener);
    }
}

export const listenBackToTop = {
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        backToTop() {
            //console.log(this.$refs.scroll);
            // this.$refs.scroll.bscroll.scrollTo(0, 0);
            this.$refs.scroll.toScroll(0, 0);
        },
    }
}