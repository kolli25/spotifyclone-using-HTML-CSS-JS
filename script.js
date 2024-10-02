console.log("let's enter into the javaScript")

async function getSongs(){
   let a = await fetch("http://127.0.0.1:3000/songs/")
   let response = await a.text();
   let div = document.createElement("div")
   div.innerHTML = response;
   let as = div.getElementsByTagName("a")
   let Songs = [] 
   for(let index = 0; index < as.length; index++){
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        Songs.push(element.href.split("/songs/")[1])
    }
   }
   return Songs;
}
async function main(){
    //number of the songs
    let songs = await getSongs()
    console.log(songs) 

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for(const song of songs){
        songUL.innerHTML = songUL.innerHTML + `<li> <img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20"," ")}</div>
                                <div>Giri babu</div>
                            </div>
                            <div class="playnow">
                                <span>play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div>
                        
        
        </li>`;
         
                           
        
    }

    //playing the first songs
    var audio = new Audio(songs[3]);
    audio.play();

    audio.addEventListener("loadeddata", () => {
        console.log(audio.duration,audio.currentSrc,audio.currentTime)
        // The duration variable now holds the duration (in seconds) of the audio clip
      });
} 

main()