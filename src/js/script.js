
let videos = [
      {
            name: "Serenus - Música para relaxar e dormir profundamente",
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iHeGlIjEhOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      }
]
let images = [
      {
            src: '../assets/payContent.jpg',
            alt: 'pay me now'
      }
]
let handleModal= {
      open(){
            document.querySelector('aside').classList.remove('disable')
      },
      close(){
            document.querySelector('aside').classList.add('disable')
      }
}

let Dom = {
      count: 0,
      imageIndex:0,
      sectionContent(content= ''){
            
            Dom.count ++
          
            if(Dom.count === 2 ){
                  
                  let html =
                  
                 
                        `
                        <section class="video">
                              <div class="iframeBox">
                                    ${content}
                                    <a href="https://serenus.futuro-agora.com/"></a>

                                    <img src="${images[Dom.imageIndex].src}" alt="${images[Dom.imageIndex].alt}" onclick="handleModal.open()">
                              </div>     
                        </section>
                        
                        `
                
                  Dom.count = 0
                  Dom.imageIndex ++
                  
                  
                  
                  return html
            }
            else{
                  let html =
                  `
                        <section class="video">
                              <div class="iframeBox">
                                    ${content}
                                    
                              </div>     
                        </section>
                  
                  `
              return html
            }       
      },
      createSection(video = {name:'', content:''}){
            let section = document.createElement('section')
            section.innerHTML += Dom.sectionContent(video.content)
            return section
      },
      insertInBody(){
            let allVideos = document.getElementById('allVideos')
            videos.forEach(video=>{
                  let section = Dom.createSection(video)
                  allVideos.appendChild(section)
            })  
      }
}
let app = {
      init(){
            try {
                  Dom.insertInBody()
            } catch (error) {
                  console.log(error.message)
            }
      }
}
app.init()


