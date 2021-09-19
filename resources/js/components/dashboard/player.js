import ReactDOM from 'react-dom';
import { filter } from 'lodash';

export default function PlayerList() {
 
  return (
      <>
        <div class="d-flex align-items-center mb-2">
            <div class="symbol me-5">
                <img src="assets/media/avatars/150-1.jpg" class="" alt="" />
            </div>
            <div class="flex-grow-1">
                <a href="" class="text-dark fw-bolder text-hover-primary fs-6">Emma Smith</a>
                <span class="text-muted d-block fw-bold">Project Manager</span>
            </div>
        </div>
        <div class="d-flex align-items-center mb-2">
            <div class="symbol me-5">
                <img src="assets/media/avatars/150-1.jpg" class="" alt="" />
            </div>
            <div class="flex-grow-1">
                <a href="" class="text-dark fw-bolder text-hover-primary fs-6">Emma Smith</a>
                <span class="text-muted d-block fw-bold">Project Manager</span>
            </div>
        </div>
        <div class="d-flex align-items-center mb-2">
            <div class="symbol me-5">
                <img src="assets/media/avatars/150-1.jpg" class="" alt="" />
            </div>
            <div class="flex-grow-1">
                <a href="" class="text-dark fw-bolder text-hover-primary fs-6">Emma Smith</a>
                <span class="text-muted d-block fw-bold">Project Manager</span>
            </div>
        </div>
        <div class="d-flex align-items-center mb-2">
            <div class="symbol me-5">
                <img src="assets/media/avatars/150-1.jpg" class="" alt="" />
            </div>
            <div class="flex-grow-1">
                <a href="" class="text-dark fw-bolder text-hover-primary fs-6">Emma Smith</a>
                <span class="text-muted d-block fw-bold">Project Manager</span>
            </div>
        </div>
        <div class="d-flex align-items-center mb-2">
            <div class="symbol me-5">
                <img src="assets/media/avatars/150-1.jpg" class="" alt="" />
            </div>
            <div class="flex-grow-1">
                <a href="" class="text-dark fw-bolder text-hover-primary fs-6">Emma Smith</a>
                <span class="text-muted d-block fw-bold">Project Manager</span>
            </div>
        </div>
        <div class="d-flex align-items-center mb-2">
            <div class="symbol me-5">
                <img src="assets/media/avatars/150-1.jpg" class="" alt="" />
            </div>
            <div class="flex-grow-1">
                <a href="" class="text-dark fw-bolder text-hover-primary fs-6">Emma Smith</a>
                <span class="text-muted d-block fw-bold">Project Manager</span>
            </div>
        </div>
      </>
  );
}


if(document.getElementById('player-list')){
    ReactDOM.render(
        <PlayerList />,
    document.getElementById('player-list')
  );
}

