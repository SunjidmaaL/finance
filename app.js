// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {})();

// Санхүү дээр хжиллах контроллер 
var financeController = (function() {})();

// Програмын холбогч контроллер
var appController = (function(uiController, financeController) {
var ctrlAddItem = function() {
   
   // 1. оруулах өгөгдлийг дэлгэцнээс олж авна.
   console.log('Дэлгэцээс өгөгдлөө авах хэсэг');
   // 2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
   // 3. олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
   // 4. төсвийг тооцоолно
   // 5. эцёийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
   };

   document.querySelector('.add__btn').addEventListener('click', function() {
      ctrlAddItem();
   });

   document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13 ) {
         ctrlAddItem();
      }
   });   
})(uiController, financeController);