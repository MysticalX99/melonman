function temp() {
  thneed.ySpeed = 5;
  if(thneed.y + thneed.ySpeed >= canvas.height - thneed.height) {
    while(thneed.y + 1 < canvas.height - thneed.height) {
      thneed.y++;
    }
    thneed.ySpeed = 0
    thneed.gravity = 0
  } 
  /*
  if(thneed.y >= canvas.height - thneed.height) {
   thneed.ySpeed = 0
   thneed.gravity = 0
   thneed.y = canvas.height - thneed.height
  }*/
}

