

var emptytilePosRow = 1;
var emptytilePosCol = 2;
var cellDisplacement = "69px";



function moveTile() 
{
   // Gets the position of the current element
   var pos = $(this).attr('data-location');
   var posRow = parseInt(pos.split(',')[0]);
   var posCol = parseInt(pos.split(',')[1]);
 }

 // Move Up
   if (posRow + 1 == emptytilePosRow && posCol == emptytilePosCol) 
   {
      $(this).animate({
      'top' : "+=" + cellDisplacement //moves up
      });

      $('#empty').animate({
      'top' : "-=" + cellDisplacement //moves down
      });

      emptytilePosRow-=1;
      $(this).attr('data-location',(posRow+1) + "," + posCol);
   }

   // Move Down
   if (posRow - 1 == emptytilePosRow && posCol == emptytilePosCol) 
   {
      $(this).animate({
      'top' : "-=" + cellDisplacement //moves down
      });

      $('#empty').animate({
      'top' : "+=" + cellDisplacement //moves up
      });

      emptytilePosRow+=1;
      $(this).attr('data-location',(posRow-1) + "," + posCol);
   }

   // Move Left
   if (posRow == emptytilePosRow && posCol + 1 == emptytilePosCol) 
   {
      $(this).animate({
      'right' : "-=" + cellDisplacement //moves right
      });

      $('#empty').animate({
      'right' : "+=" + cellDisplacement //moves left
      });

      emptytilePosCol -= 1;
      $(this).attr('data-location',posRow + "," + (posCol+1));
   }

   // Move Right
   if (posRow == emptytilePosRow && posCol - 1 == emptytilePosCol) 
   {
      $(this).animate({
      'right' : "+=" + cellDisplacement //moves left
      });

      $('#empty').animate({
      'right' : "-=" + cellDisplacement //moves right
      });

      emptytilePosCol += 1;
      $(this).attr('data-location',posRow + "," + (posCol-1));
   }

   // Update empty position
   $('#empty').attr('data-location',emptytilePosRow + "," + emptytilePosCol);
}