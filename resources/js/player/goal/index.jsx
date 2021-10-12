import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function PlayerGoal() {
    const [selected, setSelected] = useState('');

    return (
        <div id="goal">
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 className="mt-2 p-1 position-relative text-white bg-green text-center font-weight-bold">
                <span>選手管理</span>
                <Link to="/player/goal/edit" className="edit py-1" style={{marginTop:'-5px'}}><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"/></Link>
            </h3>
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">近日予定の試合</p>
            <div className="px-2 mb-2">
                <table className="table table-bordered table-success mb-2">
                    <thead>
                        <tr>
                            <th scope="col">日にち</th>
                            <th scope="col">試合名</th>
                            <th scope="col">目標</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>2018-10-29</th>
                            <td>Olymipic</td>
                            <td>1位</td>
                        </tr>
                        <tr>
                            <th>2018-10-29</th>
                            <td>Olymipic</td>
                            <td>1位</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-bordered table-info mb-2">
                    <tbody>
                        <tr>
                            <th>長期目標</th>
                            <td>2位</td>
                        </tr>
                        <tr>
                            <th>中期目標</th>
                            <td>2位</td>
                        </tr>
                        <tr>
                            <th>短期目標</th>
                            <td>2位</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">短期目標に向かっての課題</p>
            <div className="px-2 mb-2">
                <table className="table table-bordered mb-2">
                    <tbody>
                        <tr className="table-success">
                            <th className="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star5.svg" alt=""/>
                            </td>
                        </tr>
                        <tr className="table-success">
                            <th className="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star4.svg" alt=""/>
                            </td>
                        </tr>
                        <tr className="table-success">
                            <th className="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star4.svg" alt=""/>
                            </td>
                        </tr>
                        <tr className="table-danger">
                            <th className="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star3.svg" alt=""/>
                            </td>
                        </tr>
                        <tr className="table-danger">
                            <th className="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star3.svg" alt=""/>
                            </td>
                        </tr>
                        <tr className="table-danger">
                            <th className="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star3.svg" alt=""/>
                            </td>
                        </tr>
                        <tr className="table-info">
                            <th className="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star4.svg" alt=""/>
                            </td>
                        </tr>
                        <tr className="table-info">
                            <th className="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star4.svg" alt=""/>
                            </td>
                        </tr>
                        <tr className="table-info">
                            <th className="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td className="text-center">
                                <img src="/images/star4.svg" alt="/images/star4.svg"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
        </div>
    </div>
    );
}



export default PlayerGoal;