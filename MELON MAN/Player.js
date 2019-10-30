function temp() {
  if(thneed.y >= canvas.height - thneed.height) {
   thneed.ySpeed = 0
   thneed.gravity = 0
   thneed.y = canvas.height - thneed.height
  }
}
