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