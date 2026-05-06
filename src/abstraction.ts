// interface MediaPlayer {
//     play() : void;
//     pause(): void;
//     stop(): void
// }

// class MusicPlayer implements MediaPlayer {
//     play() {
//         console.log("Playing music ...");
//     }
//     pause() {
//         console.log("Music pause");
        
//     }
//     stop(){
//         console.log("Music stop");
        
//     }
// }

// const AkPlayer = new MusicPlayer()

// console.log(AkPlayer.pause());
// console.log(AkPlayer.stop());

abstract class MediaPlayer2 {
    abstract play() : void;
    abstract pause(): void;
    abstract stop(): void
}

class VideoPlayer{
    play() {
        console.log("Playing music ...");
    }
    pause() {
        console.log("Music pause");
        
    }
    stop(){
        console.log("Music stop");
        
    }
}

const VdPlayer = new VideoPlayer()

console.log(VdPlayer.play());
