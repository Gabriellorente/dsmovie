 import {Reactcomponent as StarFull } from 'assets/img/star-full.svg';
 import {Reactcomponent as StarHalf} from 'assets/img/star-half.svg';
 import {Reactcomponent as StarEmpty } from 'assets/img/star-empty.svg';

 function MovieStars() {

    return (
        <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
    )
 }

 export default MovieStars;