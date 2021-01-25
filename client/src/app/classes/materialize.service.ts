//import * as M from 'materialize-css/dist/js/materialize';
declare var M;
export class MaterializeService {
  
  static toast(message: string) {
    M.toast({html: message});
  };

 // document.addEventListener('DOMContentLoaded', function() {
  //  const elems = document.querySelectorAll('.carousel');
  //  const instances = M.Carousel.init(elems, {});
 // });
}