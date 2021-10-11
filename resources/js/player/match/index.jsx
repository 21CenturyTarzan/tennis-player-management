import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function PlayerMatch() {
    const [selected, setSelected] = useState('');

    return (
        <div id="prepare">
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <span>試合前準備</span>
                <Link to="/player/match/edit" className="edit py-1" style={{marginTop:'-5px'}}><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"/></Link>
            </h3>
            
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">大会情報</p>
            <div className="px-2 mb-2">
                <table className="table table-bordered table-info mb-2">
                    <tbody>
                        <tr>
                            <td>大会名</td>
                            <td>---------------</td>
                        </tr>
                        <tr>
                            <td>トーナメント日にち</td>
                            <td>2019-8-29</td>
                        </tr>
                        <tr>
                            <td>対戦相手名前</td>
                            <td>浮田　愛未</td>
                        </tr>
                        <tr>
                            <td>クラブ名</td>
                            <td>Manchester</td>
                        </tr>
                        <tr>
                            <td>サーフェス</td>
                            <td>クレー/オムニ/ハード</td>
                        </tr>
                        <tr>
                            <td>ラウンド</td>
                            <td>本戦/予選</td>
                        </tr>
                        <tr>
                            <td>天気</td>
                            <td>晴/曇/雨</td>
                        </tr>
                        <tr>
                            <td>起きた時の体調や気分</td>
                            <td><img src="/images/star5.svg" alt=""/></td>
                        </tr>
                        <tr>
                            <td>カテゴリー</td>
                            <td>U34</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">自己分析</p>
            <div className="px-2 mb-2">
                I dont know here exactly? Can you explain about this section?
            </div>

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">試合前に心がける事</p>
            <div className="px-2 mb-2">
                I dont know here exactly? Can you explain about this section?
            </div>


            <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
        </div>
    </div>
    );
}



export default PlayerMatch;