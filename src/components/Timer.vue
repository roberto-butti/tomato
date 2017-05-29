<template>
    <div class="wrapper">
        <span class="timer">{{ timerFormatted }}</span>
        <div class="actions">
            <button @click="start">Start</button>
            <button @click="stop">Stop</button>
            <button @click="reset">Reset</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            timer: {type:Number, default:0}
        },
        data() {
            return {
                timer: this.timer,
                timerInstance: null,
                timerPush: null,
                timerInit: true,
                saved: []
            };
        },
        mounted() {
            this.enableNotification();
        },
        computed: {
            timerFormatted: function(){
                return this.formatTime(this.timer);
            }
        },
        methods: {
            formatTime(sec){
                var sec_num = parseInt(sec);
                var hours   = Math.floor(sec_num / 3600);
                var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                var seconds = sec_num - (hours * 3600) - (minutes * 60);

                if (hours   < 10) {hours   = "0"+hours;}
                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
                return hours+':'+minutes+':'+seconds+ "("+sec+")";
            },
            start(){
                if(this.timerInit){
                    this.timerInit = false;
                    this.reset();
                }

                this.stop();
                this.timerInstance = setInterval(() =>{
                    this.timer = parseInt(this.timer)+1;
                },1000);
            },
            stop(){
                clearInterval(this.timerInstance);
            },
            reset(){
                this.timer = 0;
            },
            
            
        },
    }
</script>

<style lang="scss" scoped>

</style>