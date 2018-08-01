import Header from '~/components/header/Header.vue'
const MixinGenerator = (bcColor) => {
  return {
    components: {
      Header
    },
    mounted(){
      document.querySelector('body').style.background = bcColor;
    }
  }
}

export default MixinGenerator;
