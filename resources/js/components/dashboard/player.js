import ReactDOM from 'react-dom';

const PLAYER = [
    {img:'images/avatar/150-1.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-2.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-3.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-4.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-5.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-6.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-7.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-8.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-9.jpg',  name:'富士　中村', time:'1 months ago'},
    {img:'images/avatar/150-10.jpg', name:'富士　中村', time:'1 months ago'}
]

export default function PlayerList() {

  return (
      <>
        <div className="px-3 pt-3">
              <input type="search" className="form-control" placeholder="選手検索"/>
        </div>
        <p className="pr-3 pl-3 m-0 text-right">{`(${PLAYER.length}人)`}</p>
        <div className="player-list pl-3 pr-3">
        {
            PLAYER.map((player,id)=>(
              <a key={id}>
                <div className="d-flex align-items-center mb-2">
                    <div className="symbol me-5">
                        <img src={player.img} alt={player.img} />
                    </div>
                    <div className="flex-grow-1">
                        <span className="text-dark fw-bolder text-hover-primary fs-6">{player.name}</span>
                        <span className="text-muted d-block fw-bold">{player.time}</span>
                    </div>
                    <div>
                      <img src="/images/edit_star_1.svg" width="20" height="20"/>
                    </div>
                </div>
              </a>
            ))
        }
        </div>      
      </>
  );
}


if(document.getElementById('l-side-content')){
    ReactDOM.render(
        <PlayerList />,
    document.getElementById('l-side-content')
  );
}

