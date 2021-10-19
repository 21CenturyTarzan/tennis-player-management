import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Side from './side';

import PlayerInfo from './info';
import PlayerInfoEditor from './info/edit';

import PlayerGoal from './goal';
import PlayerGoalDetail from './goal/detail';
import PlayerGoalNew from './goal/new';
import PlayerGoalEdit from './goal/edit';

import PlayerMatch from './match';
import PlayerMatchNew from './match/new';
import PlayerMatchEdit from './match/edit';

import PlayerResult from './result';
import PlayerResultNew from './result/new';
import PlayerResultEdit from './result/edit';

import Notification from '../components/notification';



export default class PlayerApp extends Component {
    render() {
        return (
        <main className="l-container meeting-consent">
            <BrowserRouter>
                <div className="l-content position-relative">
                    <Notification/>
                    <Switch>
                        <Route exact path="/player/info" component = {PlayerInfo} />
                        <Route exact path="/player/info/edit" component = {PlayerInfoEditor} />

                        <Route exact path="/player/goal" component = {PlayerGoal} />
                        <Route exact path="/player/goal/new" component = {PlayerGoalNew} />
                        <Route exact path="/player/goal/detail/:id" component = {PlayerGoalDetail} />
                        <Route exact path="/player/goal/edit/:id" component = {PlayerGoalEdit} />

                        <Route exact path="/player/match" component = {PlayerMatch} />
                        <Route exact path="/player/match/new" component = {PlayerMatchNew} />
                        <Route exact path="/player/match/edit" component = {PlayerMatchEdit} />

                        <Route exact path="/player/result" component = {PlayerResult} />
                        <Route exact path="/player/result/new" component = {PlayerResultNew} />
                        <Route exact path="/player/result/edit" component = {PlayerResultEdit} />
                    </Switch>
                </div>
                <Side />
            </BrowserRouter>
        </main>
        );
    }
}